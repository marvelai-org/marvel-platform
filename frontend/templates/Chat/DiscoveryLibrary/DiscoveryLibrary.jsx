import { useEffect, useState } from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import UnionPurpleIcon from '@/assets/svg//UnionPurple.svg';
import DiscoveryIcon from '@/assets/svg/add-block2.svg';

import AvatarImage from '@/assets/svg/ReadyPlayerMeAvatar.svg';
import StarGroupIcon from '@/assets/svg/starGroupIcon.svg';
import UnionIcon from '@/assets/svg/Union.svg';

import styles from './styles';

import { resetChat } from '@/redux/slices/chatSlice';
import addPersonas from '@/redux/thunks/addPersonas';
import fetchPersonas from '@/redux/thunks/fetchPersona';

const DiscoveryLibrary = (props) => {
  const { show, selectedPrompt } = props;
  const { data: user } = useSelector((state) => state.user);
  const personas = useSelector((state) => state.personas?.data || []);
  const loading = useSelector((state) => state.personas?.loading);
  const error = useSelector((state) => state.personas?.error);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchPersonas());
    dispatch(addPersonas());
  }, [dispatch]);

  useEffect(() => {
    if (personas && Array.isArray(personas) && personas.length > 0) {
      setIsLoaded(true);
    }
  }, [personas]);

  useEffect(() => {}, [isLoaded]);
  useEffect(() => {}, [loading]);
  useEffect(() => {}, [error]);

  const handlePersonaClick = (persona) => {
    selectedPrompt(persona);
    dispatch(resetChat());
  };

  const renderContent = () => {
    if (loading) {
      return (
        <Grid {...styles.loadingGridProps}>
          <Typography {...styles.loadingProps}>Loading...</Typography>
        </Grid>
      );
    }

    if (error) {
      return (
        <Grid {...styles.errorGridProps}>
          <Typography {...styles.errorProps}>Error loading data</Typography>
        </Grid>
      );
    }

    if (isLoaded && personas.length > 0) {
      return (
        <Grid container {...styles.cardGridProps}>
          {personas.map((persona, index) => (
            <Grid item key={index} onClick={() => handlePersonaClick(persona)}>
              <Card {...styles.cardProps}>
                <CardActionArea>
                  <CardContent>
                    <Typography {...styles.cardTitleProps}>
                      {persona.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Grid {...styles.starIconProps}>
                  <UnionPurpleIcon />
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }

    return null;
  };

  return (
    <Grid container {...styles.discoveryContainerGrid(show)}>
      <Grid container {...styles.discoveryGridProps}>
        <Grid container {...styles.discoveryPanelProps}>
          <IconButton>
            <DiscoveryIcon {...styles.discoveryIconProps} />
          </IconButton>
          <Typography {...styles.discoveryPanelTextProps}>Discovery</Typography>
        </Grid>

        <Grid item {...styles.unionIconGridProps}>
          <IconButton>
            <UnionIcon />
          </IconButton>
          <Typography {...styles.unionIconTextProps}>
            Welcome Back, {user?.fullName || 'User'}!
          </Typography>
        </Grid>

        <Grid container {...styles.avatarGridProps}>
          <Grid item {...styles.avatarImageGridProps}>
            <AvatarImage {...styles.avatarImageProps} />
          </Grid>
          <Grid item {...styles.starGroupIconGridProps}>
            <StarGroupIcon {...styles.starGroupIconProps} />
          </Grid>
          <Grid item {...styles.avatarTextBoxProps}>
            <Typography {...styles.avatarHeaderTextProps}>
              AI Custom Course Creator
            </Typography>
            <Typography {...styles.avatarSubTextProps}>
              Have Kai help you build your class from scratch!
            </Typography>
          </Grid>
        </Grid>
        {renderContent()}
      </Grid>
    </Grid>
  );
};

export default DiscoveryLibrary;
