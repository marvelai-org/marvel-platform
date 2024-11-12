/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { logger } = functions;
const DEBUG = process.env.DEBUG;

async function progressOnboardingStatus(id, targetStep) {
  DEBUG && logger.log('Advance Onboarding Status method started');

  // Validate if Id is not empty string or null
  if (!id || typeof id !== 'string') {
    DEBUG && logger.error('Invalid user ID:', id);
    throw new functions.https.HttpsError(
      'invalid-argument',
      'Invalid user ID.'
    );
  }

  // Validate if targetStep is a valid number between 1 and 5
  if (
    !targetStep ||
    typeof targetStep !== 'number' ||
    targetStep < 1 ||
    targetStep > 5
  ) {
    DEBUG && logger.error('Invalid target step:', targetStep);
    throw new functions.https.HttpsError(
      'invalid-argument',
      'Invalid target step'
    );
  }

  try {
    // Get User from Firestore Database
    const db = admin.firestore();
    const userRef = db.collection('users').doc(id);
    const userDoc = await userRef.get();

    // Validate if user exists
    if (!userDoc.exists) {
      DEBUG &&
        logger.error(
          'Error in progressing Onboarding Status:',
          'User not found'
        );
      throw new functions.https.HttpsError('not-found', 'Invalid target step');
    }
    DEBUG && logger.info('User found in database');

    // Get the onboarding object from the user
    const user = userDoc.data();
    const onboarding = user.onboarding || {};

    // Set all steps to false if they are not defined
    for (let i = 1; i <= 5; i++) {
      if (!(i in onboarding)) {
        onboarding[i] = false;
      }
    }

    // Update steps up to the target step to true
    for (let step = 1; step <= targetStep; step++) {
      onboarding[step] = true;
    }

    // Update the user's onboarding status in Firestore
    await userRef.update({ onboarding });
    DEBUG &&
      logger.info(
        `Onboarding status progressed up to step ${targetStep} successfully`
      );

    return {
      success: true,
      message: `Onboarding status advanced up to step ${targetStep}`,
    };
  } catch (error) {
    DEBUG && logger.error('Error in progressing Onboarding Status:', error);
    throw error;
  }
}

/**
 * Advances the onboarding status of a user by updating the onboarding object in the user document.
 *
 * @function advanceOnboardingStatus
 *
 * @param {Object} data - The data object passed from the client.
 * @param {string} data.uid - The user ID for which to advance the onboarding status.
 * @param {number} data.step - The target onboarding step to advance up to (1-5).
 * @param {functions.https.CallableContext} context - The Firebase callable context.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing:
 *   @returns {boolean} success - Indicates whether the operation was successful.
 *   @returns {string} message - A message describing the result of the operation.
 *
 * @throws {functions.https.HttpsError} Possible error cases:
 *   @throws {string} code - The error code.
 *   @throws {string} message - The error message.
 *
 * @example
 * // Usage as an HTTP endpoint
 * // POST request to: function link
 * // Request body:
 * // {
 * //   "data": {
 * //     "uid": "user-id",
 * //     "step": 3
 * //   }
 * // }
 *
 * // Example using fetch API:
 * fetch('function link', {
 *   method: 'POST',
 *   headers: {
 *     'Content-Type': 'application/json',
 *   },
 *   body: JSON.stringify({
 *     data: {
 *       uid: "user-id",
 *       step: 3
 *     }
 *   }),
 * })
 * .then(response => response.json())
 * .then(result => console.log(result))
 * .catch(error => console.error('Error:', error));
 */
