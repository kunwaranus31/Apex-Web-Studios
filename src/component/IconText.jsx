import { Box, Typography } from '@mui/material'
import React from 'react'
import fireIcon from "../assets/fire-icon.png";

const IconText = ({subheading}) => {
    return (
        <div>
            <Box
                sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    py: 1,
                    mb: { xs: 2, md: 3 },
                    borderRadius: "9999px",
                    bgcolor: "rgba(116, 68, 253, 0.12)", // soft purple
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                }}
            >

                <Typography
                    variant="body1"
                    sx={{ color: "#7444FD", fontWeight: 500, whiteSpace: "nowrap" }}
                >
                    {subheading}
                </Typography>

                <Box component="img" src={fireIcon} alt="fire" sx={{ width: 18, height: 18 }} />
            </Box>
        </div>
    )
}

export default IconText
