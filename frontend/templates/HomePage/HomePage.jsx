import { useEffect, useState, useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

import ToolsListingContainer from '@/components/ToolsListingContainer';
import SnackBar from '@/components/SnackBar';

import { setLoading, setUser } from '@/redux/slices/authSlice';
import { setUserData } from '@/redux/slices/userSlice';
import { AuthContext } from '@/providers/GlobalProvider';
import store, { auth, firestore, functions } from '@/redux/store';
import ROUTES from '@/constants/routes';

import useRedirect from '@/hooks/useRedirect';

import styles from './styles';

const HomePage = (props) => {
  const { data, loading } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  
  const { handleOpenSnackBar } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('Default Message');
  const [fullName, setFullName] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return null;

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { claims } = await user.getIdTokenResult(true);
        dispatch(setUser({ ...user.toJSON(), claims }));

        if (user.emailVerified) {
          const userDocRef = doc(firestore, "users", user.uid);
          const userDoc = await getDoc(userDocRef);
          const userData = userDoc.data();
          const retrievedFullName = userData.fullName || 'User';
          setFullName(retrievedFullName);

          const creationTime = new Date(user.metadata.creationTime);
          const lastSignInTime = new Date(user.metadata.lastSignInTime);
          const isNewUser = creationTime.getTime() === lastSignInTime.getTime();

          if (isNewUser && !userData.notificationShown) {
            const signupMessage = (
              <>
                <Typography sx={styles.signupTitleProps}>
                  Sign Up Successful!
                </Typography>
                <Typography sx={styles.signupSubtitleProps}>
                  👋 Welcome to KAI! {retrievedFullName}
                </Typography>
              </>
            );
            setMessage(signupMessage);
            setOpen(true);

            // Update the user document to mark that the notification has been shown
            await updateDoc(userDocRef, { notificationShown: true });
          } 
        }
      } else {
        dispatch(setLoading(false));
        dispatch(setUser(false));
        dispatch(setUserData(false));
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useRedirect(firestore, functions, handleOpenSnackBar);

  const renderTitle = () => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.titleProps}>
          Welcome to{' '}
          <Typography {...styles.highlightTextProps}>Kai Tools</Typography> 👋
        </Typography>
        <Typography {...styles.subtitleProps}>
          Made for{' '}
          <Typography {...styles.highlightTextProps}>educators</Typography>
        </Typography>
      </Grid>
    );
  };

  return (
    <Grid {...styles.mainGridProps}>
      {renderTitle()}
      <ToolsListingContainer
        data={data}
        loading={loading}
        category="All Tools"
      />
      <SnackBar
        open={open}
        severity={severity}
        message={message}
        handleClose={handleClose}
        customStyles={{
          alertStyles: {
            ...styles.alertStyles,
            ...styles.alertStylesNoIcon, // Hide the green tick mark
          },
          closeIconButton: styles.closeIconButton, // Position the close button
        }} // Pass custom styles for the notification
      />
    </Grid>
  );
};

export default HomePage;