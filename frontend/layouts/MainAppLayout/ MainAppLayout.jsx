import React, { useEffect } from 'react';

import { Grid, useMediaQuery } from '@mui/material';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

import useNetworkStatus from '@/hooks/useNetworkStatus';

import AppDisabled from '@/components/AppDisabled';
import Loader from '@/components/Loader';

import SideMenu from './SideMenu';
import styles from './styles';

import NetworkError from '@/pages/network-error';
import { setLoading } from '@/redux/slices/authSlice';

const MainAppLayout = (props) => {
  const { children, extraContentProps, isToolPage } = props;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const isTabletScreen = useMediaQuery((theme) =>
    theme.breakpoints.down('laptop')
  );

  const { isOnline, isErrorPage } = useNetworkStatus();

  useEffect(() => {
    dispatch(setLoading(false));
  }, [dispatch]);

  const renderHead = () => (
    <Head>
      <title>Kai AI</title>
    </Head>
  );

  const renderSideMenu = () => {
    return !isErrorPage && isOnline && <SideMenu />;
  };

  const isLoading = auth.loading || !user.data || !auth.data;

  if (isLoading) return <Loader />;

  return (
    <Grid {...styles.mainGridProps}>
      {renderHead()}
      {isTabletScreen && <AppDisabled head={renderHead()} />}
      {!isTabletScreen && (
        <>
          {renderSideMenu()}
          <Grid {...styles.contentGridProps(extraContentProps, isToolPage)}>
            {!isOnline ? <NetworkError /> : children}
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default MainAppLayout;
