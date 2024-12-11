import { Grid, Typography } from '@mui/material';

import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import GradientOutlinedButton from '@/components/GradientOutlinedButton';

import styles from './styles';

import ROUTES from '@/libs/constants/routes';

import useFilterByTime from '@/libs/hooks/useFilterByTime';
import ToolHistoryListingContainer from '@/tools/components/ToolHistoryListingContainer';

/**
 * The ToolHistoryPage component renders the tool history page,
 * which displays all the user's previous tool sessions organized by time.
 * If the user has no tool sessions, it displays a message with a button to explore tools.
 *
 * This component uses the useFilterByTime hook to group the data by time.
 */
const ToolHistoryPage = () => {
  const { data, loading } = useSelector((state) => state.toolHistory);

  const router = useRouter();
  const { isHistoryEmpty, ...categorizedData } = useFilterByTime(data);

  const renderTitle = () => (
    <Grid {...styles.titleGridProps}>
      <Typography {...styles.titleProps}>Tool History</Typography>
    </Grid>
  );

  const renderEmptyMessage = () => (
    <Grid {...styles.emptyMessageGridProps}>
      <Typography {...styles.emptyMessageProps}>
        Looks like you haven&apos;t explored history yet. Time to make some!
      </Typography>
      <GradientOutlinedButton
        bgcolor="#24272F"
        text="Explore Tools"
        textColor="#AC92FF"
        iconPlacement="left"
        clickHandler={() => router.push(ROUTES.HOME)}
        {...styles.outlinedButtonProps}
      />
    </Grid>
  );

  return (
    <Grid {...styles.mainGridProps}>
      {renderTitle()}
      {isHistoryEmpty
        ? renderEmptyMessage()
        : Object.values(categorizedData || {}).map((timeData) => (
            <ToolHistoryListingContainer
              key={timeData.title}
              data={timeData.items}
              loading={loading}
              category={timeData.title}
            />
          ))}
    </Grid>
  );
};

export default ToolHistoryPage;
