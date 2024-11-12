import { useRouter } from 'next/router';

import useToolProps from '@/hooks/useToolProps';

import ToolPage, { ToolPageSkeleton } from '@/templates/ToolPage';

import ROUTES from '@/constants/routes';

/**
 * This component renders the ToolPage component.
 *
 * @return {JSX.Element} Returns the ToolPage component.
 */
const IndividualToolPage = () => {
  const router = useRouter();

  const { toolDoc, loading, ...toolProps } = useToolProps();

  if (loading || !toolDoc) {
    if (!toolDoc && !loading) router.push(ROUTES.HOME);
    return <ToolPageSkeleton />;
  }

  return <ToolPage toolDoc={toolDoc} {...toolProps} />;
};

export default IndividualToolPage;
