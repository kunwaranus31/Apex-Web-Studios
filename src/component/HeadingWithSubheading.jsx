import React from 'react'
import IconText from './IconText'
import { Box, Typography } from '@mui/material'

const HeadingWithSubheading = ({
  subheading,
  heading,
  headingWidth,
  align,
  justify,
  headingColor,
}) => {
  return (
    <Box sx={{ justifyItems: justify, textAlign: align }}>
      <IconText subheading={subheading} />
      <Typography
        variant="h2"
        sx={{
          width: {
            xs: "95%",      
            sm: "90%",      
            md: headingWidth || "610px",
          },
          maxWidth: "100%",
          color: headingColor,
          mx: align === "center" ? "auto" : 0, 
        }}
      >
        {heading}
      </Typography>
    </Box>
  )
}

export default HeadingWithSubheading
