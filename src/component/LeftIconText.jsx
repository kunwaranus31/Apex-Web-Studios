import React from "react";
import { Box, Typography, Link } from "@mui/material";

const LeftIconText = ({ icon, text, textColor }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
      {/* Left Icon */}
      {icon}

      {/* Right Texts */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        {Array.isArray(text) ? (
          text.map((t, i) =>
            typeof t === "string" ? (
              <Typography key={i} variant="body2" sx={{ color: textColor }}>
                {t}
              </Typography>
            ) : (
              <Link
                key={i}
                href={t.href}
                underline="none"
                sx={{ color: textColor }}
              >
                {t.label}
              </Link>
            )
          )
        ) : typeof text === "string" ? (
          <Typography variant="body2" sx={{ color: textColor }}>
            {text}
          </Typography>
        ) : (
          <Link href={text.href} underline="none" sx={{ color: textColor }}>
            {text.label}
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default LeftIconText;
