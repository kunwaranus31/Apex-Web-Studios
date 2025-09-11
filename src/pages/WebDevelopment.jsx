import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import approachBg from '../assets/service/serviceBg.jpg'
import formBg from "../assets/testimonialbg.webp";


import { AboutForm, AccordionFaq, BoxBg, FlexBox, HeadingWithSubheading, IconWithInfo, InnerPageHeader, InnerPageTextImage, TextWithBorder } from "../component"

import { s9, secondBg, techBg, webAlly, webApi, webBuild, webCF, webCms, webCmsIcon, webCss, webDesign, webDiscovery, webFAQ, webFirst, webFrontend, webGraph, webHtml, webJava, webJest, webJs, webLaunch, webMeasure, webNetlify, webNext, webOptimize, webOutcome1, webOutcome2, webPerformance, webProduct, webProjectImg, webPW, webShopify, webT, webTs, webV, webVercel, webWebops, webWhychoose } from '../assets/service/serviceInnerPages'

import { Box, Button, Divider, Typography } from '@mui/material'

const WebDevelopment = () => {
    return (
        <Box>
            <InnerPageHeader heading="Web Development" crumbs={[
                { label: "Home", to: "/" },
                { label: "Service", to: "/services" },
                { label: "Web Development" },
            ]} />


            <FlexBox sx={{
                display: "block",
                py: 5
            }} >
                <Box
                    component="img"
                    src={webFirst}
                    sx={{
                        width: "100%",
                        my: 2
                    }}
                />
                <Typography variant='h1' sx={{
                    mb: 2
                }} >
                    Web Development
                </Typography>
                <Box>
                    <TextWithBorder items={[
                        { text: "Design" },
                        { text: "Frontend Engineering" },
                        { text: "Performance" },
                        { text: "Accessibility" },
                        { text: "WebOps" },
                    ]} />
                </Box>
                <Typography sx={{ my: 2 }} >
                    Complexity, simplified — we design and build web experiences that are fast, accessible, and built to scale.
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
                        Overview
                    </Typography>
                    <Typography
                        variant='body'
                    >
                        We create websites and web applications that balance user experience, accessibility and long-term maintainability. Whether you need a marketing site that converts, a headless CMS storefront, or a single-page app with complex business logic, our team builds solutions that perform and adapt as your business grows.
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
                    heading="Why Lodatech for web"
                    image={webWhychoose}
                    imageWidth='500px'
                    contentjustify="space-between"
                    items={[
                        { iconHeading: "Practical design.", iconDetail: "We deliver interfaces that increase engagement and lower support burden." },
                        { iconHeading: "Built for scale.", iconDetail: "Engineering patterns that stay maintainable as features grow." },
                        { iconHeading: "Conversion-focused.", iconDetail: "UX + performance tuned to improve lead generation and sales." },
                        { iconHeading: "Accessibility-first.", iconDetail: "Compliance and inclusive design baked into every project." },
                        { iconHeading: "Production-ready operations.", iconDetail: "From CI to monitoring and runbooks — we operate what we build." },
                    ]}
                    rowDirection="row-reverse"
                />
            </BoxBg>

            <Box sx={{
                py: 12
            }}>
                <HeadingWithSubheading
                    subheading="LodaTech Offer"
                    heading="What we do"
                    align="center"
                />

                <FlexBox sx={{
                    justifyContent: "center",
                    pt: 4,
                    gap: 2
                }}>
                    <IconWithInfo
                        heading="Product & UX Design"
                        info="User research, wireframes, prototyping and design systems to ensure accessible, conversion-focused experiences."
                        infoWidth="325px"
                        textImage={webProduct}
                        imageWidth="55px"
                        textClr="#000"

                    />
                    <IconWithInfo
                        heading="Frontend Engineering"
                        info="Modern frontend stacks (React, Next.js, TypeScript, Vue) with component-driven architecture and automated testing."
                        infoWidth="325px"
                        textImage={webFrontend}
                        imageWidth="55px"
                        textClr="#000"
                    />
                    <IconWithInfo
                        heading="Performance & SEO"
                        info="Server-side rendering, code-splitting, critical CSS, and performance budgets to improve load times and search rankings."
                        infoWidth="315px"
                        textImage={webPerformance}
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
                        heading="Accessibility (A11y)"
                        info="WCAG-compliant patterns, keyboard-first interactions and assistive technology testing to make your site usable by everyone."
                        infoWidth="325px"
                        textImage={webAlly}
                        imageWidth="55px"
                        textClr="#000"
                    />
                    <IconWithInfo
                        heading="E-commerce & Headless CMS"
                        info="Headless commerce, CMS integrations (Contentful, Strapi, Sanity), and fast, conversion-optimized storefronts."
                        infoWidth="325px"
                        textImage={webCms}
                        imageWidth="55px"
                        textClr="#000"
                    />
                    <IconWithInfo
                        heading="WebOps & Security"
                        info="CI/CD, image optimization, caching, CDN strategy and security hardening to keep sites fast and safe in production."
                        infoWidth="320px"
                        textImage={webWebops}
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
                    heading="Our process for web projects"
                    align="center"
                />
                <Typography
                    textAlign="center"
                >
                    A practical, iterative approach designed to reduce risk and deliver value early.
                </Typography>

                <FlexBox sx={{
                    py: 4,
                    justifyContent: "center",
                    gap: 0,

                }}>
                    <Box>
                        <IconWithInfo
                            heading="Discovery & goals"
                            info="Convert metrics and stakeholders into measurable success criteria."
                            infoWidth="320px"
                            textImage={webDiscovery}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Design & prototype "
                            info="Rapid prototypes and usability testing to validate assumptions."
                            infoWidth="330px"
                            textImage={webDesign}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Build & test"
                            info="Component-driven development, automated and accessibility tests."
                            infoWidth="320px"
                            textImage={webBuild}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                    </Box>
                    <Box
                        component="img"
                        src={webProjectImg}
                        sx={{
                            width: { xs: "100%", lg: "500px" }
                        }}
                    />
                    <Box>
                        <IconWithInfo
                            heading="Optimize"
                            info="Performance tuning, SEO checks and conversion rate improvements."
                            infoWidth="320px"
                            textImage={webOptimize}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Launch & operate"
                            info="CI/CD, monitoring, CDN, backups and security reviews."
                            infoWidth="320px"
                            textImage={webLaunch}
                            imageWidth="55px"
                            textClr="#000"
                            fontsize="14px"
                            hover={false}
                        />
                        <IconWithInfo
                            heading="Measure & iterate"
                            info="Analytics-driven improvements and A/B experiments."
                            infoWidth="320px"
                            textImage={webMeasure}
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
                            src={webOutcome1}
                            sx={{
                                width: "100%"
                            }}
                        />
                        <Typography
                            variant='h3'
                            textAlign="center"
                            pt="5px"
                        >
                            Marketing site redesign for SaaS
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
                            Improved Core Web Vitals and conversion rate: 40% faster load times and a 22% lift in trial signups within 60 days.
                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            component="img"
                            src={webOutcome2}
                            sx={{
                                width: "100%"
                            }}
                        />
                        <Typography
                            variant='h3'
                            textAlign="center"
                            pt="5px"
                        >
                            Headless storefront for retail brand
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
                            Launched headless commerce with a React storefront and CDN-backed assets — conversion increased and average page load fell below 1.5s.
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
                    Technologies & integrations
                </Typography>
                <Typography textAlign="center">
                    We commonly use
                </Typography>
                <FlexBox sx={{
                    justifyContent: "center",
                    gap: 2,
                    py: 2
                }}>
                    <Box component="img" src={webHtml} sx={{ width: "90px" }} />
                    <Box component="img" src={webCss} sx={{ width: "90px" }} />
                    <Box component="img" src={webJs} sx={{ width: "90px" }} />
                    <Box component="img" src={s9} sx={{ width: "90px" }} />
                    <Box component="img" src={webNext} sx={{ width: "90px" }} />
                    <Box component="img" src={webTs} sx={{ width: "90px" }} />
                    <Box component="img" src={webV} sx={{ width: "90px" }} />

                </FlexBox>
                <FlexBox sx={{
                    justifyContent: "center",
                    gap: 2,
                    py: 1,
                    pb: 3
                }}>
                    <Box component="img" src={webT} sx={{ width: "90px" }} />
                    <Box component="img" src={webJava} sx={{ width: "90px" }} />
                    <Box component="img" src={webGraph} sx={{ width: "90px" }} />
                    <Box component="img" src={webApi} sx={{ width: "90px" }} />
                    <Box component="img" src={webCmsIcon} sx={{ width: "90px" }} />
                </FlexBox>
                <Typography variant='h2' textAlign="center" >
                    Contentful, Sanity
                </Typography>
                <FlexBox sx={{
                    justifyContent: "center",
                    gap: 2,
                    py: 3
                }}>
                    <Box component="img" src={webShopify} sx={{ width: "90px" }} />
                    <Box component="img" src={webVercel} sx={{ width: "90px" }} />
                    <Box component="img" src={webNetlify} sx={{ width: "90px" }} />
                    <Box component="img" src={webCF} sx={{ width: "90px" }} />
                    <Box component="img" src={webJest} sx={{ width: "90px" }} />
                    <Box component="img" src={webPW} sx={{ width: "90px" }} />
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
                                question: "How long does a website project take?", answer: "Depends on scope. Simple marketing sites can be delivered in 4–8 weeks; larger web apps and headless commerce projects typically take 3–6 months."
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

export default WebDevelopment
