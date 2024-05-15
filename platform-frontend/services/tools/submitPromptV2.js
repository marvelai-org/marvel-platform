import axios from 'axios';

const submitPromptV2 = async (payload, files) => {
  try {
    const formData = new FormData();

    // Append payload to the form data
    formData.append('data', JSON.stringify(payload));

    // Append files to the form data
    if (!!files && files?.length > 0) {
      files.forEach((file, index) => {
        formData.append(`file${index}`, file);
      });
    }

    const response = await axios.post(
      'https://us-central1-kai-ai-f63c8.cloudfunctions.net/toolCommunicatorV2',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    console.log(response.data);

    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error('Error could not send prompt');
  }
};

export default submitPromptV2;
