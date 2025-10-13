import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

import { secBanner, circleLine, phone1, phone2, softwareIcon, webIcon, dataIcon, mobileIcon, aiIcon, devopsIcon, phones, numbersBg, faqImage, testimonialBg, client1, Consultation, phonesImg, blogImg1, blogImg2} from '../assets';

import {Testimonial, AccordionFaq, NumberWithText, ImageText2, IconWithInfo, LogoSlider, ValueSection, HeadingWithSubheading, ImageText, IconTextWhite, HomeForm, Blog, HomeFirstSec} from '../component';

const Home = () => {

    // const images = [bannerImg1, bannerImg2, bannerImg3];
    // const [current, setCurrent] = useState(0);

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setCurrent((i) => (i + 1) % images.length);
    //     }, 2000); // change every 2s
    //     return () => clearInterval(id);
    // }, []);


    return (
        <Box>
            <Box>
                <HomeFirstSec/>
            </Box>
            <Box component="section" sx={{
                py: 4,
                alignItems: "center",
                maxWidth: "1800px",
                justifyContent: "center",
                textAlign: "center",
                mx: "auto"
            }} >
                <Box sx={{ textAlign: "center" }} ><Typography variant="h3" >Millions of Clients Trust Us.</Typography></Box>
                <LogoSlider />
            </Box>
            <Box>
                <ImageText
                    subheading="About LodaTech"
                    textImage={secBanner}
                    heading="Pioneering Custom Tech for Complex Industries"
                    paragraph="At LodaTech, we design and deliver tailored digital solutions that empower industry leaders to scale smarter, move faster, and innovate boldly. With deep expertise in software development, intelligent systems, and data infrastructure, we help regulated industries thrive in the digital age."
                    text1="Built for Your Industry"
                    text2="Scalable, Intelligent Solutions"
                    text3="A Long-Term Tech Partner"
                    btnText="Discover More"
                    btnLink="/about-us"
                    displayShow="none"
                    containerWidth="1440px"
                    imageWidth="600px" />
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
                <ImageText2
                    subheading="LodaTech Industries"
                    heading="Industries We Power with Precision"
                    paragraph="Innovating Across Sectors with Tailored Technology Solutions From banking and insurance to aerospace and education, we deliver intelligent, scalable software and AI solutions that drive efficiency, growth, and transformation across industries."
                    displayShow="block"
                    text1="Banking"
                    text2="Aerospace"
                    text4="Insurance"
                    text5="Education"
                    btnText="Explore Industry Solution"
                    btnLink="/industries"
                    direction="row-reverse"
                    textImage={[phone1, phone2]}
                    containerWidth="1440px"
                    imageWidth="450px" />
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
                            hover={false}
                        />
                        <IconWithInfo
                            textImage={webIcon}
                            heading="Web Development"
                            info="Responsive websites, progressive web apps development."
                            infoWidth="250px"
                            hover={false}
                        />
                        <IconWithInfo
                            textImage={dataIcon}
                            heading="Big Data Development"
                            info="Handle Data pipelines, analytics dashboards."
                            infoWidth="220px"
                            hover={false}
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
                            hover={false}
                        />
                        <IconWithInfo
                            textImage={aiIcon}
                            heading="AI Development"
                            info="Build smarter systems, automation, powered by custom AI solutions."
                            infoWidth="250px"
                            hover={false}
                        />
                        <IconWithInfo
                            textImage={devopsIcon}
                            heading="DevOps"
                            info="We design and manage robust cloud environments that grow your business."
                            infoWidth="270px"
                            hover={false}
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
                        <AccordionFaq
                            items={[
                                {
                                    question: 'Can you integrate with our existing systems?',
                                    answer:
                                        'We primarily serve banking, insurance, aerospace, and education—but our solutions adapt to any sector in need of custom software and data-driven innovation.',
                                },
                                {
                                    question: 'What industries do you specialize in?',
                                    answer:
                                        'We primarily serve banking, insurance, aerospace, and education—but our solutions adapt to any sector in need of custom software and data-driven innovation.',
                                },
                                {
                                    question: 'Do you provide end-to-end development?',
                                    answer:
                                        'We primarily serve banking, insurance, aerospace, and education—but our solutions adapt to any sector in need of custom software and data-driven innovation.',
                                },
                            ]}
                            defaultExpandedIndex={0} // first open (this is the default)

                        />

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
                                component={Link}
                                to="#"
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
                                component={Link}
                                to="#"
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
            {/* <Box sx={{ pt: 9, pb: 3 }} >
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
            </Box> */}

        </Box>
    );
};

export default Home;
