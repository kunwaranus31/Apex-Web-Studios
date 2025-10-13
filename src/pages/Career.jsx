import { Box, Button, linkClasses, Typography } from '@mui/material'
import React from 'react'
import { AccordionFaq, BoxBg, FlexBox, HeadingWithSubheading, HomeForm, IconWithInfo, InnerPageHeader, InnerPageTextImage } from '../component'
import { appoachImg, career2, careerFirst, careerLife, careerWhy1, careerWhy2, careerWhy3, careerWhy4, careerWhy5 } from '../assets/service/serviceInnerPages'
import { numbersBg, testimonialBg } from '../assets'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from 'react-router-dom'


const Career = () => {
    return (
        <Box>
            <InnerPageHeader
                heading="Career"
                crumbs={[
                    { label: "home", to: "/" },
                    { label: "Career" },
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
                    src={careerFirst}
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
                    Join the <span style={{ color: "#7444FD" }}>Future of Tech </span>Innovation
                </Typography>
                <Typography
                    variant='body'
                    sx={{
                        display: "block",
                        width: { lg: "980px" },
                        mb: 3
                    }}
                >
                    At LodaTech, we’re not just building software — we’re shaping the future of how businesses and people interact with technology. Our mission is to create impactful, intelligent, and human-centered tech solutions that empower industries to grow and adapt faster than ever before.
                </Typography>
                <Typography
                    variant='body'
                >
                    If you’re passionate about innovation, creativity, and collaboration — we’d love to have you on board.

                </Typography>
            </FlexBox>

            <BoxBg
                sx={{
                    background: "#FAF8FF"
                }}
            >
                <InnerPageTextImage
                    subheading=" We Grow Together."
                    heading={
                        <>
                            Shared <span style={{ color: "#7444FD" }}>Values</span>, Shared{" "}
                            <span style={{ color: "#7444FD" }}>Success</span>
                        </>
                    }
                    paragraph={
                        <>
                            At LodaTech, our culture is built on values that inspire innovation, collaboration, and lasting impact. We believe that when we share the same purpose and principles, we grow — together.
                            <br />
                            <Box sx={{ color: "#7444FD", mt: 2, display: "block", mb:"-20px" }}>
                                <Typography 
                                variant='h4'
                                >

                                    Our Core Values
                                </Typography>

                            </Box>
                        </>
                    }
                    paragraphWidth="680px"
                    image={career2}
                    items={[
                        { iconHeading: "Innovation at Heart", iconDetail: "We challenge the ordinary and think beyond limits. Every idea, no matter how small, sparks the next big breakthrough." },
                        { iconHeading: "Integrity in Action", iconDetail: "We build trust through honesty, transparency, and accountability — in every project and every interaction." },
                        { iconHeading: "Collaboration that Empowers", iconDetail: "We believe great things happen when diverse minds work together toward a shared goal." },
                        { iconHeading: "Growth Mindset", iconDetail: "We invest in continuous learning, personal growth, and professional development to help every team member reach their full potential." },
                        { iconHeading: "User-First Thinking", iconDetail: "Technology is only as powerful as the value it delivers. We focus on crafting solutions that make a real difference in people’s lives." },
                    ]}
                    rowDirection="row-reverse"
                />
            </BoxBg>

            <Box
                sx={{
                    py: 12
                }} >
                <HeadingWithSubheading
                    subheading="Work With LodaTech"
                    heading="Why Work With Us?"
                    align="center"
                />
                <FlexBox sx={{
                    justifyContent: "center",
                    pt: 4,
                    gap: 2
                }}>
                    <IconWithInfo
                        heading="Global Impact"
                        info="Work on meaningful projects that serve businesses and users around the world."
                        infoWidth="325px"
                        textImage={careerWhy1}
                        imageWidth="55px"
                        textClr="#000"

                    />
                    <IconWithInfo
                        heading="Culture of Innovation"
                        info="We encourage experimentation, learning, and creative thinking. Every idea matters."
                        infoWidth="325px"
                        textImage={careerWhy2}
                        imageWidth="55px"
                        textClr="#000"

                    />
                    <IconWithInfo
                        heading="Hybrid Work Model"
                        info="Enjoy flexibility with remote and in-office options designed for work-life balance."
                        infoWidth="325px"
                        textImage={careerWhy3}
                        imageWidth="55px"
                        textClr="#000"

                    />
                </FlexBox>
                <FlexBox sx={{
                    justifyContent: "center",
                    pt: 4,
                    gap: 2
                }}>

                    <IconWithInfo
                        heading="Career Growth"
                        info="Access mentorship, professional development programs, and opportunities to grow your skills in tech and leadership."
                        infoWidth="325px"
                        textImage={careerWhy4}
                        imageWidth="55px"
                        textClr="#000"

                    />
                    <IconWithInfo
                        heading="Collaborative Environment"
                        info="Join a diverse team where open communication and teamwork drive our success."
                        infoWidth="325px"
                        textImage={careerWhy5}
                        imageWidth="55px"
                        textClr="#000"

                    />
                </FlexBox>
            </Box>
            <BoxBg
                bgImage={testimonialBg}
            >
                <FlexBox
                    sx={{
                        flexDirection: { xs: "column-reverse", lg: "row" }
                    }}
                >
                    <Box>
                        <HeadingWithSubheading
                            subheading="LodaTech"
                            heading="Life at LodaTech"
                            align="left"
                        />
                        <Typography
                            variant='body'
                            sx={{
                                display: "block",
                                mt: 2
                            }}
                        >
                            We believe work should be meaningful and enjoyable. From team-building events and hackathons to learning sessions and community impact projects, we nurture a workplace where creativity thrives and people feel valued.
                        </Typography>
                        <Typography
                            sx={{
                                color: "#7444FD",
                                fontWeight: "bold",
                                fontStyle: "italic",
                                mt: 2
                            }}
                        >
                            “Working at LodaTech feels like being part of a family that’s shaping the digital future — together.”
                        </Typography>

                    </Box>
                    <Box
                        component='img'
                        src={careerLife}

                        sx={{
                            width: { lg: "50%" },
                            maxWidth: "100%",

                        }}
                    />
                </FlexBox>

            </BoxBg>

            <BoxBg
                bgImage={numbersBg}
                sx={{
                    my: 9
                }}
            >
                <Box
                    sx={{
                        textAlign: "Center",
                        color: "#fff"
                    }}
                >
                    <Typography
                        variant='h2'>
                        Ready to Start Your Journey?
                    </Typography>
                    <Typography
                        variant='body'
                        sx={{
                            display: "block",
                            my: 3
                        }}
                    >
                        If you’re ready to innovate, grow, and make an impact, we’d love to hear from you.
                    </Typography>
                </Box>
                <FlexBox sx={{ gap: 1, pt: 3, px: 0, mb: 3, justifyContent: "center" }}>
                    <Button
                        component={Link}
                        to="/services"

                        // variant="outlined"
                        sx={{
                            background: "#fff",
                            color: "#282C32",

                        }}
                        endIcon={<ArrowForwardIcon />}
                    >
                        Explore Services
                    </Button>
                    <Button
                        component="a"
                        href="mailto:careers@lodatech.com"
                        // variant="outlined"
                        sx={{
                            background: "#fff",
                            color: "#282C32",
                        }}
                        endIcon={<ArrowForwardIcon />}
                    >
                        careers@lodatech.com
                    </Button>
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
                                question: "Can you run our Kafka cluster?", answer: "Depends on scope. Simple marketing sites can be delivered in 4–8 weeks; larger web apps and headless commerce projects typically take 3–6 months."
                            },
                            {
                                question: "What about cost control?"
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

            <BoxBg
                bgImage={testimonialBg}
                sx={{
                    mb: 9
                }}
            >
                <HeadingWithSubheading align="center" subheading="Career" heading="Join Us For An Amazing Journey" />
                <HomeForm />
            </BoxBg>

        </Box>
    )
}

export default Career
