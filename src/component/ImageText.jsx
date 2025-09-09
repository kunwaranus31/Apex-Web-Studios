import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconText from "./IconText";
import CheckIconText from "./CheckIconText";

const ImageText = ({
  subheading,
  heading,
  paragraph,
  textImage,
  displayShow,
  text1,
  text2,
  text3,
  text4,
  text5,
  btnText,
  direction = "row", // default
  containerWidth = "1400px",
  imageWidth = { xs: "100%", md: "500px" }, // responsive default
}) => {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: containerWidth,
        mx: "auto",
        px: { xs: 2, sm: 3, lg: "90px" }, // smaller padding on mobile
        width: "100%",
        mb: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 4, md: 9 },
          flexDirection: { xs: "column", md: direction }, // stack on mobile
          textAlign: { xs: "left", md: "left" },
        }}
      >
        {/* Image column */}
        <Box sx={{ flexShrink: 0, textAlign: "center" }}>
          <Box
            component="img"
            src={textImage}
            alt="illustration"
            sx={{
              width: imageWidth,
              maxWidth: "100%",
              height: "auto",
              mx: { xs: "auto", md: 0 },
            }}
          />
        </Box>

        {/* Text column */}
        <Box sx={{ flex: 1 }}>
          <Box mb={2}>
            <IconText subheading={subheading} />
          </Box>

          <Box>
            <Typography
              variant="h2"
              sx={{
                maxWidth: { xs: "100%", md: "440px" },
                pb: 2,
                mx: { xs: "auto", md: 0 },
              }}
            >
              {heading}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#858585",
                display: "block",
                maxWidth: { xs: "100%", md: "560px" },
                mx: { xs: "auto", md: 0 },
              }}
            >
              {paragraph}
            </Typography>
          </Box>

          {/* Check items */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, md: 4 },
              my: 2,
              justifyContent: { xs: "left", md: "flex-start" },
            }}
          >
            <Box>
              <CheckIconText text={text1} />
              <CheckIconText text={text2} />
              <CheckIconText text={text3} />
            </Box>
            <Box sx={{ display: displayShow }}>
              <CheckIconText text={text4} />
              <CheckIconText text={text5} />
            </Box>
          </Box>

          {/* Button */}
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "9999px",
                px: 3,
                py: 1.2,
                textTransform: "none",
                fontWeight: 600,
                bgcolor: "#7444FD",
                "&:hover": { bgcolor: "#5e32d6" },
              }}
              endIcon={<ArrowForwardIcon fontSize="small" />}
            >
              {btnText}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageText;
