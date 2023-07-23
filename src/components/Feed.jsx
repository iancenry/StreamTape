import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Feed = () => {
  return (
    <Stack
      sx={{
        flexDirection: {
          // sx - usually column, medium devices annd up row
          sx: 'column',
          md: 'row',
        },
      }}
    >
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: '0', md: 2 },
        }}
      >
        Sidebar
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright {new Date().getFullYear()} Vid254
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
