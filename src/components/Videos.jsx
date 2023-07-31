/* eslint-disable react/prop-types */
import { Box, Stack } from '@mui/material';
import { VideoCard, ChannelCard } from '../components';

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item) => (
        <Box key={item.id}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
