import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { bannerbg, bannerImg1, bannerImg2, bannerImg3, clientReview, fireIcon, rating } from '../assets';
import { Link } from 'react-router-dom';

const HomeFirstSec = () => {
    const images = [bannerImg1, bannerImg2, bannerImg3];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrent((i) => (i + 1) % images.length);
        }, 2000); // change every 2s
        return () => clearInterval(id);
    }, []);

    return (
        <Box>
            <Box
                component="section"
                sx={{
                    maxWidth: "1440px",
                    mx: "auto",
                    px: { xs: 2, sm: 3, md: 6, lg: "90px" },
                    pt: 10,

                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // stack on mobile
                    alignItems: "center",
                    gap: { xs: 4, md: 6, lg: 8 },
                    borderRadius: 6,
                    backgroundImage: `url(${bannerbg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",
                    textAlign: { xs: "left", md: "left" }, // text center on mobile
                }}
            >

                {/* Left column */}
                <Box sx={{ flex: 1, minWidth: 0, }}>
                    {/* Tag pill */}
                    <Box
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1.5,
                            px: 2,
                            py: 1,
                            mb: { xs: 2, md: 3 },
                            borderRadius: "9999px",
                            bgcolor: "rgba(116, 68, 253, 0.12)", // soft purple
                            backdropFilter: "blur(6px)",
                            WebkitBackdropFilter: "blur(6px)",

                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                bgcolor: "#fff",
                                color: "#000",
                                px: 1.5,
                                py: 0.5,
                                borderRadius: "9999px",
                                fontWeight: 700,
                                fontSize: "0.9rem",
                                lineHeight: 1,
                                boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
                            }}
                        >
                            News!
                        </Box>

                        <Typography
                            variant="body1"
                            sx={{ color: "#7444FD", fontWeight: 600, whiteSpace: "nowrap" }}
                        >
                            Find Your Solution
                        </Typography>

                        <Box component="img" src={fireIcon} alt="fire" sx={{ width: 18, height: 18 }} />
                    </Box>

                    {/* Headline + paragraph */}
                    <Box sx={{ maxWidth: { xs: "100%", md: 720 }, mx: { xs: "auto", md: 0 } }}>
                        <Typography variant="h1" sx={{ mb: 2, color: "rgba(0,0,0,0.88)" }}>
                            Innovative Tech Solutions
                        </Typography>

                        <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", mb: 3 }}>
                            Custom software, web/mobile apps, AI &amp; data engineering tailored for banking,
                            insurance, aerospace, and education. At LodaTech, we specialize in delivering
                            custom-built digital solutions that solve real business challenges.
                        </Typography>
                    </Box>

                    {/* CTA buttons */}
                    <Box sx={{ display: "flex", gap: 2.5, mb: { xs: 3, md: 5 }, flexWrap: "wrap" }}>
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
                            to="https://www.google.com/"
                            target="_blank"
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
                            Get Started
                        </Button>

                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: "9999px",
                                px: 3,
                                py: 1.2,
                                textTransform: "none",
                                fontWeight: 600,
                                borderWidth: 2,
                                borderColor: "#7444FD",
                                color: "#7444FD",
                                "&:hover": { borderWidth: 2, borderColor: "#5e32d6", bgcolor: "rgba(116,68,253,0.06)" },
                            }}
                            endIcon={<ArrowForwardIcon />}
                            component={Link}
                            to="/services"

                        >
                            Explore Services
                        </Button>
                    </Box>

                    {/* Stats row */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
                        {/* Left: customer avatars + text */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                pr: { xs: 0, md: 3 },
                                borderRight: { xs: "none", md: "2px solid rgba(0,0,0,0.08)" },
                            }}
                        >
                            <Box component="img" src={clientReview} alt="customers" sx={{ height: 48 }} />
                            <Box>
                                <Typography sx={{ fontWeight: 600, color: "rgba(0,0,0,0.9)" }}>2,291</Typography>
                                <Typography sx={{ color: "rgba(0,0,0,0.5)" }}>Happy Customers</Typography>
                            </Box>
                        </Box>

                        {/* Right: rating */}
                        <Box>
                            <Typography sx={{ fontWeight: 600, color: "rgba(0,0,0,0.9)" }}>4.8/5</Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Box component="img" src={rating} alt="rating" sx={{ height: 18 }} />
                                <Typography sx={{ color: "rgba(0,0,0,0.5)" }}>Rating</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Right column: phone image (auto-fade) */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: { xs: 0, md: 420 },
                        mb: 0,
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            width: { xs: 320, sm: 420, md: 600 }, // keep same “visual size” as before
                            height: { xs: 320, sm: 420, md: 600 }, // give a fixed box so images can overlap

                        }}
                    >
                        {images.map((src, i) => (
                            <Box
                                key={src}
                                component="img"
                                src={src}
                                alt="App preview"
                                aria-hidden={current !== i}
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    margin: "auto",
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    userSelect: "none",
                                    pointerEvents: "none",
                                    opacity: current === i ? 1 : 0,
                                    transition: "opacity 600ms ease-in-out",
                                }}
                            />
                        ))}
                    </Box>
                </Box>


            </Box>
        </Box>
    )
}

export default HomeFirstSec
