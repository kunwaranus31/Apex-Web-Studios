import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import fireIcon from "../assets/fire-icon.png";
import clientReview from "../assets/client-review.png";
import rating from "../assets/rating.png";
import bannerImg1 from "../assets/banner-img-1.png";
import bannerImg2 from "../assets/banner-img-2.png";
import bannerImg3 from "../assets/banner-img-3.png";
import bannerbg from "../assets/banner-bg-img.png";
import LogoSlider from "../component/LogoSlider";
import ImageText from "../component/ImageText";
import secBanner from "../assets/secbanner.png";
import HeadingWithSubheading from "../component/HeadingWithSubheading";
import ValueSection from "../component/ValueSection";
import circleLine from "../assets/linewithcircle.png";
import phone1 from "../assets/phoneimage1.png";
import phone2 from "../assets/phoneimage2.png";
import ImageText2 from "../component/ImageText2.jsx";
import IconWithInfo from "../component/IconWithInfo.jsx";
import softwareIcon from "../assets/software.png";
import webIcon from "../assets/web.png";
import dataIcon from "../assets/data.png";
import mobileIcon from "../assets/mobile.png";
import aiIcon from "../assets/ai.png";
import devopsIcon from "../assets/devops.png";
import phones from "../assets/twophones.png";
import NumberWithText from "../component/NumberWithText.jsx";
import numbersBg from "../assets/numbersbg.png";
import AccordionFaq from "../component/AccordionFaq.jsx";
import faqImage from "../assets/faqimage.jpg";
import testimonialBg from "../assets/testimonialbg.webp";
import Testimonial from "../component/Testimonial.jsx";
import client1 from "../assets/thumb.png";
import Consultation from "../assets/consultation.png";
import IconTextWhite from "../component/IconTextWhite.jsx";
import phonesImg from "../assets/phones.png";
import HomeForm from "../component/HomeForm.jsx";
import Blog from "../component/Blog.jsx";
import blogImg1 from "../assets/blog1.png";
import blogImg2 from "../assets/blog2.png";


