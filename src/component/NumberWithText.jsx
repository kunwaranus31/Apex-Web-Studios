import { Box, Typography } from '@mui/material'
import React from 'react'

const NumberWithText = ({ number, info, infoWidth }) => {
  return (
    <Box
      sx={{
        textAlign: { xs: "center", md: "left" }, // center on mobile, left on desktop
        px: { xs: 2, md: 0 }, // some horizontal padding on mobile
      }}
    >
      {/* Number */}
      <Typography
        sx={{
          fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" }, // responsive sizes
          fontWeight: 800,
          color: "#fff",
          lineHeight: 1.1,
        }}
      >
        {number}
      </Typography>

      {/* Info text */}
      <Typography
        sx={{
          width: {
            xs: "100%", // full width on small screens
            sm: "90%",
            md: infoWidth || "260px", // use prop width or fallback
          },
          color: "#fff",
          fontSize: { xs: "0.9rem", md: "1rem" },
          mt: 1,
          mx: { xs: "auto", md: 0 }, // center text on mobile
        }}
      >
        {info}
      </Typography>
    </Box>
  )
}

export default NumberWithText
