import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { AboutForm, AccordionFaq, BoxBg, FlexBox, HeadingWithSubheading, IconWithInfo, InnerPageHeader, InnerPageTextImage, TechnologyIcons } from '../component'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ai15, ai16, ai2, appoachImg, bigDataTech15, dev1, dev10, dev11, dev12, dev13, dev14, dev2, dev3, dev4, dev5, dev6, dev7, dev8, dev9, devApproachImg, devOpsImg, devOutcomes1, devOutcomes2, devService1, devService2, devService3, devService4, devService5, devService6, devWhyImg, devWork1, devWork2, devWork3, devWork4, devWork5, devWork6, s7, s8, secondBg, techBg } from '../assets/service/serviceInnerPages';
import approachBg from '../assets/service/serviceBg.jpg'
import { formBg } from '../assets';

const DevopsCloud = () => {
    return (
        <Box>
            <InnerPageHeader
                heading="Devops"
                crumbs={[
                    { label: "home", to: "/" },
                    { label: "Services", to: "/services" },
                    { label: "Devops" },
                ]}
            />
            <FlexBox sx={{
                display: "block",
                py: 5
            }} >
                <Box
                    component="img"
                    src={devOpsImg}
                    sx={{
                        width: "100%",
                        my: 2
                    }}
                />
                <Typography variant='h1' sx={{
                    mb: 2
                }} >
                    DevOps & Cloud Engineering
                </Typography>

                <Typography sx={{ my: 2 }} >
                    Complexity, simplified — automate delivery, secure production, and run resilient cloud-native platforms.


                </Typography>
                <FlexBox sx={{ gap: 1, pt: 3, px: 0, mb: 3, alignItems: { xs: "flex-start" } }}>
                    <Button
                        component="a"
                        href="#"
                        variant="contained"
                        endIcon={<ArrowForwardIcon fontSize="small" />}
                    >
                        Request a DevOps assessment
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
                        We help teams automate software delivery, reduce operational risk, and operate systems with SRE discipline. Whether you're starting with CI/CD, migrating workloads to cloud, or improving reliability at scale, Lodatech builds practices and automation that stick.


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
                    heading="Why Lodatech for DevOps"
                    image={devWhyImg}
                    imageWidth='550px'
                    contentjustify="space-between"
                    items={[
                        { iconHeading: "Practical automation.", iconDetail: "We automate work your team hates and keep human oversight where it matters." },
                        { iconHeading: "Platform thinking.", iconDetail: "Self-service environments and guardrails let product teams move safely and fast." },
                        { iconHeading: "SRE discipline.", iconDetail: "We bring measurable reliability and incident readiness — not just scripts." },
                        { iconHeading: "Security-first.", iconDetail: "Shift-left security checks and secrets lifecycle management included." },
                        { iconHeading: "Cost-aware architecture.", iconDetail: "We design for performance and predictable cloud spend." },
                    ]}
                    rowDirection="row-reverse"
                />
            </BoxBg>
            <Box sx={{
                py: 12
            }}>
                <HeadingWithSubheading
                    subheading="LodaTech Offer"
                    heading="Core services"
                    align="center"
                />

                <FlexBox sx={{
                    justifyContent: "center",
                    pt: 4,
                    gap: 2
                }}>
                    <IconWithInfo
                        heading="CI/CD & Release Engineering"
                        info="Design and implement pipelines (GitLab CI, GitHub Actions, Jenkins) for fast, safe delivery: linting, unit & integration tests, canary releases and rollback strategies."
                        infoWidth="325px"
                        textImage={devService1}
                        imageWidth="55px"
                        textClr="#000"

                    />
                    <IconWithInfo
                        heading="Cloud Migrations & Platform"
                        info="Lift-and-shift to cloud providers, containerization, Kubernetes (GKE/EKS/AKS) platform design and multi-account strategies for security and scale."
                        infoWidth="325px"
                        textImage={devService2}
                        imageWidth="55px"
                        textClr="#000"
                    />
                    <IconWithInfo
                        heading="SRE & Reliability Engineering"
                        info="SLA/SLO design, error budgets, incident response runbooks and chaos testing to proactively improve uptime and recovery."
                        infoWidth="315px"
                        textImage={devService3}
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
                        heading="Infrastructure as Code"
                        info="Terraform, Helm and cloud-native templates for repeatable, auditable infrastructure deployments and environment parity."
                        infoWidth="325px"
                        textImage={devService4}
                        imageWidth="55px"
                        textClr="#000"
                    />
                    <IconWithInfo
                        heading="Observability & Monitoring"
                        info="Metrics, tracing and structured logging (Prometheus, Grafana, OpenTelemetry) to detect issues early and reduce time-to-resolution."
                        infoWidth="325px"
                        textImage={devService5}
                        imageWidth="55px"
                        textClr="#000"
                    />
                    <IconWithInfo
                        heading="DevSecOps & Compliance"
                        info="Security automation (IaC scanning, secret management, container scanning), threat modeling and compliance pipelines to reduce risk."
                        infoWidth="320px"
                        textImage={devService6}
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
                    heading="How we work"
                    align="center"
                />
                <Typography
                    textAlign="center"
                >
                    We combine engineering, automation and operational rigor into a repeatable delivery pattern.
                </Typography>

                <FlexBox sx={{
                    py: 4,
                    justifyContent: "center",
                    gap: 0,

                }}>
                    <Box>
                        <IconWithInfo
                            heading="Assess"
                            info="Audit pipelines, infra, runbooks, costs and security posture."
                            infoWidth="320px"
                            textImage={devWork1}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Plan"
                            info="Prioritize quick wins and platform initiatives with measurable KPIs."
                            infoWidth="330px"
                            textImage={devWork2}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Automate"
                            info="Implement CI/CD, IaC, configuration and self-service tooling."
                            infoWidth="320px"
                            textImage={devWork3}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                    </Box>
                    <Box
                        component="img"
                        src={devApproachImg}
                        sx={{
                            width: { xs: "100%", lg: "500px" }
                        }}
                    />
                    <Box>
                        <IconWithInfo
                            heading="Instrument"
                            info="Add metrics, tracing, log aggregation and alerting for key signals."
                            infoWidth="310px"
                            textImage={devWork4}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Harden"
                            info="Implement SRE practices, chaos experiments and security automation."
                            infoWidth="320px"
                            textImage={devWork5}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Operate & Transfer"
                            info="Run, optimize and train your teams for autonomous operations."
                            infoWidth="320px"
                            textImage={devWork6}
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
                            src={devOutcomes1}
                            sx={{
                                width: "100%"
                            }}
                        />
                        <Typography
                            variant='h3'
                            textAlign="center"
                            pt="5px"
                        >
                            CI/CD & platform for SaaS
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
                            Implemented GitOps-driven platform, standard pipelines and self-service namespaces — deployment frequency rose 4× and lead time dropped dramatically.
                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            component="img"
                            src={devOutcomes2}
                            sx={{
                                width: "100%"
                            }}
                        />
                        <Typography
                            variant='h3'
                            textAlign="center"
                            pt="5px"
                        >
                            Reliability program for enterprise app
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
                            Defined SLOs, introduced error budgets and improved incident response; MTTR reduced by 65% and customer-impacting incidents dropped significantly.


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
                    Tools & platforms we work with
                </Typography>
                <Box>
                    <TechnologyIcons
                    items={[
                        {iconImg:s8},
                        {iconImg:dev1},
                        {iconImg:dev2},
                        {iconImg:dev3},
                        {iconImg:dev4},
                        {iconImg:dev5},
                        {iconImg:dev6},
                        {iconImg:dev7},
                        {iconImg:ai15},
                    ]}
                    />
                </Box>
                <Box>
                    <TechnologyIcons
                    items={[
                        {iconImg:ai16},
                        {iconImg:dev8},
                        {iconImg:dev9},
                        {iconImg:dev10},
                        {iconImg:s7},
                        {iconImg:dev11},
                        {iconImg:dev12},
                        {iconImg:dev13},
                        {iconImg:dev14},
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
                                question: "How long does a DevOps engagement take?", answer: "Short-term assessments and quick-win automation can be delivered in 2–6 weeks. Platform-level work and SRE programs typically run 3–9 months depending on scope."
                            },
                            {
                                question: "Can you help with cloud cost optimization?", answer: "Yes — we provide cost audits, rightsizing recommendations, autoscaling strategies and governance to control spend."
                            },
                            {
                                question: "Do you provide on-call / managed services?", answer: "Yes — Lodatech can operate platforms, provide SRE support, or enable and train your teams with runbooks and playbooks."
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

export default DevopsCloud
