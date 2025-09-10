import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import {
aboutUs1,
aboutUs2,
aboutsec3,
mission,
vision,
polish,
ownership,
clarity,
security,
improv,
engineer,
fabrice,
senior,
product,
data,
deliver,
pipeline,
cloud,
fact,
formBg,
fact2
} from "../assets";

import {
InnerPageHeader,
InnerPageTextImage,
BoxBg,
FlexBox,
HeadingWithSubheading,
IconWithInfo,
Team,
HeadingInfo,
AboutForm,

} from '../component';


const AboutUs = () => {
  return (
    <Box>
      <InnerPageHeader heading="About Us" />
      <Box sx={{ py: { xs: 3, lg: 10 } }} >
        <InnerPageTextImage
          subheading="Complexity, simplified."
          heading="About Lodatech"
          paragraph="We turn messy technical problems into clear, reliable solutions — software, data platforms and cloud systems that teams actually use. We combine engineering craft with business context so technology becomes an enabler, not an obstacle."
          paragraphWidth="580px"
          image={aboutUs1}
          btnText1="Book a discovery call"
          btnLink1="#"
          btnText2="Explore Services"
          btnLink2="#"
          rowDirection="row"
        />
      </Box>

      <BoxBg bgImage={aboutsec3}   >
        <Box sx={{
          py: 5
        }} >
          <HeadingWithSubheading
            subheading="LodaTechValues"
            heading="Our Purpose and Principles"
            align="center"
            justify="center"
          />
        </Box>
        <FlexBox sx={{ justifyContent: "center" }} >
          <IconWithInfo
            textImage={mission}
            imageWidth="70px"
            heading="Our Mission"
            info="To simplify complexity for organizations by delivering practical, secure and maintainable engineering solutions that create measurable business value."
            infoWidth="390px"
          />
          <IconWithInfo
            textImage={vision}
            imageWidth="70px"
            heading="Our Vision"
            info="To be the trusted partner that bridges business goals and technology execution — so every organization can harness data and software with confidence."
            infoWidth="390px"
          />
        </FlexBox>
        <Box>
          <Typography variant='h2' sx={{ 
            textAlign: "center", 
            mt: 3,
            background:"linear-gradient(180deg,  rgba(116, 68, 253, 0.3),rgba(116, 68, 253, 0))" ,
            borderRadius:4,
            width:"200px",
            justifySelf:"center",
            py:"10px"
            }} >
            Our values
          </Typography>
        </Box>

        <FlexBox sx={{
          justifyContent: "center",
          py: 3
        }} >
          <IconWithInfo
            textImage={polish}
            imageWidth="55px"
            heading="Practicality over polish"
            info="Solve the real problem, not the prettiest one."
            infoWidth="270px"
          />
          <IconWithInfo
            textImage={ownership}
            imageWidth="55px"
            heading="Ownership"
            info="We deliver end-to-end and stay accountable for outcomes."
            infoWidth="270px"
          />
          <IconWithInfo
            textImage={clarity}
            imageWidth="55px"
            heading="Clarity"
            info="Simple designs, clear documentation, and no needless complexity."
            infoWidth="230px"
          />
        </FlexBox>
        <FlexBox sx={{
          justifyContent: "center",
          py: 3
        }} >
          <IconWithInfo
            textImage={security}
            imageWidth="55px"
            heading="Security & reliability"
            info="Build safe systems that keep working under pressure."
            infoWidth="270px"
          />
          <IconWithInfo
            textImage={improv}
            imageWidth="55px"
            heading="Continuous improvement"
            info="Iterate fast, measure, and improve what matters."
            infoWidth="270px"
          />
          <IconWithInfo
            textImage={engineer}
            imageWidth="55px"
            heading="Business-first engineering"
            info="Technical work must connect to measurable outcomes."
            infoWidth="230px"
          />
        </FlexBox>

      </BoxBg>

      <Box sx={{ py: { xs: 3, lg: 10 } }} >
        <InnerPageTextImage
          subheading="How we work"
          heading="How we work"
          paragraph="A predictable, outcome-driven approach that reduces uncertainty and delivers early value."
          paragraphWidth="580px"
          image={aboutUs2}
          items={[
            { iconHeading: "Discover", iconDetail: "Short discovery sprint to map goals, constraints and success metrics." },
            { iconHeading: "Prototype", iconDetail: "Rapid prototypes to validate assumptions with stakeholders." },
            { iconHeading: "Build", iconDetail: "Iterative delivery, automated tests and architecture choices that minimize long-term cost." },
            { iconHeading: "Operate", iconDetail: "CI/CD, monitoring and runbooks so systems remain dependable in production." },
            { iconHeading: "Improve", iconDetail: "Metrics-driven enhancements and coaching to scale internally." },
          ]}
          rowDirection="row-reverse"
        />
      </Box>

      <Box sx={{
        py: 5
        
      }} >
        <HeadingWithSubheading
          heading="Meet the team"
          subheading="LodaTech Team"
          align="center"
          justify="center"
        />
        <Typography sx={{ color: "#565656", justifySelf: "center", textAlign: "Center", width: { lg: 720 } }} >
          Cross-functional engineers, data practitioners and product thinkers who collaborate closely with your teams. We combine deep technical craft with business context to deliver solutions that matter.
        </Typography>
        <FlexBox sx={{
          gap: 2,
          justifyContent:"center",
        }} >
          <Team
            teamImg={fabrice}
            teamName="Fabrice Touopi"
            teamDetail="Founder & Solutions Architect — Big data, Kafka and cloud-native platforms."
          />
          <Team
            teamImg={senior}
            teamName="Senior Engineer"
            teamDetail="Backend & infrastructure lead — systems design and reliability."
          />
          <Team
            teamImg={product}
            teamName="Product Designer"
            teamDetail="UX, prototyping and design systems."
          />
          <Team
            teamImg={data}
            teamName="Data Lead"
            teamDetail="Data platform and analytics engineering."
          />
        </FlexBox>
      </Box>

      <FlexBox sx={{
        justifyContent: "center"

      }} >
        <Box x={{ width: { xs: "100%", md: "auto" } }}>
          <Box
            component="img"
            src={deliver}
            sx={{
              width: { xs: "100%", md: "auto" },
              maxWidth: "100%",
              height: "auto",
            }}
          />

        </Box>

        <Box >
          <HeadingWithSubheading
            subheading="LodaTech Deliver "
            heading="Proof we deliver"
          />
          <Typography color="#858585" sx={{
            width: { xs: "100%", sm: "80%", md: "600px" },
          }} >
            We help teams ship faster, reduce outages and turn data into trusted insights. Typical outcomes include reduced pipeline latency, faster deployment cadence, improved MTTR and measurable business KPIs — and we’re happy to share case studies on request.
          </Typography>
          <Box sx={{
            py: 3
          }}>
            <IconWithInfo
              textImage={pipeline}
              heading="Pipeline stabilization"
              info="Reduced processing lag and added tracing so teams can troubleshoot quickly."
              infoWidth="500px"
              imageWidth="75px"
            />
            <IconWithInfo
              textImage={cloud}
              heading="Pipeline stabilization"
              info="Migrated a legacy app to Kubernetes with standard pipelines and self-service namespaces."
              infoWidth="500px"
              imageWidth="75px"
            />
          </Box>
        </Box>
      </FlexBox>
      <Box
        component="section"
        sx={{
          display: "flex",
          py: { xs: 4, md: 10, lg: 8 },
          gap: { xs: 4, md: 12 }, //
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column-reverse", md: "row" },
          px: { xs: 2, md: 0 },
          width: "100%", // 
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        {/* Left Column: Text Content */}
        <Box sx={{ width: "100%", ml: { xs: 0, md: 23 } }}>
          <Box>
            <HeadingWithSubheading
              align="left"
              subheading="LodaTech Facts"
              heading="Quick facts"
            />
          </Box>

          <Box sx={{ my: 3 }}>
            <HeadingInfo
              item={[
                { heading: "Founded", text: "2022" },
                { heading: "Specialties", text: "Software · Data · Cloud · DevOps · AI" },
                { heading: "Industries", text: "FinTech, Insurance, Aerospace, Telecom, Healthcare, Retail, Logistics" },
                { heading: "Engagements", text: "Assessments, projects, managed services." },
              ]}
            />
            <Typography variant="h3" color="primary">
              Typical Deliverables
            </Typography>
            <Typography>
              <ul>
                <li>Architecture blueprints & decision logs</li>
                <li>Production-ready applications & CI pipelines</li>
                <li>Data pipelines, monitoring and runbooks</li>
                <li>MLOps pipelines & explainability reports</li>
              </ul>
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              borderRadius: "9999px",
              px: 3,
              py: 1.2,
              textTransform: "none",
              fontWeight: 600,
              bgcolor: "#7444FD",
              "&:hover": { bgcolor: "#5e32d6" },
            }}
            endIcon={<ArrowForwardIcon fontSize="small" />}
          >
            View services
          </Button>
        </Box>

        {/* Right Column: Images */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            mt: { xs: 3, md: 0 }, // Adjust margin top for better spacing on mobile
          }}
        >
          {/* Fact Image */}
          <Box
            component="img"
            src={fact}
            sx={{
              width: { xs: "100%", md: "auto" },
              maxWidth: "100%",
              height: "auto",
              display: "block",
              userSelect: "none",
            }}
          />
          {/* Second Image: Positioned Below */}
          <Box
            component="img"
            src={fact2}
            sx={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              userSelect: "none",
              position: "absolute",
              bottom: { xs: "-20px", md: "-110px" },
              width: { xs: "250px", md: "450px" },
              left: { xs: "90px", md: "-290px" },
            }}
          />
        </Box>
      </Box>

      <BoxBg bgImage={formBg} sx={{ pt: 9, pb: 3, my: 7 }} >
        <Box sx={{
          maxWidth: 1200,
          mx: "auto",
          textAlign: "center",
          px:{xs:1}
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

export default AboutUs
