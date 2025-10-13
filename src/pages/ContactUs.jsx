import { Box, Typography } from '@mui/material'
import React from 'react'
import { AboutForm, BoxBg, FlexBox, HeadingWithSubheading, InnerPageHeader } from '../component'
import ContactSection from '../component/ContactSection'
import { location, mail, phone } from '../assets/service/serviceInnerPages'
import { formBg } from '../assets'

const ContactUs = () => {
    return (
        <Box>
            <InnerPageHeader
                heading="Contact Us"
                crumbs={[
                    { label: "home", to: "/" },
                    { label: "Contact Us" },
                ]}
            />
            <FlexBox sx={{
                py: 6
            }} >

                <ContactSection
                    items={[
                        { heading: "Our Address", text: "2464 Royal Ln. Mesa, New Jersey 45463.", image: location },
                        { heading: "Our Email", text: "contact.tech@gmail.com", image: mail },
                        { heading: "Our Phone", text: "+001 6520 698 00", image: phone },
                    ]}
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

export default ContactUs
