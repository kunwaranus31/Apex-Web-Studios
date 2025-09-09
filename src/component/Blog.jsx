import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import LeftIconText from "./LeftIconText";
import PersonIcon from "@mui/icons-material/Person";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import FolderIcon from "@mui/icons-material/FolderOpen";

const Blog = ({ blogImage, blogName, text, author = "By Admin", date = "Sep 30, 2024" }) => {
  return (
    <Box
      sx={{
        p: 2,
        border: "1px solid #E6E6E6",
        borderRadius: 4,
        maxWidth: 340,            // responsive cap
        width: "100%",            // fill available space
        bgcolor: "#fff",
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={blogImage}
        alt={blogName}
        sx={{
          borderRadius: 3,
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />

      {/* Category Pill (overlapping) */}
      <Box
        sx={{
          backgroundColor: "#FAF8FF",
          borderRadius: 9,
          py: 0.5,
          px: 1.5,
          width: "max-content",
          position: "relative",
          zIndex: 1,
          mt: -2.25,
          ml: 1,
          boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
        }}
      >
        <LeftIconText
          icon={<FolderIcon color="primary" />}
          text={text}
          textColor="primary.main"
        />
      </Box>

      {/* Title */}
      <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>
        {blogName}
      </Typography>

      <Divider />

      {/* Meta row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mt: 2,
          flexWrap: "wrap",
        }}
      >
        <LeftIconText
          icon={<PersonIcon color="primary" />}
          text={author}
          textColor="#858585"
        />

        {/* Short vertical divider with controlled height */}
        <Divider
          orientation="vertical"
          sx={{
            height: 18,
            borderRightWidth: 2,
            borderColor: "primary.main",
          }}
          flexItem={false}
        />

        <LeftIconText
          icon={<CalendarIcon color="primary" />}
          text={date}
          textColor="#858585"
        />
      </Box>
    </Box>
  );
};

export default Blog;
