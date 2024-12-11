import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';

import fetchTools from '@/libs/redux/thunks/tools';

/**
 * Returns properties used in the ToolPage component.
 *
 * @return {object} - An object containing  a single tool's props.
 */
const useToolProps = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    query: { toolId },
  } = router;

  const { data: tools, loading } = useSelector((state) => state.tools);

  const toolDoc = tools?.find((tool) => tool?.maskedToolUrl === toolId);

  useEffect(() => {
    if (!tools) dispatch(fetchTools());
  }, []);

  return {
    loading,
    toolDoc,
  };
};

export default useToolProps;
