import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import MainAppLayout from '@/layouts/MainAppLayout';
import HomePage from '@/templates/HomePage';

import fetchTools from '@/libs/redux/thunks/tools';

const Home = () => {
  const { data, loading, error } = useSelector((state) => state.tools);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) dispatch(fetchTools());
  }, []);

  return <HomePage data={data} loading={loading} error={error} />;
};

Home.getLayout = function getLayout(page) {
  return <MainAppLayout>{page}</MainAppLayout>;
};

export default Home;
