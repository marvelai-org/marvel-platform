import axios from 'axios';

const submitPrompt = async (payload, files) => {
  try {
    const formData = new FormData();
    formData.append('data', JSON.stringify(payload));

    if (!!files && files?.length > 0) {
      files.forEach((file, index) => {
        formData.append(`file${index}`, file);
      });
    }

    const url = process.env.NEXT_PUBLIC_KAI_ENDPOINT;

    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data?.data;
  } catch (err) {
    const { response } = err;
    throw new Error(
      response?.data?.message || `Error: could not send prompt, ${err}`
    );
  }
};

export default submitPrompt;
