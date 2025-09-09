import { Box, Typography } from '@mui/material'
import React from 'react'
import FlexBox from '../component/FlexBox';

const TextWithBorder = ({ items }) => {
  return (
    <Box>
      {/* One flex container for all items */}
      <FlexBox sx={{ display: "flex", flexWrap: "wrap", gap: 1}}>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid #000",
              borderRadius: "30px",
              py: "10px",
              px: "20px",
            }}
          >
            <Typography variant="body1" fontSize="14px" >{item.text}</Typography>
          </Box>
        ))}
      </FlexBox>
    </Box>
  );
};

export default TextWithBorder;
