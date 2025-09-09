import { Box, Typography } from '@mui/material'
import React from 'react'
import fireIcon from "../assets/fire-icon.png";

const IconTextWhite = ({subheading}) => {
    return (
        <Box>
            <Box
                sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    py: 1,
                    mb: { xs: 2, md: 3 },
                    borderRadius: "9999px",
                    bgcolor: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(5px)",
                }}
            >

                <Typography
                    variant="body1"
                    sx={{ color: "#ffffffff", fontWeight: 500, whiteSpace: "nowrap" }}
                >
                    {subheading}
                </Typography>

                <Box component="img" src={fireIcon} alt="fire" sx={{ width: 18, height: 18 }} />
            </Box>
        </Box>
    )
}

export default IconTextWhite
