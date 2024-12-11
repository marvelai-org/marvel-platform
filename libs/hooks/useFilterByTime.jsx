import { useEffect, useMemo, useState } from 'react';

import moment from 'moment';

const TIME_RANGES = {
  TODAY: 'Today',
  YESTERDAY: 'Yesterday',
  PREVIOUS_7_DAYS: 'Previous 7 Days',
  PREVIOUS_30_DAYS: 'Previous 30 Days',
};

const useFilterByTime = (data) => {
  const [categorizedData, setCategorizedData] = useState(null);
  const [isHistoryEmpty, setIsHistoryEmpty] = useState(true);

  const timeRanges = useMemo(() => {
    const now = moment();
    return {
      startOfToday: now.clone().startOf('day'),
      startOfYesterday: now.clone().subtract(1, 'day').startOf('day'),
      startOfPrevious7Days: now.clone().subtract(7, 'days').startOf('day'),
      startOfPrevious30Days: now.clone().subtract(30, 'days').startOf('day'),
      startOfThisMonth: now.clone().startOf('month'),
    };
  }, []);

  const categorizeItem = (item, createdAt) => {
    const {
      startOfToday,
      startOfYesterday,
      startOfPrevious7Days,
      startOfPrevious30Days,
      startOfThisMonth,
    } = timeRanges;

    if (createdAt.isSame(startOfToday, 'day')) return TIME_RANGES.TODAY;
    if (createdAt.isSame(startOfYesterday, 'day')) return TIME_RANGES.YESTERDAY;
    if (createdAt.isBetween(startOfPrevious7Days, startOfToday, 'day', '[]'))
      return TIME_RANGES.PREVIOUS_7_DAYS;
    if (
      createdAt.isBetween(
        startOfPrevious30Days,
        startOfPrevious7Days,
        'day',
        '[]'
      )
    )
      return TIME_RANGES.PREVIOUS_30_DAYS;
    if (createdAt.isBefore(startOfThisMonth))
      return createdAt.format('MMMM YYYY');
    return null;
  };

  useEffect(() => {
    if (!data) return;

    const categorized = {
      [TIME_RANGES.TODAY]: [],
      [TIME_RANGES.YESTERDAY]: [],
      [TIME_RANGES.PREVIOUS_7_DAYS]: [],
      [TIME_RANGES.PREVIOUS_30_DAYS]: [],
      monthsBefore: {},
    };

    data.forEach((item) => {
      const createdAt = item.createdAt && moment.unix(item.createdAt.seconds);
      if (!createdAt) return;

      const category = categorizeItem(item, createdAt);

      if (Object.values(TIME_RANGES).includes(category)) {
        categorized[category].push(item);
      } else if (category) {
        if (!categorized.monthsBefore[category]) {
          categorized.monthsBefore[category] = [];
        }
        categorized.monthsBefore[category].push(item);
      }
    });

    // Sort items within each category
    Object.values(categorized).forEach((category) => {
      if (Array.isArray(category)) {
        category.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
      }
    });

    // Sort months before
    const sortedMonthsBefore = Object.fromEntries(
      Object.entries(categorized.monthsBefore).sort(
        ([a], [b]) =>
          moment(b, 'MMMM YYYY').valueOf() - moment(a, 'MMMM YYYY').valueOf()
      )
    );

    const formattedData = {
      ...Object.fromEntries(
        Object.entries(categorized)
          .map(([key, items]) => [key, { title: key, items }])
          .filter(([key]) => key !== 'monthsBefore')
      ),
      monthsBefore: { title: 'Months Before', items: sortedMonthsBefore },
    };

    setCategorizedData(formattedData);
    setIsHistoryEmpty(
      Object.values(formattedData).every(({ items }) =>
        Array.isArray(items)
          ? items.length === 0
          : Object.keys(items).length === 0
      )
    );
  }, [data, timeRanges]);

  return { ...categorizedData, isHistoryEmpty };
};

export default useFilterByTime;
