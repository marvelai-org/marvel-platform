import { useState } from 'react';

import { Grid, Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import ToolHistoryCard from '../ToolHistoryCard';
import ToolHistoryCardSkeleton from '../ToolHistoryCard/Skeleton';

import ToolOutputHistoryDrawer from '../ToolOutputHistoryDrawer';

import styles from './styles';

const DEFAULT_HISTORY = new Array(4)
  .fill()
  .map((_, index) => ({ id: index + 1 }));

/**
 * Renders the ToolHistoryListingContainer component, which displays a list of tool cards or skeleton loaders based on loading state.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.data - The array of tool data to display.
 * @param {boolean} props.loading - The loading state indicating whether data is being fetched.
 * @param {string} props.category - The category name to display as the title.
 * @returns {JSX.Element} The rendered ToolHistoryListingContainer component.
 */
const ToolHistoryListingContainer = (props) => {
  const { data, category } = props;

  const { loading } = useSelector((state) => state.toolHistory);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  const handleOpenSidebar = (cardData) => {
    setSelectedCardData(cardData);
    toggleDrawer(true);
  };

  if (data?.length === 0) return null;

  const determineToolHistoryLength = () => {
    if (!data) return null;
    if (category !== 'Months Before') return data.length;
    return Object.values(data || {})?.length;
  };

  const renderTitle = () => (
    <Grid {...styles.headerGridProps}>
      <Typography {...styles.categoryTitleProps}>
        {category} {data && `(${determineToolHistoryLength()})`}
      </Typography>
    </Grid>
  );

  const renderCategorizedTools = () => {
    return (
      Array.isArray(data) &&
      data?.map((item, i) => (
        <ToolHistoryCard
          key={`$history-${i}`}
          onOpen={handleOpenSidebar}
          data={item}
        />
      ))
    );
  };

  const renderMonthsBefore = () => {
    return Object.values(data)?.map((item) => {
      return item?.map((toolItem, i) => (
        <ToolHistoryCard
          key={`$history-${i}`}
          onOpen={handleOpenSidebar}
          data={toolItem}
        />
      ));
    });
  };

  const renderCards = () => (
    <Grid {...styles.containerGridProps}>
      <Grid {...styles.innerListGridProps}>
        {category === 'Months Before'
          ? renderMonthsBefore()
          : renderCategorizedTools()}
      </Grid>
    </Grid>
  );

  const renderLoader = () => (
    <Grid {...styles.containerGridProps}>
      <Grid {...styles.innerListGridProps}>
        {DEFAULT_HISTORY.map((tool) => (
          <ToolHistoryCardSkeleton key={tool.id} />
        ))}
      </Grid>
    </Grid>
  );

  return (
    <Grid {...styles.mainGridProps}>
      {category && renderTitle()}
      {loading ? renderLoader() : renderCards()}
      <ToolOutputHistoryDrawer
        isOpen={openDrawer}
        onClose={toggleDrawer}
        data={selectedCardData}
      />
    </Grid>
  );
};

export default ToolHistoryListingContainer;
