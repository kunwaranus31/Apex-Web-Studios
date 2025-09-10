import { Box, Button, Typography } from '@mui/material'
import React from 'react'

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import service2 from '../assets/service/service-sec2.webp'

// import devops from '../assets/service/service-devops.png'
// import bigdata from '../assets/service/service-bigData.png'
// import ml from '../assets/service/service-ML.png'
// import web from '../assets/service/service-web.png'
// import mobile from '../assets/service/service-mobile.png'
// import partner from '../assets/service/service-partner-bg.jpg'

// import why from '../assets/service/service-why.png'
// import enterprise from '../assets/service/service-enterprise.png'
// import cloud from '../assets/service/service-cloud.png'
// import ctaBg from '../assets/service/service-ctaBg.png'

import {
service,
service2,
software,
devops,
ml,
web,
mobile,
partner,
bigdata,
why,
enterprise,
serviceCloud,
ctaBg,
} from '../assets/'; 

import {
InnerPageHeader,
BoxBg,
FlexBox,
HeadingWithSubheading,
IconWithInfo,
ValueSection,
HeadingInfo,

} from '../component'

const Services = () => {
    return (
        <Box>
            <InnerPageHeader heading="Services" />
            <BoxBg
                bgImage={service}
                sx={{
                    py: 5,
                    my: 5,
                    mt: 30,
                    // zIndex: -1,
                    overflow: "visible"
                }}>
                <FlexBox sx={{
                    display: "block"
                }} >

                    <Box
                        component="img"
                        src={service2}
                        sx={{
                            width: "100%",
                            mt: -25,
                            zIndex: 1,
                            mb: 3
                        }}
                    />
                    <HeadingWithSubheading
                        heading="Services Lodatech"
                        subheading="Services"
                    />
                    <Typography variant='body' sx={{ fontStyle: "italic" }} >
                        Complexity, simplified — end-to-end engineering, data platforms and platform operations that deliver measurable outcomes.
                    </Typography>
                    <Box>

                        <Typography variant='body' sx={{ color: "#858585" }} >
                            We combine product thinking, pragmatic engineering and operational experience to solve difficult problems: from single-page apps to enterprise data platforms and production AI.
                        </Typography>
                    </Box>
                    {/* CTA buttons */}
                    <FlexBox sx={{ gap: 1, pt: 3, px: 0, alignItems: { xs: "flex-start" } }}>
                        <Button
                            component="a"
                            href="#"
                            variant="contained"
                            endIcon={<ArrowForwardIcon fontSize="small" />}
                        >
                            Book a Discovery Call
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
                            Explore Services
                        </Button>
                    </FlexBox>
                </FlexBox>
            </BoxBg>
            <Box sx={{
                py: 5
            }}>
                <HeadingWithSubheading
                    subheading="LodaTech Catalog"
                    heading="Our Service Catalog"
                    align="center"
                />
                <Box sx={{ margin: "0px auto", textAlign: "center" }}>

                    <Typography variant='body' sx={{ textAlign: "center", margin: "0px auto" }} >
                        Click a card to read more about each service and view case studies, deliverables and typical engagement paths.
                    </Typography>
                </Box>
                <FlexBox sx={{
                    justifyContent: "center",
                    pt: 4,
                    gap:2
                }}>
                    <IconWithInfo
                        heading="Software Development"
                        info="Custom backend & API development, microservices, and enterprise integrations — engineered for reliability and maintainability."
                        infoWidth="325px"
                        textImage={software}
                        imageWidth="55px"
                        link="software-development"
                    />
                    <IconWithInfo
                        heading="Web Development"
                        info="Marketing sites, headless CMS, SPAs and PWAs — UX-first frontend engineering focused on performance and accessibility."
                        infoWidth="325px"
                        textImage={web}
                        imageWidth="55px"
                        link="#"
                    />
                    <IconWithInfo
                        heading="Big Data Development"
                        info="Stream and batch platforms, lakehouses, data governance and analytics layers for reliable, timely insights."
                        infoWidth="315px"
                        textImage={bigdata}
                        imageWidth="55px"
                        link="#"
                    />
                </FlexBox>
                <FlexBox sx={{
                    justifyContent: "center",
                    pt: 3,
                    gap:2
                }}>
                    <IconWithInfo
                        heading="AI / ML Development"
                        info="Model prototyping, MLOps, monitoring and responsible-AI practices to turn experiments into production value."
                        infoWidth="325px"
                        textImage={ml}
                        imageWidth="55px"
                        link="#"
                    />
                    <IconWithInfo
                        heading="DevOps & Cloud Engineering"
                        info="CI/CD, IaC, Kubernetes platforms, observability and SRE practices to operate resilient cloud-native systems."
                        infoWidth="325px"
                        textImage={devops}
                        imageWidth="55px"
                        link="#"
                    />
                    <IconWithInfo
                        heading="Mobile App Development"
                        info="Native & cross-platform apps, offline-first sync, app-store releases and mobile backend integrations."
                        infoWidth="320px"
                        textImage={mobile}
                        imageWidth="55px"
                        link="#"
                    />
                </FlexBox>
            </Box>

            <Box>
                <HeadingWithSubheading
                    subheading="LodaTech Partner"
                    heading="How we partner with clients"
                    align="center"
                />
                <Box sx={{ margin: "0px auto", textAlign: "center" }}>

                    <Typography variant='body' sx={{ textAlign: "center", margin: "0px auto" }} >
                        We follow a practical, outcome-focused engagement model so you see value quickly and risk is minimized throughout the engagement.
                    </Typography>
                </Box>
                <FlexBox sx={{
                    backgroundImage: { xs: "none", md: `url(${partner})` },
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    position: "relative",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    py: 5,
                    my: { md: 5 }
                }} >
                    <Box sx={{
                        transform: { md: "translate(95px, -30px)" },
                    }} >
                        <ValueSection
                            subheading="One"
                            heading="Discovery & alignment"
                            detail="Short sprint to map objectives, constraints and success metrics."
                            contentWidth="230px"
                        />
                    </Box>
                    <Box sx={{
                        transform: { md: "translate(120px, 25px)" },
                    }}>
                        <ValueSection
                            subheading="Two"
                            heading="Proof & prototype"
                            detail="Validate assumptions quickly with working prototypes."
                            contentWidth="230px"
                        />
                    </Box>
                    <Box sx={{
                        transform: { md: "translate(125px, 45px)" },
                    }}>
                        <ValueSection
                            subheading="Three"
                            heading="Delivery"
                            detail="Iterative delivery, automated testing and continuous feedback loops."
                            contentWidth="260px"
                        />
                    </Box>
                    <Box sx={{
                        transform: { md: "translate(70px, -30px)" },
                    }}>
                        <ValueSection
                            subheading="Four"
                            heading="Handover & Run"
                            detail="Documentation, runbooks and optional managed support for production."
                            contentWidth="280px"
                        />
                    </Box>
                </FlexBox>

                <Box sx={{ margin: "0px auto", textAlign: "center" }}>
                    <Typography variant='body' sx={{ textAlign: "center", margin: "0px auto", fontStyle: "italic" }} >
                        Typical engagements range from a focused 2–4 week assessment to multi-month platform builds with ongoing ops support.
                    </Typography>
                </Box>
            </Box>
            <FlexBox
                sx={{
                    py: 9,
                    justifyContent: "center",
                    gap: { xs: 6, md: 4, lg: 6 }, // more spacing on small screens
                    maxWidth: "1300px",
                    width: "100%",
                }}
            >
                {/* Left column */}
                <Box sx={{ width: { xs: "100%", md: "380px", lg: "450px" } }}>
                    <HeadingWithSubheading
                        subheading="Why Lodatech"
                        heading="Why Lodatech"
                    />
                    <HeadingInfo
                        item={[
                            { heading: "We Simplify Complexity.", text: " Pragmatic designs that reduce long-term cost." },
                            { heading: "End-To-End Ownership.", text: " Design, build and operate — we stay accountable." },
                            { heading: "Security & Compliance.", text: " Built into every stage of delivery. Built into every stage of delivery." },
                            { heading: "Domain-Aware Engineers.", text: " We translate business needs into technical outcomes." },
                        ]}
                    />
                    <Button
                        component="a"
                        href="#"
                        variant="contained"
                        endIcon={<ArrowForwardIcon fontSize="small" />}
                        
                    >
                        Request a services consultation
                    </Button>
                </Box>

                {/* Middle column (phone image) */}
                <Box sx={{ textAlign: "center" }}>
                    <Box
                        component="img"
                        src={why}
                        sx={{
                            width: { xs: "260px", sm: "300px", md: "500px"},
                            maxWidth: "100%",
                            mx: "auto",
                        }}
                    />
                </Box>

                {/* Right column */}
                <Box sx={{ width: { xs: "100%", md: "380px", lg: "400px" } }}>
                    <HeadingWithSubheading
                        subheading="LodaTech Outcomes"
                        heading="Selected outcomes"
                    />

                    <Box sx={{ mt: 3 }}>
                        <Box
                            component="img"
                            src={enterprise}
                            sx={{ width: "60px", mb: 1 }}
                        />
                        <Typography variant="h3">Enterprise pipeline stabilization</Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                display: "block",
                                maxWidth: { xs: "100%", md: "360px", lg: "420px" },
                            }}
                        >
                            Reduced processing lag by 80% and introduced end-to-end tracing so teams
                            can troubleshoot quickly.
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                        <Box
                            component="img"
                            src={serviceCloud}
                            sx={{ width: "60px", mb: 1 }}
                        />
                        <Typography variant="h3">Cloud replatform</Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                display: "block",
                                maxWidth: { xs: "100%", md: "360px", lg: "420px" },
                            }}
                        >
                            Migrated monolith to Kubernetes platform with standard pipelines —
                            deployment frequency increased 5× and MTTR fell substantially.
                        </Typography>
                    </Box>
                </Box>
            </FlexBox>



            <Box sx={{
                maxWidth: "1300px",
                mx: "auto",
                px: { xs: 2, sm: 3, md: 6 },
                py: { xs: 4, md: 1, lg: 8 },
                mb:{xs:3, md:9},
                borderRadius: 6,
                backgroundImage: `url(${ctaBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                overflow: "hidden",
                margin: "0 auto",
                textAlign: "center"
            }} >
                <Typography variant='h2' sx={{
                    color: "#fff",
                    mb: 2
                }} >
                    Start with a short discovery
                </Typography>
                <Typography variant="body" sx={{
                    color: "#fff",
                }}>
                    Book a 30-minute discovery call — we'll map quick wins and a pragmatic roadmap tailored to your priorities.
                </Typography>

                <FlexBox sx={{ gap: 1, pt: 3, px: 0, justifyContent: "center" }}>
                    <Button
                        component="a"
                        href="#"
                        variant="contained"
                        endIcon={<ArrowForwardIcon fontSize="small" />}
                        sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                        }}
                    >
                        Book Discovery Call
                    </Button>
                    <Button
                        component="a"
                        href="#"
                        variant="contained"
                        endIcon={<ArrowForwardIcon fontSize="small" />}
                        sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                        }}
                    >
                        See Case Studies
                    </Button>



                </FlexBox>



            </Box>



        </Box>
    )
}

export default Services
