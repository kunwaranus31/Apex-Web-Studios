import { Box } from '@mui/material'
import React from 'react'
import FlexBox from './FlexBox'

const TechnologyIcons = ({items}) => {
    return (
        <Box>
            <FlexBox sx={{
                justifyContent: "center",
                flexWrap:"wrap",
                gap: 2,
                py: 2,
                flexDirection: { sm: "column", md: "row" },
            }}>
                {
                    items.map((item, index) => (
                        <Box
                            key={index}
                            component="img"
                            sx={{
                                width: "90px"
                            }}
                            src={item.iconImg}
                        />
                    ))
                }

            </FlexBox>
        </Box>
    )
}

export default TechnologyIcons
