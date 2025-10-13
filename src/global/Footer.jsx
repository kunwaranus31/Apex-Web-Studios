import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import footerImg from "../assets/footer.png";
import logo from "../assets/logo.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LeftIconText from '../component/LeftIconText';
import MailIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from 'react-router-dom';


const Footer = () => {

    const items = [
        { label: "Software Development", href: "/software-development" },
        { label: "Web Development", href: "/web-development" },
        { label: "Big Data Development", href: "/big-data-development" },
        { label: "AI Development", href: "/ai-development" },
        { label: "DevOps", href: "/devops" },
        { label: "Mobile App Development", href: "/mobile-app-development" },
    ];

    const pageItems = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Services", href: "/services" },
        { label: "Industries", href: "/industries" },
        { label: "Contact Us", href: "/contact-us" },
    ];

    return (

        <Box
            component="section"
            sx={{
                px: { xs: 2, sm: 3, md: 6, lg: "90px" },
                py: { xs: 4, md: 1 },

                backgroundImage: `url(${footerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{// hero container
                    maxWidth: "1440px",
                    mx: "auto",
                    pt: 5,
                }}>
                <Box
                    sx={{// hero container
                        display: "flex",
                        justifyContent: "space-between",
                        pb: 2,
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 4, md: 0 },
                    }}>
                    <Box sx={{ width: "370px" }} >
                        <Box component="img" src={logo} sx={{ width: 180 }} />
                        <Typography mt={3} >It is a long established fact that from will be distracted by the readable from when looking.</Typography>
                        {/* CTA buttons */}
                        <Box sx={{ display: "flex", gap: 2.5, mb: { xs: 3, md: 5 }, flexWrap: "wrap", mt: 4 }}>
                            <Button
                                variant="contained"
                                component={Link}
                                to="#"
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
                                Get Started
                            </Button>

                            <Button
                                variant="outlined"
                                component={Link}
                                to="/services"
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
                                Explore Services
                            </Button>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant='h3' >Pages</Typography>
                        <Box sx={{ display: "flex", gap: 1.2, mt: 2 }} >

                            <Divider
                                sx={{
                                    width: "20px",                // short width
                                    borderBottomWidth: "2px",     // thickness
                                    borderColor: "primary.main",  // theme primary color
                                }}
                            />
                            <Divider
                                sx={{
                                    width: "45px",                // short width
                                    borderBottomWidth: "2px",     // thickness
                                }}
                            />
                        </Box>
                        <Box component="ul" sx={{ listStyle: "none", p: 0, mt: 3.5, color: "#797979" }}>
                            {pageItems.map(({ label, href }) => (
                                <Box component="li" key={label} sx={{ listStyle: "none", mb: 1.3 }}>
                                    <Typography
                                        to={href}
                                        sx={{
                                            textDecoration: "none",
                                        }}
                                        component={Link}
                                        underline="none"
                                        color="inherit">
                                        <Typography variant="body1" sx={{
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                fontWeight: 600,
                                                color: "#7444FD"
                                            }
                                        }}>{label}</Typography>
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{}}>
                        <Typography variant='h3' >Services</Typography>
                        <Box sx={{ display: "flex", gap: 1.2, mt: 2 }} >

                            <Divider
                                sx={{
                                    width: "20px",                // short width
                                    borderBottomWidth: "2px",     // thickness
                                    borderColor: "primary.main",  // theme primary color
                                }}
                            />
                            <Divider
                                sx={{
                                    width: "45px",                // short width
                                    borderBottomWidth: "2px",     // thickness
                                }}
                            />
                        </Box>


                        <Box component="ul" sx={{ listStyle: "none", p: 0, mt: 3.5, color: "#797979" }}>
                            {items.map(({ label, href }) => (
                                <Box component="li" key={label} sx={{ mb: 1.3 }}>
                                    <Typography
                                        component={Link}
                                        to={href}
                                        underline="none"
                                        color="inherit"
                                        sx={{
                                            textDecoration: "none",
                                            
                                        }} >
                                        <Typography variant="body1" sx={{
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                fontWeight: 600,
                                                color: "#7444FD"
                                            }
                                        }}>{label}</Typography>
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                    </Box>
                    <Box sx={{ width: "320px" }} >
                        <Typography variant='h3' >Ready to get started?</Typography>
                        <Box sx={{ display: "flex", gap: 1.2, mt: 2 }} >

                            <Divider
                                sx={{
                                    width: "20px",                // short width
                                    borderBottomWidth: "2px",     // thickness
                                    borderColor: "primary.main",  // theme primary color
                                }}
                            />
                            <Divider
                                sx={{
                                    width: "45px",                // short width
                                    borderBottomWidth: "2px",     // thickness
                                }}
                            />
                        </Box>
                        <Typography sx={{ color: "#797979", mt: 3.5 }} >It is a long established fact that a reader will be distracted layout.</Typography>
                        <Box sx={{ mt: 2 }} >

                            <LeftIconText
                                icon={<MailIcon color="primary" />}
                                text={[
                                    { label: "contact.tech@gmail.com", href: "mailto:contact.tech@gmail.com" },
                                    { label: "support.tech@gmail.com", href: "mailto:support.tech@gmail.com" },
                                ]}
                                textColor="#797979"
                            />
                        </Box>
                        <Box sx={{ mt: 2 }}>

                            <LeftIconText
                                icon={<LocalPhoneIcon color="primary" />}
                                text={[
                                    { label: "+001 123 654 789 00", href: "tel:+001 123 654 789 00" },
                                    { label: "+001 6520 698 00", href: "tel:+001 6520 698 00" },
                                ]}
                                textColor="#797979"
                            />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ py: 1 }} >
                    <Divider />
                </Box>
                <Box sx={{
                    display: "flex", justifyContent: "space-between", py: 1, flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                    gap: { xs: 2, sm: 0 },
                }} >
                    <Box>


                        <Typography>
                            © 2025 – All rights reserved – LodaTech Inc. Powered by{" "}
                            <Typography
                                component={Link}
                                to="https://apexwebstudios.net/"
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="none"
                                sx={{
                                    bgcolor: "primary.main",
                                    color: "#fff",
                                    px: 1,
                                    py: 0.5,
                                    borderRadius: 1,
                                    textDecoration: "none",
                                }}
                            >
                                APEX Web Studios.
                            </Typography>
                        </Typography>

                    </Box>
                    <Box sx={{ display: "flex", gap: 3 }}>


                        <Box
                            component={Link}
                            to="#"
                            color="inherit"
                        >
                            <FacebookIcon />
                        </Box>
                        <Box
                            component={Link}
                            to="#"
                            color="inherit"
                        >
                            <TwitterIcon />
                        </Box>
                        <Box
                            component={Link}
                            to="#"
                            color="inherit"
                        >
                            <LinkedInIcon />
                        </Box>
                        <Box
                            component={Link}
                            to="#"
                            color="inherit"
                        >
                            <PinterestIcon />
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>

    )
}

export default Footer
