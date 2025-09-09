import { Box } from "@mui/material";
import React from "react";

// Example logos
import logo1 from "../assets/logo/logo 1.png";
import logo2 from "../assets/logo/logo 2.png";
import logo3 from "../assets/logo/logo 3.png";
import logo4 from "../assets/logo/logo 4.png";

const logos = [logo1, logo2, logo3, logo4];

const LogoSlider = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        py: 4,
        bgcolor: "transparent",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: "scroll 20s linear infinite",
          "@keyframes scroll": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {/* Duplicate logos so the loop is seamless */}
        {[...logos, ...logos].map((logo, i) => (
          <Box
            key={i}
            component="img"
            src={logo}
            alt={`logo-${i}`}
            sx={{
              height: 50,
              width: "auto",
              mx: 6,
              flexShrink: 0,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default LogoSlider;
