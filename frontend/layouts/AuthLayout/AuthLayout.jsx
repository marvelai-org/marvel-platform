import { useEffect } from 'react';

import { Box, Card, Grid, useMediaQuery } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import AppDisabled from '@/components/AppDisabled';
import Loader from '@/components/Loader';

import Star from '@/assets/svg/Star_3.svg';
import Star2 from '@/assets/svg/Star_4.svg';
import ImageURLs from '@/assets/urls';

import styles from './styles';

import { setLoading } from '@/redux/slices/authSlice';

/**
 * Renders the authentication layout component that wraps the children components
 *
 * @param {Object} props - The props object
 * @param {ReactNode} props.children - The child components to be wrapped
 * @return {JSX.Element} The React component to be rendered
 */
const AuthLayout = ({ children, isAuthScreen, ...props }) => {
  const dispatch = useDispatch();

  const authUser = useSelector((state) => state.auth);

  const isTabletScreen = useMediaQuery((theme) =>
    theme.breakpoints.down('laptop')
  );

  const isLoading = authUser.loading;

  useEffect(() => {
    dispatch(setLoading(false));
  }, []);

  if (isLoading) return <Loader />;

  const renderBgImage = () => {
    return (
      <Image
        src={ImageURLs.AuthBgImage}
        alt="auth_background_logo"
        {...styles.imageProps}
      />
    );
  };

  const renderArtifacts = () => {
    return (
      <>
        <Box {...styles.reXProps}>
          <Image
            {...styles.reXImageProps}
            src={ImageURLs.MarvelAuthImg}
            alt="rexImage"
          />
        </Box>
        <Box {...styles.greenBlobProps}>
          <Image
            {...styles.blobImageProps}
            src={ImageURLs.PurpleBlobSvg}
            alt="green_blob"
          />
        </Box>
      </>
    );
  };

  const renderHead = () => {
    return (
      <Head>
        <title>Marvel AI</title>
      </Head>
    );
  };

  const renderCard = () => {
    return (
      <Card {...styles.mainCardProps} {...props}>
        <Box {...styles.starProps}>
          <Star />
        </Box>
        <Box {...styles.star2Props}>
          <Star2 />
        </Box>
        <Grid {...styles.innerCardGridProps}>{children}</Grid>
      </Card>
    );
  };

  if (isTabletScreen) return <AppDisabled head={renderHead()} />;

  return (
    <Grid {...styles.mainGridProps} {...props}>
      {renderHead()}
      {renderBgImage()}
      {renderArtifacts()}
      {isAuthScreen ? renderCard() : children}
    </Grid>
  );
};

export default AuthLayout;
