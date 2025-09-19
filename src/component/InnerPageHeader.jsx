import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import HeaderImg from "../assets/innerpageheader.jpg";

const InnerPageHeader = ({ heading, crumbs = [] }) => {
  // Use last crumb as title when heading not provided
  const title = heading ?? (crumbs.length ? crumbs[crumbs.length - 1].label : "");

  // Common link styles (unchanged)
  const linkSx = {
    color: "#000",
    textDecoration: "none",         // replaces MUI Link's underline="none"
    "&:hover": { color: "primary.main" }
  };

  return (
    <Box>
      <Box
        component="section"
        sx={{
          backgroundImage: `url(${HeaderImg})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
          position: "relative",
          overflow: "hidden",
          textAlign: { xs: "center", md: "center" },
          pt: { xs: 12, lg: 20 },
          pb: { xs: 8, lg: 16 },
        }}
      >
        <Typography variant='h1'>
          {title}
        </Typography>

        <Typography variant="h4">
          {crumbs.length > 0 ? (
            <>
              {crumbs.map((c, idx) => {
                const isLast = idx === crumbs.length - 1;

                if (!isLast && (c.to || c.href)) {
                  // Linked crumb: internal uses RouterLink; external uses <a>
                  return (
                    <React.Fragment key={`${c.label}-${idx}`}>
                      {c.to ? (
                        <Box
                          component={RouterLink}
                          to={c.to}
                          sx={linkSx}
                        >
                          {c.label}
                        </Box>
                      ) : (
                        <Box
                          component="a"
                          href={c.href}
                          sx={linkSx}
                        >
                          {c.label}
                        </Box>
                      )}
                      {" / "}
                    </React.Fragment>
                  );
                }

                // Last (current) crumb — same style as before
                return (
                  <Box
                    key={`${c.label}-${idx}`}
                    component="span"
                    sx={{ color: "primary.main" }}
                  >
                    {c.label}
                  </Box>
                );
              })}
            </>
          ) : (
            <>
              <Box
                component={RouterLink}
                to="/"
                sx={linkSx}
              >
                Home
              </Box>
              {" / "}
              <Box
                component="span"
                sx={{ color: "primary.main" }}
              >
                {title}
              </Box>
            </>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default InnerPageHeader;
  