import MainAppLayout from '@/layouts/MainAppLayout';

import ToolHistoryPage from '@/tools/views/ToolHistoryPage';

const ToolOutputHistory = () => {
  return <ToolHistoryPage />;
};

ToolOutputHistory.getLayout = function getLayout(page) {
  return <MainAppLayout>{page}</MainAppLayout>;
};

export default ToolOutputHistory;
