import { useEffect, useState } from 'react';

import { Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import DefaultPromptStar from '@/assets/svg/DefaultPromptStar.svg'; // Import MenuLogo

import styles from './styles';

import { setInput } from '@/libs/redux/slices/chatSlice';

/**
 * Renders the default prompt component.
 *
 * This component displays a set of pre-defined prompts for the user to choose from.
 *
 * @param {function} handleSendMessage - The function to handle sending a message when a prompt is selected.
 * @return {JSX.Element|null} The default prompt component or null if there is user input.
 */
const DefaultPrompt = ({ handleSendMessage }) => {
  const {
    input: userInput,
    typing,
    sessionLoaded,
    defaultPrompts,
  } = useSelector((state) => state.chat);

  const [readyToSend, setReadyToSend] = useState(false);

  const dispatch = useDispatch();

  /**
   * Handles the click event of a default prompt.
   *
   * @param {string} promptSelected - The selected default prompt.
   */
  const handleClick = (promptSelected) => {
    dispatch(setInput(promptSelected));
    setReadyToSend(true);
  };

  useEffect(() => {
    if (readyToSend) {
      handleSendMessage();
      setReadyToSend(false);
    }
  }, [readyToSend]);

  return !sessionLoaded &&
    localStorage.getItem('sessionId') == null &&
    !typing &&
    userInput.length === 0 ? (
    <Grid container {...styles.defaultPromptsGridContainer}>
      {defaultPrompts.map((prompt, key) => (
        <Grid
          key={key}
          item
          onClick={() => handleClick(prompt)}
          {...styles.defaultPrompt}
        >
          <Typography {...styles.promptText}>{prompt}</Typography>
          <Grid {...styles.defaultPromptStarLogo}>
            <DefaultPromptStar />
          </Grid>
        </Grid>
      ))}
    </Grid>
  ) : null;
};

export default DefaultPrompt;
