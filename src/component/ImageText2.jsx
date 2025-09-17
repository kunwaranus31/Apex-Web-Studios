import { Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconText from './IconText';
import CheckIconText from './CheckIconText';
import { Link } from 'react-router-dom';

const ImageText2 = ({
  subheading,
  heading,
  paragraph,
  textImage,
  displayShow,
  text1,
  text2,
  text4,
  text5,
  btnText,
  btnLink,
  direction,
  containerWidth,
  imageWidth
}) => {
  const [current, setCurrent] = React.useState(0);

  const slides = Array.isArray(textImage) ? textImage : [textImage];

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <Box component="section"
      sx={{
        maxWidth: containerWidth,           // Set max-width to 1400px
        mx: "auto",                  // Center the content
        width: "100%",                // Ensure the box uses full width
        mb: 6,
        px: { xs: 2, sm: 3, md: 6, lg: "90px" },
        py: { xs: 4, md: 1, lg: 10 },
        background: "#FAF8FF",
        borderRadius: 6,
      }}>
      <Box sx={{ display: "flex", alignItems: "top", gap: 9, flexDirection: { xs: "column", md: direction }, justifyContent: "center" }} >
        <Box sx={{
          position: "relative",
          width: { xs: "100%", md: imageWidth },
          height: { xs: "100%", md: "auto" },
          flexShrink: 0,
          // Ensure visible height for absolutely positioned images on mobile
          aspectRatio: { xs: '16 / 10', md: 'auto' },
          minHeight: { md: "auto" },
        }}>
          {slides.map((src, i) => (
            <Box
              key={i}
              component="img"
              src={src}
              alt="illustration"
              sx={{
                width: "100%",
                height: { xs: '100%', md: 'auto' },
                position: "absolute",
                inset: 0,
                objectFit: { xs: 'cover', md: 'contain' },
                opacity: current === i ? 1 : 0,
                transition: "opacity 600ms ease-in-out",
              }}
            />
          ))}
        </Box>
        <Box>
          <Box>
            <IconText subheading={subheading} />
          </Box>


          <Box  >
            <Typography variant='h2' sx={{ width: { xs: '100%', md: '440px' }, paddingBottom: { xs: '12px', md: '20px' } }}>
              {heading}
            </Typography>
            <Typography variant='body' sx={{ color: "#858585", display: "block", width: { xs: '100%', md: '510px' } }}>
              {paragraph}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 4, my: 1.5, flexWrap: 'wrap' }}>
            <Box >
              <CheckIconText text={text1} />
              <CheckIconText text={text2} />
            </Box>
            <Box sx={{ display: displayShow }}>
              <CheckIconText text={text4} />
              <CheckIconText text={text5} />
            </Box>
          </Box>

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
            component={Link}
            to={btnLink}
            endIcon={

              <ArrowForwardIcon fontSize="small" />

            }
          >
            {btnText}
          </Button>
        </Box>

      </Box>
    </Box >
  )
}

export default ImageText2