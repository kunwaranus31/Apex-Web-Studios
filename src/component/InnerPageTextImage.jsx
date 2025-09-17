import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import HeadingWithSubheading from './HeadingWithSubheading';
import FlexBox from './FlexBox';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIconHeadingText from './CheckIconHeadingText';
import { Link } from 'react-router-dom';

const InnerPageTextImage = ({
    subheading,
    heading,
    headingWidth,
    paragraph,
    paragraphWidth,
    image,
    imageWidth,
    btnText1,
    btnLink1,
    btnText2,
    btnLink2,
    items,
    rowDirection,
    containerWidth,
    contentjustify

}) => {
    return (
        <FlexBox sx={{
            flexDirection: { xs: "column", md: rowDirection },
            width: containerWidth,
            justifyContent: contentjustify
        }}>
            <Box>
                <Box
                    component="img"
                    src={image}
                    sx={{
                        width: imageWidth,
                        maxWidth: "100%",
                        height: "auto",
                        mx: { xs: "auto", md: 0 },
                    }}
                />
            </Box>
            <Box>
                <HeadingWithSubheading
                    subheading={subheading}
                    heading={heading}
                    headingWidth={headingWidth}
                />
                <Typography variant="body" sx={{ width: paragraphWidth, color: "#858585", display: { lg: "block" } }}>
                    {paragraph}
                </Typography>

                {/* Render Buttons only if props are passed */}
                <FlexBox sx={{ gap: 1, pt: 3, px: 0, alignItems: { sx: "flex-start" } }}>
                    <Box>

                        {btnText1 && btnLink1 && (
                            <Button
                                component={Link}
                                to={btnLink1}
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
                                endIcon={
                                    <Box
                                        sx={{
                                            width: 24,
                                            height: 24,
                                            borderRadius: "9999px",
                                            bgcolor: "rgba(255,255,255,0.25)",
                                            display: "grid",
                                            placeItems: "center",
                                        }}
                                    >
                                        <ArrowForwardIcon fontSize="small" />
                                    </Box>
                                }
                            >
                                {btnText1}
                            </Button>
                        )}
                    </Box>
                    <Box>

                        {btnText2 && btnLink2 && (
                            <Button
                                component={Link}
                                to={btnLink2}
                                variant="outlined"
                                sx={{
                                    borderRadius: "9999px",
                                    px: 3,
                                    py: 1.2,
                                    textTransform: "none",
                                    fontWeight: 600,
                                    borderWidth: 2,
                                    borderColor: "#282C32",
                                    color: "#282C32",
                                    "&:hover": { borderWidth: 2, borderColor: "#282C32", bgcolor: "rgba(116,68,253,0.06)" },
                                }}
                                endIcon={<ArrowForwardIcon />}
                            >
                                {btnText2}
                            </Button>
                        )}
                    </Box>

                </FlexBox>
                {items && items.length > 0 && (
                    <Box>
                        <CheckIconHeadingText items={items} />
                    </Box>
                )}
            </Box>

        </FlexBox>
    );
};

export default InnerPageTextImage;
