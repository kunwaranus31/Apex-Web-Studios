import { Box, Typography } from '@mui/material'
import React from 'react'
import stars from "../assets/List.png"
import reviewIcon from "../assets/icon.png"

const Testimonial = ({ name, role, image, review }) => {
  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: "#fff",
        borderRadius: 5,
        maxWidth: 330,
        width: "100%",
        position: "relative",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      {/* Avatar + Name/Role */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
        <Box
          component="img"
          src={image}
          alt={`${name}'s profile`}
          sx={{ width: 50, height: 50, borderRadius: "50%", objectFit: "cover" }}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#858585" }}>
            {role}
          </Typography>
        </Box>
      </Box>

      {/* Rating stars */}
      <Box
        component="img"
        src={stars}
        alt="Rating"
        sx={{ width: 90, mb: 1.5 }}
      />

      {/* Review text */}
      <Typography
        variant="body2"
        sx={{ color: "#858585", fontSize: "0.9rem", lineHeight: 1.6 }}
      >
        {review}
      </Typography>

      {/* Quote icon */}
      <Box
        component="img"
        src={reviewIcon}
        alt="Review icon"
        sx={{
          width: 30,
          position: "absolute",
          right: 15,
          bottom: 15,
          opacity: 0.6,
        }}
      />
    </Box>
  )
}

export default Testimonial
