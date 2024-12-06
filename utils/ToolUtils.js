import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { INPUT_TYPES } from '@/constants/inputs';
import { TOOLS_ID } from '@/constants/tools';

import { storage } from '@/firebase/firebaseSetup';

/**
 * Renders tool data based on the toolId and item provided from tool constants.
 *
 * @param {string} toolId - The ID of the tool to render data for.
 * @param {object} item - The item containing tool data and outputs.
 * @return {object} An object containing the rendered tool data.
 */
const getToolData = (props) => {
  const { toolId, item } = props;

  switch (toolId) {
    case TOOLS_ID.QUIZ_GENERATOR: {
      const title = `Multiple Choice Assessment - ${item.topic}`;
      const description =
        item.description ||
        `Multiple Choice Questions taken from ${item.topic}`;
      const output = item.response;
      const backgroundImgURL =
        'https://firebasestorage.googleapis.com/v0/b/kai-ai-f63c8.appspot.com/o/Quizify.png?alt=media&token=d1255f27-b1a1-444e-b96a-4a3ac559237d';
      const logo =
        'https://firebasestorage.googleapis.com/v0/b/kai-ai-f63c8.appspot.com/o/QuizifyLogo.png?alt=media&token=9bf1d066-fba4-4063-9640-ef732e237d31';

      return {
        title,
        description,
        backgroundImgURL,
        logo,
        output,
        ...item,
      };
    }
    case TOOLS_ID.FLASHCARDS_GENERATOR: {
      const concepts = item.response?.map((card) => card.concept) || [];
      const primaryConcept = concepts[0] || 'Various Concepts';

      let notableConcepts = '';
      if (concepts.length > 1) {
        notableConcepts =
          concepts.slice(0, 1).join(', ') +
          (concepts.length > 2 ? ', and ' : ' and ') +
          concepts[concepts.length - 1];
      } else {
        notableConcepts = primaryConcept;
      }

      const title = `Flashcards on ${primaryConcept} and More`;
      const description = `Includes concepts like ${notableConcepts}`;
      const flashCards = item.response;
      const flashcardBackgroundImgURL =
        'https://firebasestorage.googleapis.com/v0/b/kai-ai-f63c8.appspot.com/o/Dynamo.png?alt=media&token=db14183f-a294-49b2-a9de-0818b007c080';
      const flashcardLogo =
        'https://firebasestorage.googleapis.com/v0/b/kai-ai-f63c8.appspot.com/o/YoutubeLogo.png?alt=media&token=2809083f-f816-41b6-8f86-80582b3da188';

      return {
        title,
        description,
        backgroundImgURL: flashcardBackgroundImgURL,
        logo: flashcardLogo,
        output: flashCards,
        ...item,
      };
    }
    default:
      return {
        title: 'Default Title',
        backgroundImgURL: null,
        logo: null,
        output: null,
        ...item,
      };
  }
};

/**
 * Transforms form data into a format suitable for submission.
 *
 * @param {object} values - The current form values.
 * @return {array} An array of objects containing the transformed form data.
 *
 * This function transforms the form data by converting any numeric strings to
 * integers. It does this by using Number.isNaN instead of isNaN to check if a
 * string is a valid number. It also trims the input strings to remove any
 * whitespace. The transformed form data is returned as an array of objects,
 * where each object has a 'name' property and a 'value' property.
 */
const transformFormData = (values) => {
  return Object.entries(values).map(([name, originalValue]) => {
    // Convert numeric strings to integers using Number.isNaN instead of isNaN
    let value = originalValue;
    if (
      typeof originalValue === 'string' &&
      !Number.isNaN(Number(originalValue.trim())) &&
      originalValue.trim() !== ''
    ) {
      value = parseInt(originalValue.trim(), 10);
    }
    return { name, value };
  });
};

/**
 * Prepare form payload for submission.
 *
 * @param {object} props - The props to pass for form payload preparation.
 * @param {array} props.inputs - The inputs to prepare from.
 * @param {array} props.transformedData - The transformed inputs to prepare from.
 * @param {object} props.values - The current input values to prepare.
 * @param {object} props.watchedValues - The watched input values to prepare.
 * @return {array} The prepared form payload.
 */
const prepareFormPayload = async ({
  inputs,
  transformedData,
  values,
  watchedValues,
}) => {
  let updatedData = transformedData;

  const fileUrls = [];

  // Filter file and file type selector inputs
  const fileInputs = inputs.filter(
    (input) =>
      input.type === INPUT_TYPES.FILE ||
      input.type === INPUT_TYPES.FILE_TYPE_SELECTOR
  );

  // Upload files from file and file type selector inputs
  const fileUploadPromises = fileInputs.map(async (input) => {
    // omit previous values
    updatedData = updatedData.filter(
      (item) =>
        item.name !== `${input.name}_file` &&
        // Check bug below
        item.name !== `${input.name}_url` &&
        item.name !== input.name
    );

    // Add file type with value
    updatedData.push({
      name: `${input.name}_type`,
      value: values[input.name].toLowerCase(),
    });

    const fileKey =
      input.type === INPUT_TYPES.FILE_TYPE_SELECTOR
        ? `${input.name}_file`
        : input.name;

    // Watch inputs to get files to upload
    const files = watchedValues[fileKey];

    // If files exist then upload
    if (files && files.length > 0) {
      const uploadPromises = files.map(async (file) => {
        try {
          const storageRef = ref(storage, `uploads/${file.name}`);
          await uploadBytes(storageRef, file);
          const url = await getDownloadURL(storageRef);
          return url;
        } catch (error) {
          throw new Error(error);
        }
      });

      const urls = await Promise.all(uploadPromises);

      if (input.type === INPUT_TYPES.FILE_TYPE_SELECTOR) {
        fileUrls.push({ name: `${input.name}_url`, value: urls[0] });
      } else {
        fileUrls.push({ name: input.name, value: urls[0] });
      }
    }
  });

  await Promise.all(fileUploadPromises);

  // Remove any existing file inputs from updateData to avoid duplicates
  const finalData = [...updatedData, ...fileUrls];

  return finalData;
};

export { getToolData, transformFormData, prepareFormPayload };
