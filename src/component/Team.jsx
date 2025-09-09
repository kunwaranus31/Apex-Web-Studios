import { Box, Typography } from '@mui/material'
import React from 'react'

const Team = ({teamImg,teamName,teamDetail}) => {
  return (
    <Box sx={{
        textAlign:"center",
        py:{xs:2, md:3, lg:4}
    }} >
        <Box 
        component="img" 
        src={teamImg} 
        sx={{
            width:200,
            mb:-14
        }}
        />
        <Box sx={{
            backgroundColor:"#F8F8FF",
            borderRadius:5,
            p:3,
            textAlign:"center",
            width:280,
            pt:15,
            height:{lg:"235px"},
        }}>
            <Typography variant='h3' >
                {teamName}
            </Typography>
            <Typography>
                {teamDetail}
            </Typography>
        </Box>
    </Box>
  )
}

export default Team
