import { useCallback, useRef, useState } from 'react';

import {
  Button,
  CircularProgress,
  ClickAwayListener,
  Grid,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';

import { useDispatch } from 'react-redux';

import ActionIcon from '@/assets/svg/add-circle.svg';

import styles from './styles';

import { setInput } from '@/redux/slices/chatSlice';

const QuickActionButton = (props) => {
  const { onAction, text } = props;

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleQuickAction = useCallback(() => {
    setLoading(true);

    // Add any other logic you want to perform when the button is clicked
    setTimeout(() => {
      setLoading(false);
      setOpen((preOpen) => !preOpen);
    }, 500);
  }, [dispatch, onAction]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleActionClick = () => {
    dispatch(setInput(onAction));
    handleClose();
  };

  return (
    <Grid {...styles.actionButtonGridProps}>
      <IconButton>
        <Button
          onClick={handleQuickAction}
          {...styles.actionButtonProps}
          disabled={loading}
          ref={anchorRef}
        >
          {loading ? (
            <CircularProgress size={24} />
          ) : (
            <ActionIcon {...styles.iconButtonProps} />
          )}
          <span style={{ paddingLeft: '5px' }}>
            {loading ? 'Loading...' : text}
          </span>
        </Button>
      </IconButton>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="top"
        disablePortal
        {...styles.popperProps}
      >
        <Paper elevation={3} {...styles.paperProps}>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList {...styles.menuListProps}>
              <MenuItem
                onClick={() => handleActionClick('suggest_techniques')}
                {...styles.menuItemProps}
              >
                Suggest Techniques
              </MenuItem>
              <MenuItem
                onClick={() => handleActionClick('recommend_books')}
                {...styles.menuItemProps}
              >
                Recommend Books
              </MenuItem>
              <MenuItem
                onClick={() => handleActionClick('summarize')}
                {...styles.menuItemProps}
              >
                Summarize
              </MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </Grid>
  );
};

export default QuickActionButton;
