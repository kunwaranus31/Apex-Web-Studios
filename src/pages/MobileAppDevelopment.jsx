import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import {
  AboutForm,
  AccordionFaq,
  BoxBg,
  FlexBox,
  HeadingWithSubheading,
  IconWithInfo,
  InnerPageHeader,
  InnerPageTextImage,
  TechnologyIcons,
} from "../component";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  mobileApp1,
  mobileApp10,
  mobileApp11,
  mobileApp12,
  mobileApp13,
  mobileApp2,
  mobileApp3,
  mobileApp4,
  mobileApp5,
  mobileApp6,
  mobileApp7,
  mobileApp8,
  mobileApp9,
  mobileAppFirst,
  mobileAppProcess,
  mobileApproach1,
  mobileApproach2,
  mobileApproach3,
  mobileApproach4,
  mobileApproach5,
  mobileApproach6,
  mobileOffer1,
  mobileOffer2,
  mobileOffer3,
  mobileOffer4,
  mobileOffer5,
  mobileOffer6,
  mobileOutcome1,
  mobileOutcome2,
  mobilePatterns1,
  mobilePatterns2,
  mobilePatterns3,
  mobilePatterns4,
  s9,
  secondBg,
  techBg,
  webFAQ,
  webTs,
  webWhychoose,
} from "../assets/service/serviceInnerPages";
import approachBg from "../assets/service/serviceBg.jpg";
import { formBg } from "../assets";

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
      <FlexBox
        sx={{
          display: "block",
          py: 5,
        }}
      >
        <Box
          component="img"
          src={mobileAppFirst}
          sx={{
            width: "100%",
            my: 2,
          }}
        />
        <Typography
          variant="h1"
          sx={{
            mb: 2,
          }}
        >
          Mobile App Development
        </Typography>

        <Typography sx={{ my: 2 }}>
          Complexity, simplified — beautiful, performant mobile apps built for
          real users and real business outcomes.
        </Typography>
        <FlexBox
          sx={{ gap: 1, pt: 3, px: 0, mb: 3, alignItems: { xs: "flex-start" } }}
        >
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
              "&:hover": {
                borderWidth: 2,
                borderColor: "#282C32",
                bgcolor: "#282C32",
                color: "#fff",
              },
            }}
            endIcon={<ArrowForwardIcon />}
          >
            See services
          </Button>
        </FlexBox>

        <Divider
          sx={{
            borderColor: "#000",
          }}
        />
        <Box
          sx={{
            my: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 1,
            }}
          >
            Overview
          </Typography>
          <Typography variant="body">
            We design and build native and cross-platform mobile applications
            that focus on usability, reliability and long-term maintainability.
            From prototypes to app-store launches and backend integrations,
            Lodatech delivers apps that users love and businesses can scale.
          </Typography>
        </Box>
      </FlexBox>
      <BoxBg
        bgImage={secondBg}
        sx={{
          py: 6,
        }}
      >
        <InnerPageTextImage
          subheading="Why Choose Lodatech"
          heading="Why Lodatech for mobile"
          image={webWhychoose}
          imageWidth="550px"
          contentjustify="space-between"
          items={[
            {
              iconHeading: "User-first apps.",
              iconDetail:
                "We prioritize real user needs and usability on-device.",
            },
            {
              iconHeading: "Engineering excellence.",
              iconDetail:
                "Clean architecture, test automation and maintainable code.",
            },
            {
              iconHeading: "Offline & resilience.",
              iconDetail:
                "Robust sync, caching and graceful degradation for unreliable networks.",
            },
            {
              iconHeading: "Fast time-to-market.",
              iconDetail:
                "Prototype-driven development to validate fast and iterate safely.",
            },
            {
              iconHeading: "App ops & monitoring. ",
              iconDetail:
                "Crash analytics, performance monitoring and release management included.",
            },
          ]}
          rowDirection="row-reverse"
        />
      </BoxBg>
      <Box
        sx={{
          py: 12,
        }}
      >
        <HeadingWithSubheading
          subheading="LodaTech Offer"
          heading="What we offer"
          align="center"
        />

        <FlexBox
          sx={{
            justifyContent: "center",
            pt: 4,
            gap: 2,
          }}
        >
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
        <FlexBox
          sx={{
            justifyContent: "center",
            pt: 3,
            gap: 2,
          }}
        >
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
          py: 5,
        }}
      >
        <HeadingWithSubheading
          subheading="LodaTech Approach"
          heading="Our mobile development process"
          align="center"
        />
        <Typography textAlign="center">
          From concept to app store — iterative, measurable and focused on user
          value.
        </Typography>

        <FlexBox
          sx={{
            py: 4,
            justifyContent: "center",
            gap: 0,
          }}
        >
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
          <Box
            component="img"
            src={mobileAppProcess}
            sx={{
              width: { xs: "100%", lg: "500px" },
            }}
          />
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
        pt:7
      }} >
        <Typography variant="h2" textAlign="center" sx={{ pb:3 }}>
          Recommended patterns
        </Typography>
        <FlexBox sx={{
            justifyContent:"center"
        }}>
          <IconWithInfo
            heading="Offline-first:"
            info="Local cache and sync strategies to keep the app usable offline."
            infoWidth="220px"
            textImage={mobilePatterns1}
            imageWidth="55px"
            textClr="#565656"
            fontsize="14px"
            display="block"
          />
          <IconWithInfo
            heading="Modular architecture:"
            info="Feature modules and clear separation of concerns for easier maintenance."
            infoWidth="240px"
            textImage={mobilePatterns2}
            imageWidth="55px"
            textClr="#565656"
            fontsize="14px"
            display="block"
          />
          <IconWithInfo
            heading="Feature flags:"
            info="Controlled rollouts and quick rollbacks to reduce release risk."
            infoWidth="240px"
            textImage={mobilePatterns3}
            imageWidth="55px"
            textClr="#565656"
            fontsize="14px"
            display="block"
          />
          <IconWithInfo
            heading="Secure by default:"
            info="Encrypted storage, secure token handling and least-privilege APIs."
            infoWidth="220px"
            textImage={mobilePatterns4}
            imageWidth="55px"
            textClr="#565656"
            fontsize="14px"
            display="block"
          />
        </FlexBox>
        <Box>
        <Typography variant="h2" textAlign="center" sx={{ pb:3,pt:5 }}>
        Sample build flow (concept)
        </Typography>
        </Box>
        <FlexBox sx={{
            background:"#000000",
            borderRadius:3
        }} >
            <Box sx={{
                p:4,
            }}>
                <Typography color="#CAF7FF">
                # Prototype  Build -&gt; Test -&gt; Beta -&gt; Release
                </Typography>
                <Typography color="#CAF7FF">
                Stages:
                </Typography>
                <Typography color="#CAF7FF" pl="20px">
                - Prototype
                </Typography>
                <Typography color="#CAF7FF" pl="20px">
                - Build
                </Typography>
                <Typography color="#CAF7FF" pl="20px">
                - Test
                </Typography>
                <Typography color="#CAF7FF" pl="20px">
                - Beta
                </Typography>
                <Typography color="#CAF7FF" pl="20px">
                - Release
                </Typography>
                <Typography color="#CAF7FF" pt="20px">
                Build:
                </Typography>
                <Typography color="#CAF7FF" pl="10px">
                Script:
                </Typography>
                <Typography color="#CAF7FF" pl="20px">
                - Yarn Install
                </Typography>
                <Typography color="#CAF7FF" pl="20px">
                - Yarn Build:Android
                </Typography>
                <Typography color="#CAF7FF" pl="20px">
                - Yarn Build:Ios
                </Typography>
            </Box>
        </FlexBox>

      </Box>

      <Box
        sx={{
          my: 10,
        }}
      >
        <Box
          sx={{
            mb: 3,
          }}
        >
          <Typography textAlign="center" variant="h2">
            Selected Outcomes
          </Typography>
        </Box>
        <FlexBox>
          <Box>
            <Box
              component="img"
              src={mobileOutcome1}
              sx={{
                width: "100%",
              }}
            />
            <Typography variant="h3" textAlign="center" pt="5px">
              Consumer app — rapid MVP to market
            </Typography>
            <Typography
              variant="body"
              textAlign="center"
              display="block"
              sx={{
                width: { sm: "100%", md: "540px" },
              }}
              justifySelf="center"
              pt="10px"
            >
              Delivered an MVP in 8 weeks using React Native, validated
              product-market fit and iterated to a 4.6-star app store rating
              after 3 months.
            </Typography>
          </Box>
          <Box>
            <Box
              component="img"
              src={mobileOutcome2}
              sx={{
                width: "100%",
              }}
            />
            <Typography variant="h3" textAlign="center" pt="5px">
              Field service app — offline-first
            </Typography>
            <Typography
              variant="body"
              textAlign="center"
              display="block"
              sx={{
                width: { sm: "100%", md: "500px" },
              }}
              justifySelf="center"
              pt="10px"
            >
              Built an offline-capable Android app with robust sync and
              background processing, reducing data-entry time and errors for
              field teams.
            </Typography>
          </Box>
        </FlexBox>
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
          }}
        >
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
      <BoxBg bgImage={techBg}>
        <Typography variant="h2" textAlign="center" pb="15px">
          Technologies we use
        </Typography>
        <Box>
          <TechnologyIcons
            items={[
              { iconImg: mobileApp1 },
              { iconImg: mobileApp2 },
              { iconImg: s9 },
              { iconImg: mobileApp3 },
              { iconImg: webTs },
              { iconImg: mobileApp4 },
              { iconImg: mobileApp5 },
              { iconImg: mobileApp6 },
            ]}
          />
        </Box>
        <Box>
          <TechnologyIcons
            items={[
              { iconImg: mobileApp7 },
              { iconImg: mobileApp8 },
              { iconImg: mobileApp9 },
              { iconImg: mobileApp10 },
              { iconImg: mobileApp11 },
              { iconImg: mobileApp12 },
              { iconImg: mobileApp13 },
            ]}
          />
        </Box>
      </BoxBg>
      <FlexBox
        sx={{
          gap: { xs: 3, md: 17 },
          py: 10,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
          }}
        >
          <HeadingWithSubheading
            subheading="LodaTech FAQs"
            heading="Frequently Asked Questions"
            align="left"
          />
          <AccordionFaq
            items={[
              {
                question: "Native or cross-platform — which should we choose?",
                answer:
                  "It depends on your priorities: native for maximum performance and platform integration; cross-platform for faster delivery and lower cost. We'll help you choose during discovery.",
              },
              {
                question: "How do you handle app store approvals?",
                answer:
                  "We manage build configuration, privacy pages, screenshots, metadata and submission steps for App Store and Play Store, including phased rollouts.",
              },
              {
                question: "Do you provide post-launch support?",
                answer:
                  "Book a short consultation — we'll review goals, platform choices and a pragmatic plan to get to market fast.",
              },
            ]}
          />
        </Box>
        <Box>
          <Box component="img" src={webFAQ} width="100%" />
        </Box>
      </FlexBox>
      <BoxBg bgImage={formBg} sx={{ pt: 9, pb: 3, my: 7 }}>
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            textAlign: "center",
            px: { xs: 1 },
          }}
        >
          <HeadingWithSubheading
            subheading="Contact Us"
            heading="Ready to turn AI into measurable value?"
            justify="center"
            align="center"
            headingWidth="100%"
          />

          <Typography variant="body" fontSize="14px">
            Schedule a short strategy call — we’ll assess data readiness and
            recommend a pragmatic path to production.
          </Typography>
        </Box>
        <AboutForm />
      </BoxBg>
    </Box>
  );
};

export default MobileAppDevelopment;
