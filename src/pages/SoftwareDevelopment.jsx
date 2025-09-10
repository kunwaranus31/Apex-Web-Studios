import { Box, Divider, Typography, Button } from '@mui/material'
import React from 'react'
import { Label } from '@mui/icons-material'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import approachBg from '../assets/service/serviceBg.jpg'
import faqImage from "../assets/faqimage.jpg";
import formBg from "../assets/testimonialbg.webp";

import {
InnerPageHeader,
FlexBox,
TextWithBorder,
BoxBg,
InnerPageTextImage,
HeadingWithSubheading,
IconWithInfo,
} from '../component';

import {
    firstImg,
    secondBg,
    whyChoose,
    api,
    data,
    cloud,
    migration,
    sre,
    mobile,
    appoachImg,
    discover,
    build,
    deploy,
    validate,
    improve,
    design,
    result1,
    result2,
    techBg,
    s1,
    s2,
    s3,
    s4,
    s5,
    s6,
    s7,
    s9,
    s10,
    s11,
    s12,
    s13,
    s8,
} from '../assets/service/serviceInnerPages';
import AccordionFaq from '../component/AccordionFaq';
import AboutForm from '../component/AboutForm';




const SoftwareDevelopment = () => {
    return (
        <Box>
            <InnerPageHeader heading="Software Development" crumbs={[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Software Development" }
            ]} />
            <FlexBox sx={{
                display: "block",
                py: 5
            }} >
                <Box
                    component="img"
                    src={firstImg}
                    sx={{
                        width: "100%",
                        my: 2
                    }}
                />
                <Typography variant='h1' sx={{
                    mb: 2
                }} >
                    Software Development
                </Typography>
                <Box>
                    <TextWithBorder items={[
                        { text: "Custom Applications & APIs" },
                        { text: "Data Engineering & Streaming" },
                        { text: "Cloud-Native Modernization" },
                        { text: "Legacy Migration & Integration" },
                        { text: "DevOps & SRE" },
                        { text: "Frontend & Mobile" },
                    ]} />
                </Box>
                <Typography sx={{ my: 2 }} >
                    Complexity, simplified — practical software and data engineering that delivers measurable results.
                </Typography>
                <FlexBox sx={{ gap: 1, pt: 3, px: 0, mb: 3, alignItems: { xs: "flex-start" } }}>
                    <Button
                        component="a"
                        href="#"
                        variant="contained"
                        endIcon={<ArrowForwardIcon fontSize="small" />}
                    >
                        Get a Free Technical Assessment
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
                        Service Overview
                    </Typography>
                    <Typography
                        variant='body'
                    >
                        We build reliable software systems and data pipelines that teams actually use. From greenfield product development to legacy modernization and real-time data engineering, Lodatech turns complex challenges into simple, maintainable solutions so your teams can move faster and focus on outcomes.
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
                    heading="Why choose Lodatech"
                    paragraph="A predictable, outcome-driven approach that reduces uncertainty and delivers early value."
                    image={whyChoose}
                    imageWidth='500px'
                    contentjustify="space-between"
                    items={[
                        { iconHeading: "We simplify complexity.", iconDetail: "Clear design and pragmatic engineering reduce technical debt." },
                        { iconHeading: "Domain-aware engineering.", iconDetail: "We combine software craft with business context to drive outcomes." },
                        { iconHeading: "Fast, measurable wins.", iconDetail: "Short iterations deliver visible progress and reduce time-to-value." },
                        { iconHeading: "End-to-end ownership.", iconDetail: "Design, delivery and production support — we stay accountable." },
                        { iconHeading: "Security & compliance first.", iconDetail: "Secure defaults and testing are part of our process." },
                    ]}
                    rowDirection="row-reverse"
                />
            </BoxBg>

            <Box sx={{
                py: 12
            }}>
                <HeadingWithSubheading
                    subheading="LodaTech Offer"
                    heading="What We Offer"
                    align="center"
                />

                <FlexBox sx={{
                    justifyContent: "center",
                    pt: 4,
                    gap: 2
                }}>
                    <IconWithInfo
                        heading="Custom Applications & APIs"
                        info="Web applications, backend services and APIs designed for scale, security and maintainability."
                        infoWidth="325px"
                        textImage={api}
                        imageWidth="55px"

                    />
                    <IconWithInfo
                        heading="Data Engineering & Streaming"
                        info="Real-time pipelines, ETL/ELT, Kafka & Spark solutions to make data available where and when it's needed."
                        infoWidth="325px"
                        textImage={data}
                        imageWidth="55px"
                    />
                    <IconWithInfo
                        heading="Cloud-Native Modernization"
                        info="Containerization, Kubernetes (GKE), CI/CD and infrastructure-as-code to make deployments predictable and repeatable."
                        infoWidth="315px"
                        textImage={cloud}
                        imageWidth="55px"
                    />
                </FlexBox>
                <FlexBox sx={{
                    justifyContent: "center",
                    pt: 3,
                    gap: 2
                }}>
                    <IconWithInfo
                        heading="Legacy Migration & Integration"
                        info="Lift-and-refactor strategies, secure data migrations and integrations that minimize downtime and risk."
                        infoWidth="325px"
                        textImage={migration}
                        imageWidth="55px"
                    />
                    <IconWithInfo
                        heading="DevOps & SRE"
                        info="Observability, automated testing and runbooks so systems remain reliable in production."
                        infoWidth="325px"
                        textImage={sre}
                        imageWidth="55px"
                    />
                    <IconWithInfo
                        heading="Frontend & Mobile"
                        info="Responsive web and mobile interfaces built with modern frameworks for a smooth user experience."
                        infoWidth="320px"
                        textImage={mobile}
                        imageWidth="55px"
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
                    heading="Our Approach"
                    align="center"
                />

                <FlexBox sx={{
                    py: 4,
                    justifyContent: "space-between",
                    gap: 2,

                }}>
                    <Box>
                        <IconWithInfo
                            heading="Discover"
                            info="Goals, stakeholders and existing systems."
                            infoWidth="320px"
                            textImage={discover}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Build"
                            info="Iterative sprints, automated tests and regular demos."
                            infoWidth="330px"
                            textImage={build}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Deploy & Operate"
                            info="CI/CD, monitoring and runbooks for reliability."
                            infoWidth="320px"
                            textImage={deploy}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                    </Box>
                    <Box
                        component="img"
                        src={appoachImg}
                        sx={{
                            width: "350px"
                        }}
                    />
                    <Box>
                        <IconWithInfo
                            heading="Design"
                            info="Architecture, APIs, data flows and security posture."
                            infoWidth="320px"
                            textImage={design}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Validate"
                            info="Performance, security and user acceptance testing."
                            infoWidth="320px"
                            textImage={validate}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Improve"
                            info="Metrics-driven enhancements to reduce cost and friction."
                            infoWidth="350px"
                            textImage={improve}
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
                        Selected Results (Short)
                    </Typography>

                </Box>
                <FlexBox>
                    <Box>
                        <Box
                            component="img"
                            src={result1}
                            sx={{
                                width: "100%"
                            }}
                        />
                        <Typography
                            variant='h3'
                            textAlign="center"
                            pt="5px"
                        >
                            Pipeline Stabilization For A FinTech Client
                        </Typography>
                        <Typography
                            variant='body'
                            textAlign="center"
                            display="block"
                            width="500px"
                            justifySelf="center"
                            pt="10px"
                        >
                            Reduced data processing lag by 85% and added end-to-end tracing to identify bottlenecks and improve reliability.
                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            component="img"
                            src={result2}
                            sx={{
                                width: "100%"
                            }}
                        />
                        <Typography
                            variant='h3'
                            textAlign="center"
                            pt="5px"
                        >
                            Cloud Replatform For A Legacy Application
                        </Typography>
                        <Typography
                            variant='body'
                            textAlign="center"
                            display="block"
                            width="500px"
                            justifySelf="center"
                            pt="10px"
                        >
                            Migrated a monolith to microservices on GKE; deployment frequency increased 6× and mean time to recovery improved significantly.
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
                        Request a Tailored Case Study
                    </Button>
                </Box>
            </Box>

            <BoxBg
                bgImage={techBg}
            >
                <Typography variant='h2' textAlign="center" >
                    Technologies We Commonly Use
                </Typography>
                <FlexBox sx={{
                    justifyContent: "center",
                    gap: 2,
                    py: 2
                }}>
                    <Box component="img" src={s1} sx={{ width: "90px" }} />
                    <Box component="img" src={s2} sx={{ width: "90px" }} />
                    <Box component="img" src={s3} sx={{ width: "90px" }} />
                    <Box component="img" src={s4} sx={{ width: "90px" }} />
                    <Box component="img" src={s5} sx={{ width: "90px" }} />
                    <Box component="img" src={s6} sx={{ width: "90px" }} />
                    <Box component="img" src={s7} sx={{ width: "90px" }} />

                </FlexBox>
                <FlexBox sx={{
                    justifyContent: "center",
                    gap: 2,
                    py: 1
                }}>
                    <Box component="img" src={s8} sx={{ width: "90px" }} />
                    <Box component="img" src={s9} sx={{ width: "90px" }} />
                    <Box component="img" src={s10} sx={{ width: "90px" }} />
                    <Box component="img" src={s11} sx={{ width: "90px" }} />
                    <Box component="img" src={s12} sx={{ width: "90px" }} />
                    <Box component="img" src={s13} sx={{ width: "90px" }} />
                </FlexBox>
            </BoxBg>

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


                    <Box sx={{ width: "100%", pt: 4 }}>
                        <AccordionFaq
                            items={[
                                {
                                    question: "How long does a typical project take?",
                                    answer: "Timelines vary by scope. We recommend a 2–4 week discovery sprint to validate needs and produce a clear roadmap."
                                },
                                {
                                    question: "Do you provide ongoing support?",
                                    answer: "Timelines vary by scope. We recommend a 2–4 week discovery sprint to validate needs and produce a clear roadmap."
                                },
                                {
                                    question: "Can you work with our existing team?",
                                    answer: "Timelines vary by scope. We recommend a 2–4 week discovery sprint to validate needs and produce a clear roadmap."
                                },
                            ]}
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
            <BoxBg bgImage={formBg} sx={{ pt: 9, pb: 3, my: 7 }} >
                <Box sx={{
                    maxWidth: 1200,
                    mx: "auto",
                    textAlign: "center",
                    px: { xs: 1 }
                }}>
                    <HeadingWithSubheading
                        subheading="Contact Us"
                        heading="Ready to simplify complexity?"
                        justify="center"
                        align="center"
                    />

                    <Typography
                        variant='body' >
                        Book a free 30-minute discovery call — we’ll map quick wins and a pragmatic roadmap tailored to your priorities.
                    </Typography>
                </Box>
                <AboutForm />
            </BoxBg>
        </Box>
    )
}

export default SoftwareDevelopment
