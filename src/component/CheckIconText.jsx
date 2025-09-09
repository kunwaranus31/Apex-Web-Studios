import React from 'react'
import checkIcon from "../assets/checkicon.png";
import { Box, Typography } from '@mui/material';

const CheckIconText = ({text}) => {
  return (
    <Box sx={{ display:"flex", alignItems:"center", gap:1, my:1  }} >
        <Box>
            <Box component="img" src={checkIcon} sx={{ width: 20, mt:0.7 }} />
        </Box>
        <Box>
            <Typography>
                {text}
            </Typography>
        </Box>
    </Box>
  )
}

export default CheckIconText
