import React from 'react'
import { AboutForm, AccordionFaq, BoxBg, FlexBox, HeadingWithSubheading, IconWithInfo, InnerPageHeader, InnerPageTextImage } from '../component'
import { Box, Button, Divider, Typography } from '@mui/material'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { appoachImg, bigDataApproach, bigDataArchitecture, bigDataAssessment, bigDataBI, bigDataELT, bigDataFirst, bigDataGovernance, bigDataImplementation, bigDataInstrumentation, bigDataMLOps, bigDataOperate, bigDataOutcome1, bigDataOutcome2, bigDataPlatform, bigDataScale, bigDataStreaming, bigDataTech1, bigDataTech10, bigDataTech11, bigDataTech12, bigDataTech13, bigDataTech14, bigDataTech15, bigDataTech2, bigDataTech3, bigDataTech4, bigDataTech5, bigDataTech6, bigDataTech7, bigDataTech8, bigDataTech9, bigDataWhyChoose, secondBg, techBg, webFAQ, } from '../assets/service/serviceInnerPages';
import approachBg from '../assets/service/serviceBg.jpg'
import formBg from "../assets/testimonialbg.webp";


const BigDataDevelopment = () => {
    return (
        <Box>
            <InnerPageHeader heading="Big Data Development" crumbs={[
                { label: "Home", to: "/" },
                { label: "Service", to: "services" },
                { label: "Big Data Development" },
            ]}
            />
            <FlexBox sx={{
                display: "block",
                py: 5
            }} >
                <Box
                    component="img"
                    src={bigDataFirst}
                    sx={{
                        width: "100%",
                        my: 2
                    }}
                />
                <Typography variant='h1' sx={{
                    mb: 2
                }} >
                    Big Data Development
                </Typography>

                <Typography sx={{ my: 2 }} >
                    Complexity, simplified — scalable data platforms and streaming pipelines that deliver trusted insights.                </Typography>
                <FlexBox sx={{ gap: 1, pt: 3, px: 0, mb: 3, alignItems: { xs: "flex-start" } }}>
                    <Button
                        component="a"
                        href="#"
                        variant="contained"
                        endIcon={<ArrowForwardIcon fontSize="small" />}
                    >
                        Book a data platform review
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
                        Overview
                    </Typography>
                    <Typography
                        variant='body'
                    >
                        We design and build data platforms that scale reliably with your business: real-time streaming, batch processing, data lakes and analytics layers. Our focus is resilient architecture, operational excellence and turning raw data into actionable, trusted information.
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
                    heading="Why Lodatech for Big Data"
                    image={bigDataWhyChoose}
                    imageWidth='550px'
                    contentjustify="space-between"
                    items={[
                        { iconHeading: "Proven at scale.", iconDetail: "We design systems for high-throughput and large datasets." },
                        { iconHeading: "Operational focus.", iconDetail: "Monitoring, autoscaling, recovery and runbooks are built-in." },
                        { iconHeading: "Conversion-focused.", iconDetail: "UX + performance tuned Data-first governance.to improve lead generation and sales." },
                        { iconHeading: "Business-aligned outcomes.", iconDetail: "We prioritize analytics that drive decisions, not just pipelines." },
                    ]}
                    rowDirection="row-reverse"
                />
            </BoxBg>
            <Box sx={{
                py: 12
            }}>
                <HeadingWithSubheading
                    subheading="LodaTech Offer"
                    heading="Core offerings
"
                    align="center"
                />

                <FlexBox sx={{
                    justifyContent: "center",
                    pt: 4,
                    gap: 2
                }}>
                    <IconWithInfo
                        heading="Data Platform Architecture"
                        info="Blueprints for data lakes, lakehouses and analytics-ready storage with governance, lineage and access controls."
                        infoWidth="325px"
                        textImage={bigDataArchitecture}
                        imageWidth="55px"
                        textClr="#000"

                    />
                    <IconWithInfo
                        heading="Streaming & Event Platforms"
                        info="High-throughput Kafka platforms, stream-processing (Kafka Streams, Flink) and end-to-end observability for real-time use cases."
                        infoWidth="325px"
                        textImage={bigDataStreaming}
                        imageWidth="55px"
                        textClr="#000"
                    />
                    <IconWithInfo
                        heading="Batch Processing & ETL/ELT"
                        info="Robust ETL pipelines using Spark, Databricks or native cloud services for scheduled, large-scale processing."
                        infoWidth="315px"
                        textImage={bigDataELT}
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
                        heading="Data Governance & Quality"
                        info="Automated quality checks, schema evolution strategies and data contracts to reduce downstream errors."
                        infoWidth="325px"
                        textImage={bigDataGovernance}
                        imageWidth="55px"
                        textClr="#000"
                    />
                    <IconWithInfo
                        heading="MLOps & Model Pipelines"
                        info="Production-ready training & deployment pipelines, model registry and reproducible feature stores."
                        infoWidth="325px"
                        textImage={bigDataMLOps}
                        imageWidth="55px"
                        textClr="#000"
                    />
                    <IconWithInfo
                        heading="Analytics & BI Enablement"
                        info="Data marts, dashboards and self-serve analytics that empower product and business teams."
                        infoWidth="320px"
                        textImage={bigDataBI}
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
                    heading="Our Approach To Big Data"
                    align="center"
                />
                <Typography
                    textAlign="center"
                >
                    From pilots to platform: pragmatic, measurable steps to production-grade data capabilities.                    </Typography>

                <FlexBox sx={{
                    py: 4,
                    justifyContent: "center",
                    gap: 0,

                }}>
                    <Box>
                        <IconWithInfo
                            heading="Assessment"
                            info="Inventory sources, schemas, SLAs and failure modes."
                            infoWidth="320px"
                            textImage={bigDataAssessment}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Platform design "
                            info="Choose storage, streaming and compute strategies that match workload patterns."
                            infoWidth="330px"
                            textImage={bigDataPlatform}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Implementation"
                            info="Stream & batch pipelines, testing harnesses and CI for data code."
                            infoWidth="320px"
                            textImage={bigDataImplementation}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                    </Box>
                    <Box
                        component="img"
                        src={bigDataApproach}
                        sx={{
                            width: { xs: "100%", lg: "500px" }
                        }}
                    />
                    <Box>
                        <IconWithInfo
                            heading="Instrumentation "
                            info="Metrics, tracing, lineage and alerting for data health."
                            infoWidth="310px"
                            textImage={bigDataInstrumentation}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Operate "
                            info="SRE-driven runbooks, capacity planning and incident playbooks."
                            infoWidth="320px"
                            textImage={bigDataOperate}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Scale"
                            info="Optimize cost, governance and self-serve capabilities for broader teams."
                            infoWidth="320px"
                            textImage={bigDataScale}
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
                        <Box
                            component="img"
                            src={bigDataOutcome1}
                            sx={{
                                width: "100%"
                            }}
                        />
                        <Typography
                            variant='h3'
                            textAlign="center"
                            pt="5px"
                        >
                            Real-time payments insight for FinTech
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
                            Built a streaming platform to process payments events; supported real-time reconciliation and fraud detection, reducing incident response time by 70%.                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            component="img"
                            src={bigDataOutcome2}
                            sx={{
                                width: "100%"
                            }}
                        />
                        <Typography
                            variant='h3'
                            textAlign="center"
                            pt="5px"
                        >
                            Enterprise data lake & analytics
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
                            Delivered a governed lakehouse and analytics layer powering executive dashboards and automated reporting across business units.                        </Typography>
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
                <Typography variant='h2' textAlign="center" pb="15px" >
                    Technologies we use
                </Typography>
                <FlexBox sx={{
                    justifyContent: "center",
                    gap: 2,
                    py: 2
                }}>
                    <Box component="img" src={bigDataTech1} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech2} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech3} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech4} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech5} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech6} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech7} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech8} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech9} sx={{ width: "90px" }} />

                </FlexBox>
                <FlexBox sx={{
                    justifyContent: "center",
                    gap: 2,
                    py: 1,
                    pb: 3
                }}>
                    <Box component="img" src={bigDataTech10} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech11} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech12} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech13} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech14} sx={{ width: "90px" }} />
                    <Box component="img" src={bigDataTech15} sx={{ width: "90px" }} />
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
                                question: "How do you ensure data quality?", answer: "We use automated tests, streaming and batch validation, monitoring and alerting, plus contracts/schema checks to surface issues early."
                            },
                            {
                                question: "Do you handle content and SEO?", answer: "Depends on scope. Simple marketing sites can be delivered in 4–8 weeks; larger web apps and headless commerce projects typically take 3–6 months."
                            },
                            {
                                question: "Can you make our site accessible?"
                            },
                        ]}
                    />
                </Box>
                <Box>
                    <Box
                        component="img"
                        src={appoachImg}
                        width="100%"

                    />
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
                        heading="Ready to launch a better web experience?"
                        justify="center"
                        align="center"
                        headingWidth="100%"
                    />

                    <Typography
                        variant='body' fontSize="14px" >
                        Schedule a short consultation — we'll review goals, performance targets and propose a pragmatic plan.
                    </Typography>
                </Box>
                <AboutForm />
            </BoxBg>
        </Box>

        
    )
}

export default BigDataDevelopment
