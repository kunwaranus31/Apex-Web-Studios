import React from 'react';
import { Box, Typography } from '@mui/material';
import FlexBox from './FlexBox';
import checkIcon from "../assets/checkicon.png";

const CheckIconHeadingText = ({ items }) => {
  return (
    <Box >
      {items.map((item, index) => (
        <Box key={index} sx={{ gap: 1, alignItems: 'bottom', mb: 2,display:"flex",gap:1 }}>
          <Box>
            <Box component="img" src={checkIcon} sx={{ width: 22, mt: 0.7 }} />
          </Box>
          <Box>
            <Typography variant="h5"  sx={{ fontWeight: 600 }}>
              {item.iconHeading}
            </Typography>
            <Typography variant="body" fontSize={14} >
              {item.iconDetail}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CheckIconHeadingText;
