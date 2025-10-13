import { Box, Typography } from '@mui/material'
import React from 'react'
import { AboutForm, BoxBg, FlexBox, HeadingWithSubheading, InnerPageHeader, InnerPageTextImage } from '../component'
import { industries2, industries3, industries4, industries5, industriesFirst } from '../assets/service/serviceInnerPages'
import { formBg } from '../assets'

const Industries = () => {
    return (
        <Box>
            <InnerPageHeader
                heading="Industries"
                crumbs={[
                    { label: "home", to: "/" },
                    { label: "Industries" },
                ]}
            />
            <FlexBox
                sx={{
                    display: "block",
                    py: 5
                }}
            >
                <Box
                    component="img"
                    src={industriesFirst}
                    sx={{
                        width: "100%",
                        my: 2
                    }}
                />
                <Typography
                    variant='h1'
                    sx={{
                        my: 3
                    }}
                >
                    Industries We Power With <span style={{ color: "#7444FD" }}>Precision</span>
                </Typography>
                <Typography
                    variant='body'
                    sx={{
                        display: "block",
                        width: { lg: "980px" },
                        mb: 3
                    }}
                >
                    At LodaTech, we collaborate with industry leaders across diverse sectors to design, build, and scale solutions that drive measurable impact.
                </Typography>
                <Typography
                    variant='body'
                    sx={{
                        display: "block",
                        width: { lg: "980px" },
                    }}
                >
                    Our cross-functional teams combine strategy, engineering, and innovation to help organizations navigate complexity, embrace change, and unlock sustainable growth.
                </Typography>
            </FlexBox>
            <BoxBg
                sx={{
                    background: "#FAF8FF"
                }}
            >
                <InnerPageTextImage
                    subheading="LodaTech Inc"
                    heading={
                        <>
                            Aerospace & <span style={{ color: "#7444FD" }}>Defense</span>
                        </>
                    }
                    paragraph={
                        <>
                            <Typography
                                sx={{
                                    color: "#000",
                                    mt: 3,
                                }}>
                                We design sustainable roadmaps that navigate regulatory complexity, reduce operational expense, and streamline both processes and technical platforms for aerospace and defense organizations.
                            </Typography>
                            <Typography
                                sx={{
                                    mt: 3,
                                    color: "#000"
                                }}>
                                Partnering with aerospace and defense teams to deliver compliant, cost-conscious strategies that optimize workflows and modernize technology stacks for long-term resilience.</Typography>
                        </>
                    }
                    paragraphWidth="580px"
                    image={industries2}

                    rowDirection="row"
                />
            </BoxBg>

            <FlexBox
                sx={{
                    display: "block",
                    py: 8
                }}>
                <InnerPageTextImage
                    subheading="LodaTech Inc"
                    heading={
                        <>
                            Financial <span style={{ color: "#7444FD" }}>Services</span>
                        </>
                    }
                    paragraph={
                        <>
                            <Typography
                                sx={{
                                    color: "#000",
                                    mt: 3,
                                }}>
                                We partner with financial organisations to anticipate market trends, implement innovation programs, and modernise products and operations for sustainable growth — leveraging experience across fintech, banking, capital markets and insurance.
                            </Typography>
                            <Typography
                                sx={{
                                    mt: 3,
                                    color: "#000"
                                }}>
                                Our teams combine industry strategy and technical delivery to help financial services firms innovate responsibly, optimise processes and expand with confidence.
                            </Typography>
                            <Typography
                                sx={{
                                    mt: 3,
                                    color: "#000"
                                }}>
                                From strategy to execution, we design and deliver practical initiatives that enable banks, insurers and capital-markets firms to adapt, launch new offerings and scale efficiently.
                            </Typography>
                        </>
                    }
                    paragraphWidth="580px"
                    image={industries3}

                    rowDirection="row-reverse"
                />
            </FlexBox>

            <BoxBg
                sx={{
                    background: "#FAF8FF"
                }}
            >
                <InnerPageTextImage
                    subheading="LodaTech Inc"
                    heading="Technology"
                    paragraph={
                        <>
                            <Typography
                                sx={{
                                    color: "#000",
                                    mt: 3,
                                }}>
                                We design and scale infrastructure, delivery processes and engineering teams to ensure you operate effectively through pivotal moments — whether rapid expansion, new regulatory requirements or mergers and acquisitions.
                            </Typography>
                            <Typography
                                sx={{
                                    mt: 3,
                                    color: "#000"
                                }}>
                                Our work focuses on making systems and teams transaction-ready and growth-proof: modernization, process automation and organizational alignment to reduce risk and accelerate outcomes.
                            </Typography>
                            <Typography
                                sx={{
                                    mt: 3,
                                    color: "#000"
                                }}>
                                From platform hardening to team enablement, we help organisations move confidently through expansions, regulatory transitions and complex transactions by aligning technology, processes and people.
                            </Typography>
                        </>
                    }
                    paragraphWidth="580px"
                    image={industries4}

                    rowDirection="row"
                />
            </BoxBg>
            <FlexBox
                sx={{
                    display: "block",
                    py: 8
                }}>
                <InnerPageTextImage
                    subheading="LodaTech Inc"
                    heading={
                        <>
                            Consumer <span style={{ color: "#7444FD" }}>Goods</span> & <span style={{ color: "#7444FD" }}>Retail</span>
                        </>
                    }
                    paragraph={
                        <>
                            <Typography
                                sx={{
                                    color: "#000",
                                    mt: 3,
                                }}>
                                We partner with consumer goods and retail teams to design and deliver sustainable programs — from demand-
                                driven replenishment and dynamic pricing to customer-experience experiments that boost loyalty and margin.
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#000"
                                }}>
                                Run a short discovery, prototype demand-forecasting and inventory automation, then deliver production-grade systems that reduce waste, improve fill rates and react to changing customer behavior.
                            </Typography>
                            <Typography
                                sx={{
                                    mt: 3,
                                    color: "#000"
                                }}>
                                End-to-end initiatives combining predictive analytics, supply-chain automation and UX improvements to lower operating costs and capture new demand opportunities.
                            </Typography>
                        </>
                    }
                    paragraphWidth="580px"
                    image={industries5}

                    rowDirection="row-reverse"
                />
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
                        heading="Send Us a Message"
                        justify="center"
                        align="center"
                    />

                    <Typography
                        variant='body' >
                        At LodaTech, your goals are our mission. Let’s collaborate to build solutions that inspire growth, efficiency, and innovation.
                    </Typography>
                </Box>
                <AboutForm />
            </BoxBg>

        </Box>
    )
}

export default Industries
