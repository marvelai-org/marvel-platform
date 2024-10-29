import { Box, Fade, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import emoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';

import MemoizedReactMarkdown from '@/components/MemoizedMarkdown';

import ImageURLs from '@/assets/urls';

import CodeComponent from '../CodeComponent';

import styles from './styles';

const TextMessage = (props) => {
  const { isMyMessage, message } = props;

  return (
    <Fade in direction="up">
      <Grid id="message" {...styles.mainGridProps(isMyMessage)}>
        <Grid {...styles.messageWrapperProps(isMyMessage)}>
          {!isMyMessage && (
            <Box>
              <Image
                width="38.74px"
                height="38.74px"
                src={ImageURLs.MarvelCircleAvatar}
                alt="Marvel AI"
              />
            </Box>
          )}
          <Typography {...styles.messageProps()}>
            <MemoizedReactMarkdown
              remarkPlugins={[remarkGfm, emoji]}
              components={{ code: CodeComponent }}
            >
              {message}
            </MemoizedReactMarkdown>
          </Typography>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default TextMessage;
