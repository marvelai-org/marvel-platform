import { Fade, Grid, List, Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import styles from './styles';

const PresentationGenerator = () => {
  const { response } = useSelector((state) => state.tools);

  const renderTitle = () => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.titleProps}>
          Main Title: {response?.main_title}
        </Typography>
      </Grid>
    );
  };

  const renderSlides = (slide, index) => {
    return (
      <Grid key={`slide-${index}`} {...styles.gridProps}>
        <Typography {...styles.keyTitleProps}>
          Slide {index}: {slide?.title}
        </Typography>
        <List>
          <Typography {...styles.listItemProps}>
            <Typography component="span" fontFamily="Satoshi Bold">
              Content:
            </Typography>{' '}
            {slide?.content}
          </Typography>
          <Typography {...styles.listItemProps}>
            <Typography component="span" fontFamily="Satoshi Bold">
              Suggestions:
            </Typography>{' '}
            {slide?.suggestions}
          </Typography>
        </List>
      </Grid>
    );
  };

  return (
    <Fade in>
      <Grid {...styles.mainGridProps}>
        {renderTitle()}
        {response?.list_slides?.map((slide, i) => renderSlides(slide, i + 1))}
      </Grid>
    </Fade>
  );
};
export default PresentationGenerator;
