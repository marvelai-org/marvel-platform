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

import categorizePrompts from '@/constants/prompts';

import styles from './styles';

import { resetChat, setInput } from '@/redux/slices/chatSlice';

const DiscoveryLibrary = (props) => {
  const { show, selectedPrompt } = props;
  const { data: user } = useSelector((state) => state.user);
  const [customPrompts, setCustomPrompts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Define your custom prompts here

    const fetchPrompts = async () => {
      // This could be an API call or local data
      setCustomPrompts(categorizePrompts);
    };

    fetchPrompts();
  }, []);

  const handlePromptClick = (prompt) => {
    selectedPrompt(prompt);
    dispatch(resetChat());
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
            {/* <img src={<AvatarImage/>} alt="Avatar"/> */}
            {/* {console.log("Avatar image present: ",<AvatarImage/>)} */}
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

        <Grid container {...styles.cardGridProps}>
          {customPrompts?.map((prompt, index) => (
            <Grid item key={index} onClick={() => handlePromptClick(prompt)}>
              <Card {...styles.cardProps}>
                <CardActionArea>
                  <CardContent>
                    <Typography {...styles.cardTitleProps}>
                      {prompt.title}
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
      </Grid>
    </Grid>
  );
};

export default DiscoveryLibrary;
