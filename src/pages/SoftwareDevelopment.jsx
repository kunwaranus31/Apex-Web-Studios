import { Box, Divider, Typography, Button } from '@mui/material'
import React from 'react'
import InnerPageHeader from '../component/InnerPageHeader'
import { Label } from '@mui/icons-material'
import firstImg from '../assets/service/serviceInnerPages/software-first.jpg'
import secondBg from '../assets/service/serviceInnerPages/service-second-bg.png'
import FlexBox from '../component/FlexBox';
import TextWithBorder from '../component/TextWithBorder'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BoxBg from '../component/BoxBg'
import InnerPageTextImage from '../component/InnerPageTextImage'
import whyChoose from '../assets/service/serviceInnerPages/service-why-choose.png'
import api from '../assets/service/serviceInnerPages/service-software-api.png'
import data from '../assets/service/serviceInnerPages/service-software-data.png'
import cloud from '../assets/service/serviceInnerPages/service-software-cloud.png'
import migration from '../assets/service/serviceInnerPages/service-software-migration.png'
import sre from '../assets/service/serviceInnerPages/service-software-sre.png'
import mobile from '../assets/service/serviceInnerPages/service-software-mobile.png'
import HeadingWithSubheading from '../component/HeadingWithSubheading'
import IconWithInfo from '../component/IconWithInfo'




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

        </Box>
    )
}

export default SoftwareDevelopment
