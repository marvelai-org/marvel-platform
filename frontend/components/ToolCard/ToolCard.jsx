import { AutoAwesome } from '@mui/icons-material';
import { Card, Chip, Grid, Typography } from '@mui/material';

import { useRouter } from 'next/router';

import { TOOLS_ID } from '@/constants/tools';

import styles from './styles';

/**
 * Returns a Tool Card component with an image and a chip displaying the amount of coins.
 *
 * @return {JSX.Element} The Tool Card component.
 */
const ToolCard = (props) => {
  const { id, maskedToolUrl, backgroundImgURL, name, description } = props;

  // Debugging: Log TOOLS_ID and id
  console.log('TOOLS_ID:', TOOLS_ID);
  console.log('id:', id);

  // Check if TOOLS_ID is an object and id is present
  const isPublished =
    TOOLS_ID &&
    typeof TOOLS_ID === 'object' &&
    Object.values(TOOLS_ID).includes(id);

  const router = useRouter();

  const handleRoute = () => {
    if (isPublished) {
      router.push(`/${maskedToolUrl}`);
    }
  };

  const renderTitle = () => {
    return (
      <Grid {...styles.contentGridProps}>
        <Typography {...styles.titleProps}>{name}</Typography>
        <Typography {...styles.descriptionProps}>{description}</Typography>
      </Grid>
    );
  };

  const renderLabel = () => {
    return (
      <Chip
        icon={isPublished ? <AutoAwesome /> : ''}
        {...styles.labelProps(isPublished)}
      />
    );
  };

  return (
    <Grid onClick={handleRoute} {...styles.mainGridProps}>
      <Card {...styles.cardProps(isPublished)}>
        <Grid {...styles.imageProps(backgroundImgURL)} />
        <Grid {...styles.toolDetailsGridProps}>
          {renderTitle()}
          {renderLabel()}
        </Grid>
      </Card>
    </Grid>
  );
};

export default ToolCard;
