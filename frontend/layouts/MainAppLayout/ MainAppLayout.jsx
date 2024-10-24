import { useEffect, useState } from 'react';

import { Grid, useMediaQuery } from '@mui/material';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import AppDisabled from '@/components/AppDisabled';
import Loader from '@/components/Loader';

import DiscoveryLibraryWindow from '@/templates/Chat/DiscoveryLibraryWindow';

import ROUTES from '@/constants/routes';

import NavBar from './NavBar';

import styles from './styles';

import { setLoading } from '@/redux/slices/authSlice';

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
  const [isDiscoveryOpen, setDiscoveryOpen] = useState(false);
  const router = useRouter();
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

  const handleDiscoveryToggle = () => {
    setDiscoveryOpen((prev) => !prev);
  };

  const isDiscoveryPage = router.pathname === ROUTES.DISCOVERY;

  const renderApp = () => {
    return (
      <>
        <NavBar
          toggleDiscovery={handleDiscoveryToggle}
          isDiscoveryOpen={isDiscoveryOpen}
        />
        <Grid {...styles.contentGridProps(extraContentProps, isToolPage)}>
          {children}
          {/* DiscoveryLibraryWindow component displays a sidebar that contains discovery Library. This component is rendered on the right side of the chat interface. */}
          {isDiscoveryPage && (
            <DiscoveryLibraryWindow isDiscoveryOpen={isDiscoveryOpen} />
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
