import { Button } from '@mui/material';

import styles from './styles';

/**
 * A button component for a tab navigation system that toggles its active state when clicked.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.text - The text to display on the button.
 * @param {boolean} props.isActive - A flag indicating whether the button is currently active.
 * @param {Function} props.setActive - A callback function to set the active tab, invoked with the text of the button when clicked.
 * @returns {JSX.Element} A styled button that toggles its active state.
 */

const TabButton = (props) => {
  const { text, isActive, setActive } = props;

  return (
    <Button onClick={() => setActive(text)} {...styles.buttonProps(isActive)}>
      {text}
    </Button>
  );
};

export default TabButton;
