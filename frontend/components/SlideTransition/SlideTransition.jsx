import React, { useCallback, useEffect, useState } from 'react';

import { Slide } from '@mui/material';

const SlideTransition = ({ children, direction = 'up', duration = 300 }) => {
  const [currentChildren, setCurrentChildren] = useState(children);
  const [slideIn, setSlideIn] = useState(true);

  const compareChildren = useCallback((prevChildren, nextChildren) => {
    if (prevChildren === null || nextChildren === null) {
      return prevChildren === nextChildren;
    }
    return prevChildren.type === nextChildren.type;
  }, []);

  useEffect(() => {
    let timer;
    if (!compareChildren(children, currentChildren)) {
      setSlideIn(false);
      timer = setTimeout(() => {
        setCurrentChildren(children);
        setSlideIn(true);
      }, duration);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [children, currentChildren, compareChildren, duration]);

  return (
    <Slide direction={direction} in={slideIn} timeout={duration}>
      <div>{currentChildren}</div>
    </Slide>
  );
};

export default SlideTransition;
