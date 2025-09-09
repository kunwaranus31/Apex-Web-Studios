import React from "react";
import { Box } from "@mui/material";

const BoxBg = ({ children, bgImage, sx, ...props }) => {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        borderRadius: 6,
        margin: "0 auto",
        ...sx, // allow extra styles
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default BoxBg;