const Home = () => {

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
            <Box conponent="section" sx={{ py: 4, 
                alignItems:"center",
                maxWidth:"1800px",
                justifyContent:"cneter",
                textAlign:"cenetr",
                mx:"auto"
            }} >
                <Box sx={{ textAlign: "center" }} ><Typography variant="h3" >Millions of Clients Trust Us.</Typography></Box>
                <LogoSlider />
            </Box>
            <Box>
                <ImageText subheading="About LodaTech" textImage={secBanner} heading="Pioneering Custom Tech for Complex Industries" paragraph="At LodaTech, we design and deliver tailored digital solutions that empower industry leaders to scale smarter, move faster, and innovate boldly. With deep expertise in software development, intelligent systems, and data infrastructure, we help regulated industries thrive in the digital age." text1="Built for Your Industry" text2="Scalable, Intelligent Solutions" text3="A Long-Term Tech Partner" btnText="Discover More" displayShow="none" containerWidth="1440px" imageWidth="600px" />
            </Box>
            <Box sx={{ py: 5 }}>
                <HeadingWithSubheading
                    align="center" justify="center"
                    subheading="LodaTechValues"
                    heading="Guided by Principles That Put Care First"
                    headingWidth="400px"
                />

                <Box
                    component="section"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center", // keep children aligned
                        flexWrap: "wrap", // wrap on smaller screens
                        gap: { xs: 1, md: 6 }, // spacing when wrapped
                        maxWidth: "1260px",
                        mx: "auto",
                        px: { xs: 2, sm: 3, md: 6, lg: "90px" },
                        py: { xs: 4, md: 6, lg: 8 },
                        // background line with circles
                        backgroundImage: {
                            xs: "none", // remove on phones
                            sm: "none", // remove on small tablets if you want
                            md: `url(${circleLine})`, // show from md+
                        },
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain", // scale nicely
                        backgroundPosition: "center", // center behind content
                    }}
                >
                    <Box sx={{ pb: { xs: 0, lg: 7 } }}>
                        <ValueSection
                            subheading="Innovation"
                            heading="Pushing Boundaries"
                            detail="We embrace cutting-edge technology and creative problem-solving"
                            contentWidth="230px"
                        />
                    </Box>
                    <Box sx={{ mr: { xs: 0, sm: 0, lg: "-55px" }, pt: { lg: 10 } }}>
                        <ValueSection
                            subheading="Integrity"
                            heading="Transparency at Every Step"
                            detail="Trust is our foundation. We prioritize security, ethical practices, and clear communication."
                            contentWidth="250px"
                        />
                    </Box>
                    <Box sx={{ pb: { xs: 0, lg: 7 } }} >
                        <ValueSection
                            subheading="Impact"
                            heading="Technology with a Purpose"
                            detail="From startups to global enterprises, we design solutions that drive real-world progress"
                            contentWidth="230px"
                        />
                    </Box>
                </Box>
            </Box>
            <Box>
                <ImageText2 subheading="LodaTech Industries" heading="Industries We Power with Precision" paragraph="Innovating Across Sectors with Tailored Technology Solutions From banking and insurance to aerospace and education, we deliver intelligent, scalable software and AI solutions that drive efficiency, growth, and transformation across industries." displayShow="block" text1="Banking" text2="Aerospace" text4="Insurance" text5="Education" btnText="Explore Industry Solution" direction="row-reverse" textImage={[phone1, phone2]} containerWidth="1440px" imageWidth="450px" />
            </Box>

            <Box
                component="section"
                sx={{
                    maxWidth: "1440px",
                    mx: "auto",
                    px: { xs: 2, sm: 3, md: 6, lg: "90px" },
                    py: { xs: 4, md: 1, lg: 8 },
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <HeadingWithSubheading
                    align="center"
                    justify="center"
                    subheading="LodaTech Services"
                    heading="Smart Tech Solutions Designed To Accelerate Your Business"
                    headingWidth="510px"
                />

                <Box
                    sx={{
                        display: "flex",
                        gap: { xs: 4, md: 5 },
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 6,
                        flexDirection: { xs: "column", md: "row" }, // stack on mobile
                        textAlign: { xs: "left", md: "left" },    // center text on small
                    }}
                >
                    {/* Left services */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        <IconWithInfo
                            textImage={softwareIcon}
                            heading="Software Development"
                            info="Custom enterprise solutions, legacy modernization, system integration."
                            infoWidth="250px"
                        />
                        <IconWithInfo
                            textImage={webIcon}
                            heading="Web Development"
                            info="Responsive websites, progressive web apps development."
                            infoWidth="250px"
                        />
                        <IconWithInfo
                            textImage={dataIcon}
                            heading="Big Data Development"
                            info="Handle Data pipelines, analytics dashboards."
                            infoWidth="220px"
                        />
                    </Box>

                    {/* Middle image */}
                    <Box
                        sx={{
                            my: { xs: 4, md: 0 }, // spacing only on mobile
                            textAlign: "center",
                        }}
                    >
                        <Box component="img" src={phones} sx={{ width: { xs: 250, sm: 320, md: 400 }, maxWidth: "100%" }} />
                    </Box>

                    {/* Right services */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        <IconWithInfo
                            textImage={mobileIcon}
                            heading="Mobile app Development"
                            info="Responsive mobile app, iOS/Android app development."
                            infoWidth="260px"
                        />
                        <IconWithInfo
                            textImage={aiIcon}
                            heading="AI Development"
                            info="Build smarter systems, automation, powered by custom AI solutions."
                            infoWidth="250px"
                        />
                        <IconWithInfo
                            textImage={devopsIcon}
                            heading="DevOps"
                            info="We design and manage robust cloud environments that grow your business."
                            infoWidth="270px"
                        />
                    </Box>
                </Box>
            </Box>

            <Box
                component="section"
                sx={{
                    maxWidth: "1440px",
                    mx: "auto",
                    px: { xs: 2, sm: 3, md: 6, lg: "90px" },
                    py: { xs: 4, md: 1, lg: 8 },
                    borderRadius: 6,
                    backgroundImage: `url(${numbersBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",

                    // Responsive layout
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" }, // stack on mobile, row on larger
                    gap: { xs: 4, md: 7 },
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: { xs: "center", sm: "left" }, // center text on mobile
                }}
            >
                <NumberWithText number="50+" info="Successfully launched solutions across fintech, edtech, and aerospace" infoWidth="260px" />
                <NumberWithText number="98%" info="Long-term partnerships built on trust and results." infoWidth="220px" />
                <NumberWithText number="10+" info="From banking to education, we tailor tech to fit your field." infoWidth="200px" />
                <NumberWithText number="1M" info="Scalable platforms powering real-world engagement." infoWidth="210px" />
            </Box>
            <Box
                component="section"
                sx={{
                    display: "flex",
                    py: { xs: 6, md: 10 },
                    gap: 12,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: { xs: "column-reverse", md: "row" },
                    px: { xs: 2, md: 0 }, // add safe side padding on mobile only
                }}
            >
                <Box sx={{ ml: { xs: 0, md: 23 }, width: "100%" }}>
                    <Box>
                        <HeadingWithSubheading
                            align="left"
                            subheading="LodaTech FAQs"
                            heading="Frequently Asked Questions"
                        />
                    </Box>

                    <Box sx={{ my: 3 }}>
                        <Typography
                            sx={{
                                color: "#858585",
                                wordBreak: { xs: "break-word", md: "normal" },
                                maxWidth: { xs: "100%", md: "unset" },
                            }}
                            variant="body"
                        >
                            We’re here to answer your most common questions about our services,
                            process, and how we bring your ideas to life.
                        </Typography>
                    </Box>

                    <Box sx={{ width: "100%" }}>
                        <AccordionFaq />
                    </Box>
                </Box>

                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Box
                        component="img"
                        src={faqImage}
                        sx={{
                            width: { xs: "100%", md: "auto" },
                            maxWidth: { xs: "100%", md: "100%" },
                            height: "auto",
                            display: "block",
                            userSelect: "none",
                        }}
                    />
                </Box>
            </Box>


            <Box sx={{
                maxWidth: 1440,
                mx: "auto",
                width: "100%",
                mb: 6,
                px: { xs: 2, sm: 3, md: 6, lg: "90px" },
                py: { xs: 4, md: 1, lg: 10 },
                backgroundImage: `url(${testimonialBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                overflow: "hidden",
                borderRadius: 6,
            }}>
                <Box>
                    <HeadingWithSubheading align="center" subheading="Testimonial" heading="This Is What Our Clients Say About Our Services." />
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                    mt: 6,
                    flexDirection: { xs: "column", md: "row" }, // column on mobile, row on desktop
                    alignItems: "center", // centers when stacked
                    flexWrap: "wrap",     // allows wrapping if needed
                }} >
                    <Testimonial name="Adam Jones" role="Team Leader" image={client1} review="There are many variations of passages of Lorem Ipsum available,a but chiropractor like majority have a suffered alteration in  some form, by injected humour" />

                    <Testimonial name="Wade Warren" role="Team Leader" image={client1} review="There are many variations of passages of Lorem Ipsum available,a but chiropractor like majority have a suffered alteration in  some form, by injected humour" />

                    <Testimonial name="Masirul Jones" role="Team Leader" image={client1} review="There are many variations of passages of Lorem Ipsum available,a but chiropractor like majority have a suffered alteration in  some form, by injected humour" />
                </Box>
            </Box>

            <Box
                sx={{
                    maxWidth: 1440,
                    mx: "auto",
                    width: "100%",
                    mb: 6,
                    px: { xs: 2, sm: 3, md: 6, lg: "90px" },
                    py: { xs: 4, md: 6, lg: 10 },
                    backgroundImage: `url(${Consultation})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 6,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" }, // stack on mobile
                        justifyContent: "center",
                        alignItems: "center",
                        gap: { xs: 6, md: 9 },
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    {/* Left column */}
                    <Box sx={{ width: { xs: "100%", md: "620px" } }}>
                        <IconTextWhite subheading="LodaTech" />
                        <Typography
                            variant="h2"
                            sx={{
                                color: "#fff",
                                width: { xs: "100%", sm: "90%", md: "400px" }, // responsive width
                                mx: { xs: "auto", md: "unset" },
                            }}
                        >
                            Let’s Build the Future of Tech Together
                        </Typography>
                        <Box sx={{ mt: 3 }}>
                            <Typography
                                variant="body1"
                                sx={{ color: "#fff", maxWidth: { xs: "100%", md: "520px" }, mx: { xs: "auto", md: "unset" } }}
                            >
                                Partner with Lodatech to create scalable, intelligent, and secure digital solutions that move your business forward. Whether you're starting fresh or need to upgrade existing systems—we’re ready.
                            </Typography>
                        </Box>

                        {/* CTA buttons */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" }, // stack on xs
                                gap: 2,
                                mb: { xs: 3, md: 5 },
                                flexWrap: "wrap",
                                mt: 3,
                                justifyContent: { xs: "center", md: "flex-start" },
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: "9999px",
                                    px: 3,
                                    py: 1.2,
                                    textTransform: "none",
                                    fontWeight: 600,
                                    color: "#7444FD",
                                    bgcolor: "#fff",
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
                                Get a Free Consultation
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
                                    borderColor: "#fff",
                                    color: "#fff",
                                    "&:hover": {
                                        borderColor: "#fff",
                                        color: "#7444FD",
                                        bgcolor: "#fff",
                                    },
                                }}
                                endIcon={<ArrowForwardIcon />}
                            >
                                Start Your Project
                            </Button>
                        </Box>
                    </Box>

                    {/* Right column */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            component="img"
                            src={phonesImg}
                            sx={{
                                width: { xs: 300, sm: 400, md: 500 },
                                height: "auto",
                                mx: "auto",
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                maxWidth: 1440,
                mx: "auto",
                width: "100%",
                mb: 6,
                px: { xs: 2, sm: 3, md: 6, lg: "90px" },
                py: { xs: 4, md: 1, lg: 10 },
                backgroundImage: `url(${testimonialBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                overflow: "hidden",
                borderRadius: 6,
            }}>
                <Box>
                    <HeadingWithSubheading align="center" subheading="Career" heading="Join Us For An Amazing Journey" />
                    <HomeForm />
                </Box>
            </Box>
            <Box sx={{ pt: 9, pb: 3 }} >
                <Box>
                    <HeadingWithSubheading align="center" subheading="Our Blog" heading="Explore Our Latest Articles and Blog Posts to Stay Informed About Trends," headingWidth="700px" justify="center" />
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    my: 3,
                    flexDirection: { xs: "column", md: "row" }, // stack on mobile, row on desktop
                    gap: { xs: 4, md: 0, lg: 3 },               // space out on mobile & lg
                }}>
                    <Blog blogImage={blogImg1} blogName="Services That Printing At You Is Important" text='Workplace' />
                    <Blog blogImage={blogImg2} blogName="A checklist to improve your daily routine" text='Coding' />
                    <Blog blogImage={blogImg1} blogName="That will help you get 1% better every day" text='Technology' />
                </Box>
            </Box>

        </Box>
    );
};

export default Home;
