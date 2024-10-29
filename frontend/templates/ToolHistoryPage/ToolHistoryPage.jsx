import { Grid, Typography } from '@mui/material';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import useFilterByTime from '@/hooks/useFilterByTime';

import GradientOutlinedButton from '@/components/GradientOutlinedButton';
import ToolHistoryListingContainer from '@/components/ToolHistoryListingContainer';

import ROUTES from '@/constants/routes';

import styles from './styles';

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
