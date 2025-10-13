import { Box, Typography } from '@mui/material'
import React from 'react'
import FlexBox from './FlexBox'

const ContactSection = ({
    items

}) => {
  return (
    <FlexBox sx={{
        justifyContent:"center"
    }} >
        {items.map((item, index) => (
            
        <Box
        key={index}
        sx={{
            
            background:"#faf8ff",
            borderRadius:3,
            p:2,
            width:"380px"
        }} >
            <Box sx={{
                p:4,
                border:1,
                borderRadius:3,
                borderColor:"#cdcdcdff" ,
                textAlign:"center"
            }}>
                <Box 
                component="img"
                src={item.image}
                sx={{
                    width:"80px",
                    mb:3
                }}
                />
                <Typography 
                variant='h3'
                sx={{
                    mb:1
                }}
                >
                    {item.heading}
                </Typography>
                <Typography 
                variant='body'
                
                >
                    {item.text}
                </Typography>

            </Box>
        </Box>
        ))

        }

    </FlexBox>
  )
}

export default ContactSection
