import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const IconWithInfo = ({
  textImage,
  heading,
  info,
  infoWidth,
  imageWidth,
  link,
  textClr,
  fontsize,
  hover = true,          // NEW: toggle hover effect (default ON)
}) => {
  // Build hover styles only when enabled
  const hoverStyles = hover
    ? {
        "&:hover": {
          border: "solid",
          borderWidth: "2px",
          borderColor: "#7444FD",
          backgroundColor: "#FAF8FF",
          p: 2,
          borderRadius: 6,
        },
      }
    : {};

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 3,
        p: 2,
        border: "solid",
        borderWidth: "2px",
        borderRadius: 6,
        borderColor: "rgba(255, 255, 255, 0)",
        alignItems: "flex-start",
        ...hoverStyles,   // <- conditionally applied
      }}
    >
      {/* Icon */}
      <Box component="img" src={textImage} sx={{ width: imageWidth || "60px" }} />

      {/* Text content */}
      <Box>
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" }, mb: 0.5 }}
        >
          {heading}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: textClr || "#858585",
            display: "block",
            fontSize: fontsize || "16px",
            width: {
              xs: "100%",
              sm: "90%",
              md: infoWidth || "260px",
            },
          }}
        >
          {info}
        </Typography>

        {link && (
          <Typography
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#7444FD",
              alignItems: "center",
              cursor: "pointer",
              display: "inline-flex",
            }}
          >
            Read More
            <ArrowForwardIcon sx={{ width: 15, ml: 1, height: 1 }} />
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default IconWithInfo;