const advanceOnboardingStatus = functions.https.onCall(
  async (data, context) => {
    // Getting the uid and target step from data
    const { uid, step } = data;
    DEBUG && logger.log('advance Onboarding Status started, data:', uid, step);

    // Validate if uid is not null or not a string
    if (!uid || typeof uid !== 'string') {
      throw new functions.https.HttpsError('invalid-argument', 'Invalid uid');
    }

    // Validate the step parameter
    if (!step || typeof step !== 'number' || step < 1 || step > 5) {
      throw new functions.https.HttpsError('invalid-argument', 'Invalid step');
    }

    try {
      // Progress the onboarding status of the user up to the target step
      const result = await progressOnboardingStatus(uid, step, true);

      return {
        success: result.success,
        message: result.message,
      };
    } catch (error) {
      DEBUG && logger.error('Error advancing Onboarding Status:', error);
      if (error.code === 400) {
        throw new functions.https.HttpsError('invalid-argument', error.message);
      }
      if (error.code === 403) {
        throw new functions.https.HttpsError('internal', error.message);
      }
      throw new functions.https.HttpsError(
        'internal',
        `An unexpected error occurred: ${error.message}`
      );
    }
  }
);

/**
 * Updates user profile information in Firestore except for profile picture.
 *
 * This Cloud Function is triggered via an HTTPS callable request and expects
 * user profile data to be provided in the request payload. The function validates
 * the input data, ensures required fields are present, and updates the user's
 * profile document in the Firestore database.
 * It parses json/string data and therefore cannot be used to upload images to.
 *
 * @function setupUserProfile
 * @async
 *
 * @param {Object} data - The data object containing user profile information.
 * @param {string} data.uid - The unique identifier for the user.
 * @param {string} data.fullName - The full name of the user.
 * @param {string} data.occupation - The occupation of the user.
 * @param {Object} data.socialLinks - The social media links associated with the user.
 * @param {string} data.bio - A short biography of the user.
 *
 * @param {Object} context - The context object containing authentication information.
 *
 * @returns {Object} A success message indicating the profile was updated.
 *
 * @throws {functions.https.HttpsError} 'invalid-argument' If any required fields are missing or invalid.
 * @throws {functions.https.HttpsError} 'internal' If an internal error occurs while updating the profile.
 *
 * @example
 * // Example usage in frontend:
 * const result = await firebase.functions().httpsCallable('setupUserProfile')({
 *   uid: '123',
 *   fullName: 'John Doe',
 *   occupation: 'Software Engineer',
 *   socialLinks: { twitter: 'https://twitter.com/johndoe' },
 *   bio: 'A passionate developer.'
 * });
 * console.log(result.data.message); // "User profile updated successfully"
 */

const setupUserProfile = functions.https.onCall(async (data, context) => {
  try {
    const { uid, fullName, occupation, socialLinks, bio, profilePhotoUrl } =
      data;

    // Validate fields
    if (!uid || !fullName || !occupation || !socialLinks || !bio) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'Missing required fields.'
      );
    }

    // Validate fullName
    const nameRegex = /^[a-zA-Z0-9. ]+$/;
    if (!nameRegex.test(fullName)) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'Please input a valid full name.'
      );
    }
    // Validate social media links
    if (typeof socialLinks !== 'object' || socialLinks === null) {
      logger.error(
        'Error updating user profile, no social media links provided'
      );
      throw new functions.https.HttpsError(
        'not-found',
        'no social media links provided'
      );
    } else {
      const links = Object.values(socialLinks);
      // Checking that at least one link is filled in, throws an error if keys are provided by values are empty
      const hasAtLeastOneLink = links.some((link) => link.trim() !== '');
      if (!hasAtLeastOneLink) {
        logger.error(
          'Error updating user profile, at least one social media link is required'
        );
        throw new functions.https.HttpsError(
          'internal',
          'no social media links provided'
        );
      }
    }
    // Store user data in Firestore
    const userRef = admin.firestore().collection('users').doc(uid);
    const userDoc = {
      id: uid,
      fullName: fullName,
      occupation: occupation,
      socialLinks: socialLinks,
      bio: bio,
      profilePhotoUrl: profilePhotoUrl || '',
    };

    logger.log('Updating user document in Firestore', userDoc);

    await userRef.set(userDoc, { merge: true });
    // Call the Onboarding Status Transition Utility function to advance the status
    const onboardingResult = await progressOnboardingStatus(uid, 2);
    logger.log('User profile updated successfully');
    return {
      success: true,
      newStatus: onboardingResult.message,
      message: 'User profile updated successfully',
    };
  } catch (error) {
    logger.error('Error updating user profile:', error);
    throw new functions.https.HttpsError('internal', error.message);
  }
});

