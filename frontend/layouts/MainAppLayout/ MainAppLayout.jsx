import { useEffect } from 'react';

import { Grid, useMediaQuery } from '@mui/material';
import Head from 'next/head';

import { useDispatch, useSelector } from 'react-redux';

import AppDisabled from '@/components/AppDisabled';
import Loader from '@/components/Loader';

import SideMenu from './SideMenu';
import styles from './styles';

import { setLoading } from '@/redux/slices/authSlice';
import { SuccessNotification } from '@/components/Notification/Notifications'; // Import SuccessNotification
import { setShowSignupSuccessNotification } from '@/redux/slices/authSlice';
/**
 * Renders the main application layout.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The child components to render.
 * @param {Object} props.extraContentProps - The additional properties for the extra content.
 * @param {boolean} props.isToolPage - Indicates if the layout is for a tool page.
 * @return {ReactNode} The rendered main application layout.
 */
const MainAppLayout = (props) => {
  const { children, extraContentProps, isToolPage } = props;
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  const isTabletScreen = useMediaQuery((theme) =>
    theme.breakpoints.down('laptop')
  );

  const isLoading = auth.loading || !user.data || !auth.data;

  useEffect(() => {
    dispatch(setLoading(false));
  }, []);

  if (isLoading) return <Loader />;

  const renderHead = () => {
    return (
      <Head>
        <title>Marvel AI</title>
      </Head>
    );
  };

  const renderApp = () => {
    return (
      <>
        <SideMenu />
        <Grid {...styles.contentGridProps(extraContentProps, isToolPage)}>
          {children}
          {auth.showSignupSuccessNotification && ( // Render SuccessNotification if the flag is true
            <SuccessNotification
              message={`👋 Welcome to Kai, ${user.data?.fullName || 'User'}!`}
              // open={true}
              open={auth.showSignupSuccessNotification}
              // onClose={() => dispatch(setShowSignupSuccessNotification(false))}
              onClose={(event, reason) => {
                console.log('event:', event, 'reason:', reason);
                if (
                  reason !== 'clickaway'
                  // reason === 'timeout' ||
                  // reason === 'clickaway' ||
                  // reason === 'undefined'
                ) {
                  dispatch(setShowSignupSuccessNotification(false));
                }
              }}
            />
          )}
        </Grid>
      </>
    );
  };

  return (
    <Grid {...styles.mainGridProps}>
      {renderHead()}
      {isTabletScreen && <AppDisabled head={renderHead()} />}
      {!isTabletScreen && renderApp()}
    </Grid>
  );
};

export default MainAppLayout;
