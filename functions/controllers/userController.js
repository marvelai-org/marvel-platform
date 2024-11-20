const admin = require('firebase-admin');
const { https } = require('firebase-functions');

// Helper function to validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Creates a new user document in the Firestore collection "users" with the provided data.
 *
 * @async
 * @function signUpUser
 * @param {Object} data - The data object containing the user's information.
 * @param {string} data.email - The email address of the user.
 * @param {string} data.fullName - The full name of the user.
 * @param {string} data.uid - The unique identifier for the user.
 * @param {Object} context - The context object containing information about the authenticated user.
 * @returns {Promise<Object>} A promise that resolves to an object indicating the success of the operation.
 * @returns {string} return.status - The status of the operation ('success').
 * @returns {string} return.message - A message describing the result of the operation.
 * @throws {https.HttpsError} If any of the required fields (email, fullName, uid) are missing in the data object.
 */
exports.signUpUser = https.onCall(async (data, context) => {
  const { email, fullName, uid } = data;

  // Input validations
  if (!email) {
    throw new https.HttpsError('invalid-argument', 'Email is required.', {
      code: 400,
    });
  }
  if (!isValidEmail(email)) {
    throw new https.HttpsError('invalid-argument', 'Invalid email format.', {
      code: 400,
    });
  }
  if (!uid || typeof uid !== 'string' || uid.trim() === '') {
    throw new https.HttpsError(
      'invalid-argument',
      'UID is required and must be a non-empty string.',
      { code: 400 }
    );
  }
  if (
    !fullName ||
    typeof fullName !== 'string' ||
    fullName.trim().length === 0 ||
    fullName.length > 100
  ) {
    throw new https.HttpsError(
      'invalid-argument',
      'Full name is required, must be a string, and should be between 1 and 100 characters.',
      { code: 400 }
    );
  }

  try {
    const userRef = admin.firestore().collection('users').doc(uid);
    // Create new user document
    const userDoc = {
      id: uid,
      email,
      fullName,
      onboarding: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      },
      systemConfig: {
        email: false,
        push: false,
        reminders: false,
        theme: false,
      },
    };

    await userRef.set(userDoc);
    return {
      status: 'success',
      message: 'User document created successfully',
      user: userDoc,
    };
  } catch (error) {
    // Firebase error handling
    console.error('Error creating user document:', error);
    if (error instanceof https.HttpsError) {
      throw error;
    }
    throw new https.HttpsError('internal', 'Firebase internal error.', {
      code: 500,
    });
  }
});