/**
 * Updates user system preferences and advances onboarding status.
 *
 * @function setupUserSystemConfig
 *
 * @param {Object} data - The data object passed from the client.
 * @param {string} data.uid - The user ID for which to update preferences and advance onboarding.
 * @param {boolean} data.email - Email preference.
 * @param {boolean} data.push - Push notifications preference.
 * @param {boolean} data.reminders - Reminders preference.
 * @param {boolean} data.theme - Theme preference (true for dark, false for light).
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing:
 *   @returns {boolean} success - Indicates whether the operation was successful.
 *   @returns {Object} updatedConfig - The updated system configuration object.
 *   @returns {string} message - A message describing the result of the operation.
 *
 * @throws {functions.https.HttpsError} Possible error cases:
 *   @throws {string} code - The error code.
 *   @throws {string} message - The error message.
 *
 * @example
 * // Usage as an HTTP endpoint
 * // POST request to: function link
 * // Request body:
 * // {
 * //   "data": {
 * //     "uid": "user-id",
 * //     "email": true,
 * //     "push": false,
 * //     "reminders": true,
 * //     "theme": false
 * //   }
 * // }
 *
 * // Example using fetch API:
 * fetch('function link', {
 *   method: 'POST',
 *   headers: {
 *     'Content-Type': 'application/json',
 *   },
 *   body: JSON.stringify({
 *     data: {
 *       uid: "user-id",
 *       email: true,
 *       push: false,
 *       reminders: true,
 *       theme: false
 *     }
 *   }),
 * })
 * .then(response => response.json())
 * .then(result => console.log(result))
 * .catch(error => console.error('Error:', error));
 */
const setupUserSystemConfig = functions.https.onCall(async (data, context) => {
  const { uid, email, push, reminders, theme } = data;

  DEBUG &&
    logger.log('Update User Preferences function started with data:', data);

  // Validate input data
  if (!uid || typeof uid !== 'string') {
    throw new functions.https.HttpsError('invalid-argument', 'Invalid uid');
  }
  if (
    typeof email !== 'boolean' ||
    typeof push !== 'boolean' ||
    typeof reminders !== 'boolean' ||
    typeof theme !== 'boolean'
  ) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'Preferences must be boolean values'
    );
  }

  try {
    const db = admin.firestore();
    const userRef = db.collection('users').doc(uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      throw new functions.https.HttpsError('not-found', 'User not found');
    }

    // const user = userDoc.data(); // this can be used in future for further validation of data in user document
    const updatedConfig = {
      email,
      push,
      reminders,
      theme, // true for dark, false for light
    };

    // Update the systemconfig object in Firestore
    await userRef.update({ systemConfig: updatedConfig });

    // Call the Onboarding Status Transition Utility function to advance the status
    const onboardingResult = await progressOnboardingStatus(uid, 3);

    DEBUG &&
      logger.info(
        'User preferences updated and onboarding status advanced successfully.'
      );

    return {
      success: true,
      updatedConfig,
      newStatus: onboardingResult.message,
    };
  } catch (error) {
    DEBUG && logger.error('Error updating user preferences:', error);
    throw new functions.https.HttpsError(
      'internal',
      `An unexpected error occurred: ${error.message}`
    );
  }
});

module.exports = {
  advanceOnboardingStatus,
  setupUserProfile,
  setupUserSystemConfig,
};
