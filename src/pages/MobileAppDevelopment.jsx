import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { AboutForm, AccordionFaq, BoxBg, FlexBox, HeadingWithSubheading, IconWithInfo, InnerPageHeader, InnerPageTextImage } from '../component'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { mobileApproach1, mobileApproach2, mobileApproach3, mobileApproach4, mobileApproach5, mobileApproach6, mobileOffer1, mobileOffer2, mobileOffer3, mobileOffer4, mobileOffer5, mobileOffer6, secondBg, techBg } from '../assets/service/serviceInnerPages';
import approachBg from '../assets/service/serviceBg.jpg'
import { formBg } from '../assets';

const MobileAppDevelopment = () => {
    return (
        <Box>
            <InnerPageHeader
                heading="Mobile App Development"
                crumbs={[
                    { label: "home", to: "/" },
                    { label: "Services", to: "/services" },
                    { label: "Mobile App Development" },
                ]}
            />
            <FlexBox sx={{
                display: "block",
                py: 5
            }} >
                {/* <Box
                    component="img"
                    src={bigDataFirst}
                    sx={{
                        width: "100%",
                        my: 2
                    }}
                /> */}
                <Typography variant='h1' sx={{
                    mb: 2
                }} >
                    Mobile App Development
                </Typography>

                <Typography sx={{ my: 2 }} >
                    Complexity, simplified — beautiful, performant mobile apps built for real users and real business outcomes.


                </Typography>
                <FlexBox sx={{ gap: 1, pt: 3, px: 0, mb: 3, alignItems: { xs: "flex-start" } }}>
                    <Button
                        component="a"
                        href="#"
                        variant="contained"
                        endIcon={<ArrowForwardIcon fontSize="small" />}
                    >
                        Request a mobile consultation
                    </Button>

                    <Button
                        component="a"
                        href="#"
                        variant="outlined"
                        sx={{

                            borderColor: "#282C32",
                            color: "#282C32",
                            "&:hover": { borderWidth: 2, borderColor: "#282C32", bgcolor: "#282C32", color: "#fff", },
                        }}
                        endIcon={<ArrowForwardIcon />}
                    >
                        See services
                    </Button>
                </FlexBox>

                <Divider sx={{
                    borderColor: "#000"
                }} />
                <Box sx={{
                    my: 2
                }} >
                    <Typography
                        variant='h2'
                        sx={{
                            mb: 1
                        }}
                    >
                        Overview
                    </Typography>
                    <Typography
                        variant='body'
                    >
We design and build native and cross-platform mobile applications that focus on usability, reliability and long-term maintainability. From prototypes to app-store launches and backend integrations, Lodatech delivers apps that users love and businesses can scale.
                    </Typography>
                </Box>
            </FlexBox>
            <BoxBg
                bgImage={secondBg}
                sx={{
                    py: 6
                }} >

                <InnerPageTextImage
                    subheading="Why Choose Lodatech"
                    heading="Why Lodatech for mobile"
                    // image={bigDataWhyChoose}
                    imageWidth='550px'
                    contentjustify="space-between"
                    items={[
                        { iconHeading: "User-first apps.", iconDetail: "We prioritize real user needs and usability on-device." },
                        { iconHeading: "Engineering excellence.", iconDetail: "Clean architecture, test automation and maintainable code." },
                        { iconHeading: "Offline & resilience.", iconDetail: "Robust sync, caching and graceful degradation for unreliable networks." },
                        { iconHeading: "Fast time-to-market.", iconDetail: "Prototype-driven development to validate fast and iterate safely." },
                        { iconHeading: "App ops & monitoring. ", iconDetail: "Crash analytics, performance monitoring and release management included." },
                    ]}
                    rowDirection="row-reverse"
                />
            </BoxBg>
            <Box sx={{
                py: 12
            }}>
                <HeadingWithSubheading
                    subheading="LodaTech Offer"
                    heading="What we offer"
                    align="center"
                />

                <FlexBox sx={{
                    justifyContent: "center",
                    pt: 4,
                    gap: 2
                }}>
                    <IconWithInfo
                        heading="Native iOS & Android"
                        info="Platform-first apps (Swift, Kotlin) when performance, device feature access and platform UX matter most."
                        infoWidth="325px"
                        textImage={mobileOffer1}
                        imageWidth="55px"
                        textClr="#000"

                    />
                    <IconWithInfo
                        heading="Cross-platform (React Native / Flutter)"
                        info="Fast to market, cost-effective cross-platform apps with native-like performance and maintainable codebases."
                        infoWidth="325px"
                        textImage={mobileOffer2}
                        imageWidth="55px"
                        textClr="#000"
                    />
                    <IconWithInfo
                        heading="Mobile Backend & APIs"
                        info="Scalable APIs, authentication, push notifications and offline sync to support reliable mobile experiences."
                        infoWidth="315px"
                        textImage={mobileOffer3}
                        imageWidth="55px"
                        textClr="#000"
                    />
                </FlexBox>
                <FlexBox sx={{
                    justifyContent: "center",
                    pt: 3,
                    gap: 2
                }}>
                    <IconWithInfo
                        heading="Product & UX for Mobile"
                        info="Research, flows, prototypes and design systems that prioritize accessibility and conversion on small screens."
                        infoWidth="325px"
                        textImage={mobileOffer4}
                        imageWidth="55px"
                        textClr="#000"
                    />
                    <IconWithInfo
                        heading="Quality & Testing"
                        info="Automated unit, integration and E2E tests (Detox, Appium), CI pipelines and device lab testing to reduce regressions."
                        infoWidth="325px"
                        textImage={mobileOffer5}
                        imageWidth="55px"
                        textClr="#000"
                    />
                    <IconWithInfo
                        heading="App Store & Release Management"
                        info="App Store / Play Store submissions, beta distribution, release notes and rollout strategies for safe launches."
                        infoWidth="320px"
                        textImage={mobileOffer6}
                        imageWidth="55px"
                        textClr="#000"
                    />
                </FlexBox>
            </Box>

            <BoxBg
                bgImage={approachBg}
                sx={{
                    py: 5
                }}
            >
                <HeadingWithSubheading
                    subheading="LodaTech Approach"
                    heading="Our mobile development process"
                    align="center"
                />
                <Typography
                    textAlign="center"
                >
From concept to app store — iterative, measurable and focused on user value.
                </Typography>

                <FlexBox sx={{
                    py: 4,
                    justifyContent: "center",
                    gap: 0,

                }}>
                    <Box>
                        <IconWithInfo
                            heading="Discovery & product goals"
                            info="User research, KPI definition and platform choice."
                            infoWidth="320px"
                            textImage={mobileApproach1}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Prototype"
                            info="Clickable prototypes and early usability tests to validate assumptions."
                            infoWidth="330px"
                            textImage={mobileApproach2}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Build"
                            info="Modular app architecture, automated tests, CI and feature-flagged releases."
                            infoWidth="320px"
                            textImage={mobileApproach3}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                    </Box>
                    {/* <Box
                        component="img"
                        src={bigDataApproach}
                        sx={{
                            width: { xs: "100%", lg: "500px" }
                        }}
                    /> */}
                    <Box>
                        <IconWithInfo
                            heading="Q/A & device testing "
                            info="Real-device testing, performance profiling and security checks."
                            infoWidth="310px"
                            textImage={mobileApproach4}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Launch"
                            info="Store submission, phased rollout and monitoring setup."
                            infoWidth="320px"
                            textImage={mobileApproach5}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Operate & iterate"
                            info="Crash analysis, analytics-driven improvements and roadmap planning."
                            infoWidth="320px"
                            textImage={mobileApproach6}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                    </Box>
                </FlexBox>
            </BoxBg>
            <Box sx={{
                my: 10
            }}>
                <Box sx={{
                    mb: 3
                }} >
                    <Typography textAlign="center" variant='h2' >
                        Selected Outcomes
                    </Typography>

                </Box>
                <FlexBox>
                    <Box>
                        {/* <Box
                            component="img"
                            src={bigDataOutcome1}
                            sx={{
                                width: "100%"
                            }}
                        /> */}
                        <Typography
                            variant='h3'
                            textAlign="center"
                            pt="5px"
                        >
                            Consumer app — rapid MVP to market
                        </Typography>
                        <Typography
                            variant='body'
                            textAlign="center"
                            display="block"
                            sx={{
                                width: { sm: "100%", md: "540px" }

                            }}
                            justifySelf="center"
                            pt="10px"
                        >
Delivered an MVP in 8 weeks using React Native, validated product-market fit and iterated to a 4.6-star app store rating after 3 months.
                        </Typography>
                    </Box>
                    <Box>
                        {/* <Box
                            component="img"
                            src={bigDataOutcome2}
                            sx={{
                                width: "100%"
                            }}
                        /> */}
                        <Typography
                            variant='h3'
                            textAlign="center"
                            pt="5px"
                        >
Field service app — offline-first
                        </Typography>
                        <Typography
                            variant='body'
                            textAlign="center"
                            display="block"

                            sx={{
                                width: { sm: "100%", md: "500px" }

                            }}
                            justifySelf="center"
                            pt="10px"
                        >
Built an offline-capable Android app with robust sync and background processing, reducing data-entry time and errors for field teams.
                        </Typography>
                    </Box>
                </FlexBox>
                <Box sx={{
                    textAlign: "center",
                    mt: 4
                }} >
                    <Button
                        component="a"
                        href="#"
                        variant="contained"
                        endIcon={<ArrowForwardIcon fontSize="small" />}
                    >
                        Request a tailored case study
                    </Button>
                </Box>
            </Box>
            <BoxBg
                bgImage={techBg}
            >
                <Typography variant='h2' textAlign="center" pb="15px" >
                    Technologies we use
                </Typography>
                <FlexBox sx={{
                    justifyContent: "center",
                    gap: 2,
                    py: 2
                }}>
                    {/* <Box component="img" src={bigDataTech1} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech2} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech3} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech4} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech5} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech6} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech7} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech8} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech9} sx={{ width: "90px" }} /> */}

                </FlexBox>
                <FlexBox sx={{
                    justifyContent: "center",
                    gap: 2,
                    py: 1,
                    pb: 3
                }}>
                    {/* <Box component="img" src={bigDataTech10} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech11} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech12} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech13} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech14} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech15} sx={{ width: "90px" }} /> */}
                </FlexBox>
            </BoxBg>
            <FlexBox sx={{
                gap: { xs: 3, md: 17 },
                py: 10
            }} >
                <Box sx={{
                    width: { xs: "100%", md: "50%" }
                }} >
                    <HeadingWithSubheading
                        subheading="LodaTech FAQs"
                        heading="Frequently Asked Questions"
                        align="left"
                    />
                    <AccordionFaq
                        items={[
                            {
                                question: "Native or cross-platform — which should we choose?", answer: "It depends on your priorities: native for maximum performance and platform integration; cross-platform for faster delivery and lower cost. We'll help you choose during discovery."
                            },
                            {
                                question: "How do you handle app store approvals?", answer: "We manage build configuration, privacy pages, screenshots, metadata and submission steps for App Store and Play Store, including phased rollouts."
                            },
                            {
                                question: "Do you provide post-launch support?", answer: "Book a short consultation — we'll review goals, platform choices and a pragmatic plan to get to market fast."
                            },
                        ]}
                    />
                </Box>
                <Box>
                    {/* <Box
                        component="img"
                        src={appoachImg}
                        width="100%"

                    /> */}
                </Box>
            </FlexBox>
            <BoxBg bgImage={formBg} sx={{ pt: 9, pb: 3, my: 7 }} >
                <Box sx={{
                    maxWidth: 1200,
                    mx: "auto",
                    textAlign: "center",
                    px: { xs: 1 }
                }}>
                    <HeadingWithSubheading
                        subheading="Contact Us"
                        heading="Ready to turn AI into measurable value?"
                        justify="center"
                        align="center"
                        headingWidth="100%"
                    />

                    <Typography
                        variant='body' fontSize="14px" >
                        Schedule a short strategy call — we’ll assess data readiness and recommend a pragmatic path to production.
                    </Typography>
                </Box>
                <AboutForm />
            </BoxBg>
        </Box>
    )
}

export default MobileAppDevelopment
