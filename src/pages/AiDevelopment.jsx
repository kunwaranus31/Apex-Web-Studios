import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { AboutForm, AccordionFaq, BoxBg, FlexBox, HeadingWithSubheading, IconWithInfo, InnerPageHeader, InnerPageTextImage, TechnologyIcons } from '../component'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ai1, ai10, ai11, ai12, ai13, ai14, ai15, ai16, ai2, ai3, ai4, ai5, ai6, ai7, ai8, ai9, aiApproach, aiApproach1, aiApproach2, aiApproach3, aiApproach4, aiApproach5, aiApproach6, aiImg, aiOutcome1, aiOutcome2, aiService1, aiService2, aiService3, aiService4, aiService5, aiService6, aiWhy, s7, secondBg, techBg, webFAQ } from '../assets/service/serviceInnerPages';
import approachBg from '../assets/service/serviceBg.jpg'
import { formBg } from '../assets';

const AiDevelopment = () => {
    return (
        <Box>
            <InnerPageHeader
                heading="AI Development"
                crumbs={[
                    { label: "home", to: "/" },
                    { label: "Services", to: "/services" },
                    { label: "AI Development" },
                ]}
            />
            <FlexBox sx={{
                display: "block",
                py: 5
            }} >
                <Box
                    component="img"
                    src={aiImg}
                    sx={{
                        width: "100%",
                        my: 2
                    }}
                />
                <Typography variant='h1' sx={{
                    mb: 2
                }} >
                    AI Development
                </Typography>

                <Typography sx={{ my: 2 }} >
                    Complexity, simplified — practical AI engineering that moves models from prototype to production responsibly.

                </Typography>
                <FlexBox sx={{ gap: 1, pt: 3, px: 0, mb: 3, alignItems: { xs: "flex-start" } }}>
                    <Button
                        component="a"
                        href="#"
                        variant="contained"
                        endIcon={<ArrowForwardIcon fontSize="small" />}
                    >
                        Book an AI strategy call
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
                        We help organizations build valuable, reliable and responsible AI: from hypothesis and data preparation, through model training, to MLOps and governance. We emphasize explainability, reproducibility and measurable business impact.

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
                    heading="Why Lodatech for AI"
                    image={aiWhy}
                    imageWidth='550px'
                    contentjustify="space-between"
                    items={[
                        { iconHeading: "Business-first AI.", iconDetail: "We focus on measurable KPIs and real outcomes, not just models." },
                        { iconHeading: "Production readiness.", iconDetail: "Monitoring, autoscaling, recovery and runbooks are built-in." },
                        { iconHeading: "Responsible practices.", iconDetail: "Explainability, fairness checks and privacy-aware design are core to our approach." },
                        { iconHeading: "Cross-functional teams.", iconDetail: "Data engineers, ML engineers and product owners collaborate to deliver value." },
                    ]}
                    rowDirection="row-reverse"
                />
            </BoxBg>
            <Box sx={{
                py: 12
            }}>
                <HeadingWithSubheading
                    subheading="LodaTech Offer"
                    heading="AI services"
                    align="center"
                />

                <FlexBox sx={{
                    justifyContent: "center",
                    pt: 4,
                    gap: 2
                }}>
                    <IconWithInfo
                        heading="AI Strategy & Roadmaps"
                        info="Use-case prioritization, ROI mapping and roadmap to move from experiments to production."
                        infoWidth="325px"
                        textImage={aiService1}
                        imageWidth="55px"
                        textClr="#000"

                    />
                    <IconWithInfo
                        heading="Model Development"
                        info="Prototyping and production model development (classification, regression, time-series, recommender systems, NLP)."
                        infoWidth="325px"
                        textImage={aiService2}
                        imageWidth="55px"
                        textClr="#000"
                    />
                    <IconWithInfo
                        heading="Responsible AI & Governance"
                        info="Bias assessment, explainability (SHAP/LIME), model risk documentation and audit-ready pipelines."
                        infoWidth="315px"
                        textImage={aiService3}
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
                        heading="Data Preparation & Feature Engineering"
                        info="Data labeling, cleaning, feature stores and pipelines to produce reproducible training data."
                        infoWidth="325px"
                        textImage={aiService4}
                        imageWidth="55px"
                        textClr="#000"
                    />
                    <IconWithInfo
                        heading="MLOps & Model Serving"
                        info="CI for ML, model registries, automated retraining pipelines and scalable model serving (batch & real-time)."
                        infoWidth="325px"
                        textImage={aiService5}
                        imageWidth="55px"
                        textClr="#000"
                    />
                    <IconWithInfo
                        heading="Monitoring & Continuous Improvement"
                        info="Model performance monitoring, drift detection, labeling feedback loops and periodic retraining strategies."
                        infoWidth="320px"
                        textImage={aiService6}
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
                    heading="How we build AI"
                    align="center"
                />
                <Typography
                    textAlign="center"
                >
                    Iterative experimentation combined with rigorous engineering and operational controls.
                </Typography>

                <FlexBox sx={{
                    py: 4,
                    justifyContent: "center",
                    gap: 0,

                }}>
                    <Box>
                        <IconWithInfo
                            heading="Identify & prioritize"
                            info="Business goals, success metrics and data readiness assessment."
                            infoWidth="320px"
                            textImage={aiApproach1}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Experiment"
                            info="Rapid prototyping to validate feasibility and expected impact."
                            infoWidth="330px"
                            textImage={aiApproach2}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Engineer"
                            info="Data pipelines, feature stores and robust training pipelines."
                            infoWidth="320px"
                            textImage={aiApproach3}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                    </Box>
                    <Box
                        component="img"
                        src={aiApproach}
                        sx={{
                            width: { xs: "100%", lg: "500px" }
                        }}
                    />
                    <Box>
                        <IconWithInfo
                            heading="Deploy"
                            info="Scalable serving (batch or real-time), model registry and rollout strategy."
                            infoWidth="310px"
                            textImage={aiApproach4}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Monitor"
                            info="Drift detection, performance metrics and error analysis."
                            infoWidth="320px"
                            textImage={aiApproach5}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Govern"
                            info="Versioning, audit logs and explainability reports for stakeholders and compliance."
                            infoWidth="320px"
                            textImage={aiApproach6}
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
                            src={aiOutcome1}
                            sx={{
                                width: "100%"
                            }}
                        />
                        <Typography
                            variant='h3'
                            textAlign="center"
                            pt="5px"
                        >
                            Demand forecasting model for retail
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
                            Implemented probabilistic forecasting with feature stores and automated retraining; improved inventory accuracy and reduced stockouts by 28%.

                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            component="img"
                            src={aiOutcome2}
                            sx={{
                                width: "100%"
                            }}
                        />
                        <Typography
                            variant='h3'
                            textAlign="center"
                            pt="5px"
                        >
                            NLP pipeline for customer insights
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
                            Deployed an NLP pipeline to classify and route customer messages in real-time, reducing manual triage effort and improving SLA compliance.

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
                <Typography variant='h2' textAlign="center" pb="15px" >
                    Technologies we use
                </Typography>
                
                <Box>
                    <TechnologyIcons
                    items={[
                        {iconImg:ai1},
                        {iconImg:ai2},
                        {iconImg:ai3},
                        {iconImg:ai4},
                        {iconImg:ai5},
                        {iconImg:ai6},
                        {iconImg:ai7},
                        {iconImg:ai8},
                        {iconImg:ai9},
                    ]}
                    />
                </Box>

                <Box>
                    <TechnologyIcons
                    items={[
                        {iconImg:ai10},
                        {iconImg:ai11},
                        {iconImg:s7},
                        {iconImg:ai12},
                        {iconImg:ai13},
                        {iconImg:ai14},
                        {iconImg:ai15},
                        {iconImg:ai16},
                    ]}
                    />
                </Box>
                
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
                                question: "How do you handle data privacy?", answer: "We follow privacy-first patterns: anonymization, minimization, secure data stores and role-based access, and can advise on compliance (GDPR/CCPA) where needed."
                            },
                            {
                                question: "What is your model validation process?", answer: "We validate using cross-validation, holdout sets, backtesting for time-series, business metrics validation and explainability tests to ensure robustness."
                            },
                            {
                                question: "Can you integrate models with our existing systems?", answer: "Yes — we provide APIs, streaming endpoints and batch jobs that integrate with existing platforms and pipelines."
                            },
                        ]}
                    />
                </Box>
                <Box>
                    <Box
                        component="img"
                        src={webFAQ}
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

export default AiDevelopment
