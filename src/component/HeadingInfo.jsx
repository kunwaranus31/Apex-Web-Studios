import { Box, Typography } from '@mui/material'
import React from 'react'
import line from "../assets/line.png"

const HeadingInfo = ({ item }) => {
    return (
        <Box>

            {item.map((item, i) =>
                <Box key={i} sx={{my:1}}>
                    <Typography variant='h3' color="primary" mb={.5} >
                        {item.heading}
                    </Typography>
                    <Typography variant='body'  >
                        {item.text}
                    </Typography>
                    <Box>

                        <Box
                            component="img"
                            src={line}
                            sx={{
                                maxWidth: "100%",
                                
                            }}
                        />
                    </Box>
                </Box>
            )
            }
        </Box>
    )
}

export default HeadingInfo
