import { useState } from 'react';

import { Grid, Typography } from '@mui/material';

import { useDispatch } from 'react-redux';

import ChatHistoryButtonIcon from '@/assets/svg/ChatHistoryButtonIcon.svg';
import ChatIcon from '@/assets/svg/ChatIcon.svg';
import ChatIconFill from '@/assets/svg/ChatIconFill.svg';

import ChatHistory from '../ChatHistory/ChatHistory';

import styles from './styles';

import { resetChat } from '@/redux/slices/chatSlice';

/**
 * ChatHistoryWindow component displays a sidebar that contains chat history.
 * The sidebar is toggled by clicking on the toggle button.
 */
const ChatHistoryWindow = () => {
  // State variable to track whether the chat history is shown or hidden. Initially set to false.
  const [showHistory, setShowHistory] = useState(false);

  // The dispatch function from the Redux store. Used to dispatch actions to the store.
  const dispatch = useDispatch();

  /**
   * Toggles the visibility of the chat history.
   *
   * @return {void} No return value.
   */
  const toggleHistory = () => setShowHistory((prev) => !prev);

  /**
   * Resets the chat state and removes the session ID from local storage.
   *
   * @return {void} No return value.
   */
  const newChat = () => {
    // Dispatch the resetChat action to reset the chat state
    dispatch(resetChat());

    // Remove the session ID from local storage
    localStorage.removeItem('sessionId');
  };

  return (
    <Grid {...styles.chatHistoryWindow}>
      <Grid {...styles.chatHistoryHeader(showHistory)}>
        <Grid {...styles.chatHistoryHeaderTitleContainer}>
          <Grid>{showHistory ? <ChatIconFill /> : <ChatIcon />}</Grid>
          <Typography {...styles.chatHistoryHeaderTitleText}>
            Chat History
          </Typography>
        </Grid>
        <Grid
          {...styles.chatHistoryHeaderButton(showHistory)}
          onClick={() => toggleHistory()}
        >
          <ChatHistoryButtonIcon />
        </Grid>
      </Grid>
      <Grid {...styles.chatHistoriesContainer(showHistory)}>
        {showHistory ? <ChatHistory /> : null}
      </Grid>
    </Grid>
  );
};

export default ChatHistoryWindow;
