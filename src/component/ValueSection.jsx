import { Box, Typography } from '@mui/material'
import React from 'react'

const ValueSection = ({ subheading, detail, heading, contentWidth }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        justifyItems: "center",
        my: 3,
        px: { xs: 2, md: 0 }, // add small padding on mobile
      }}
    >
      {/* Subheading pill */}
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1.5,
          px: 1.5,
          py: 0.5,
          mb: { xs: 2, md: 1.5 },
          borderRadius: "40px",
          bgcolor: "rgba(116, 68, 253, 0.12)", // soft purple
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#7444FD",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          {subheading}
        </Typography>
      </Box>

      {/* Heading + Detail */}
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            mb: 1,
          }}
        >
          {heading}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#858585",
            display: "inline-block",
            width: {
              xs: "100%", // full width on mobile
              sm: "90%",
              md: contentWidth,
            },
          }}
        >
          {detail}
        </Typography>
      </Box>
    </Box>
  )
}

export default ValueSection
