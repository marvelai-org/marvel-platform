import { httpsCallable } from 'firebase/functions';

import {
  setError,
  setStreaming,
  setTyping,
} from '@/libs/redux/slices/chatSlice';
import { functions } from '@/libs/redux/store';

const sendMessage = async (payload, dispatch) => {
  try {
    const sendCommunication = httpsCallable(functions, 'chat');
    const response = await sendCommunication(payload);

    return response.data;
  } catch (err) {
    dispatch(setError('Error! Couldn\u0027t send message'));
    dispatch(setStreaming(false));
    dispatch(setTyping(false));
    setTimeout(() => {
      dispatch(setError(null));
    }, 3000);

    // eslint-disable-next-line no-console
    console.error('Error could not send message', err);

    // eslint-disable-next-line no-alert
    alert('Error could not send message');
    return null;
  }
};

export default sendMessage;
