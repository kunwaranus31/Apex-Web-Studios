// src/components/HomeForm.jsx
import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Button,
  Typography,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";

export default function HomeForm() {
  const [fileName, setFileName] = React.useState("");
  const [errors, setErrors] = React.useState({ name: "", email: "" });

  const fieldSX = {
    mb: 4, // consistent spacing under each field
    "& .MuiInputBase-root": { alignItems: "center" },
    "& .MuiInput-underline:before": { borderBottomColor: "rgba(0,0,0,0.2)" },
    "& .MuiInput-underline:hover:before": { borderBottomColor: "rgba(0,0,0,0.35)" },
    "& .MuiInput-underline:after": { borderBottomColor: "#7444FD" },
    "& input::placeholder": { opacity: 1, color: "rgba(0,0,0,0.6)" },
  };

  const validate = (data) => {
    const name = data.get("name")?.trim() || "";
    const email = data.get("email")?.trim() || "";
    const newErrors = { name: "", email: "" };

    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email.";

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!validate(data)) return;

    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      address: data.get("address"),
      email: data.get("email"),
      resumeFileName: fileName || null,
    };
    console.log("Submit payload:", payload);
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        // container sizing
        width: "100%",
        maxWidth: { xs: "100%", sm: 620, md: 980, lg: 1100 },
        mx: "auto",
        px: { xs: 2, sm: 3 }, // safe side padding on small screens
        my: { xs: 4, md: 6 },
      }}
    >
      {/* Two-column responsive wrapper */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 6 },
        }}
      >
        {/* Left column */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <TextField
            name="name"
            required
            fullWidth
            variant="standard"
            placeholder="Name *"
            error={!!errors.name}
            helperText={errors.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            }}
            sx={fieldSX}
          />

          <TextField
            name="phone"
            fullWidth
            variant="standard"
            placeholder="Phone number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneOutlinedIcon sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            }}
            sx={fieldSX}
          />

          <TextField
            name="address"
            fullWidth
            variant="standard"
            placeholder="Address"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnOutlinedIcon sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            }}
            sx={{ ...fieldSX, mb: { xs: 3, md: 2 } }}
          />

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                borderRadius: "9999px",
                px: 3,
                py: 1.2,
                textTransform: "none",
                fontWeight: 600,
                bgcolor: "#7444FD",
                boxShadow: "none",
                "&:hover": { bgcolor: "#5e32d6", boxShadow: "none" },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>

        {/* Right column */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <TextField
            name="email"
            required
            fullWidth
            variant="standard"
            placeholder="Email *"
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            }}
            sx={fieldSX}
          />

          <TextField
            fullWidth
            variant="standard"
            placeholder="Upload Resume"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <UploadOutlinedIcon sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
              readOnly: true,
            }}
            sx={fieldSX}
          />

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
            <input
              id="resume-input"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => {
                const f = e.target.files?.[0];
                setFileName(f ? f.name : "");
              }}
            />
            <label htmlFor="resume-input">
              <Button
                component="span"
                variant="outlined"
                sx={{
                  borderRadius: "9999px",
                  px: 2.5,
                  py: 0.8,
                  textTransform: "none",
                  fontWeight: 600,
                  borderColor: "rgba(0,0,0,0.2)",
                }}
              >
                Choose File
              </Button>
            </label>
            <Typography sx={{ color: "text.secondary" }}>
              {fileName || "No file chosen"}
            </Typography>
          </Box>

          {/* Mobile submit button */}
          <Box sx={{ display: { xs: "block", md: "none" }, mt: 4 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                borderRadius: "9999px",
                px: 3,
                py: 1.2,
                textTransform: "none",
                fontWeight: 600,
                bgcolor: "#7444FD",
                boxShadow: "none",
                "&:hover": { bgcolor: "#5e32d6", boxShadow: "none" },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Desktop submit button spacer (keeps layout tidy) */}
      <Box sx={{ display: { xs: "none", md: "block" }, mt: 2 }} />
    </Box>
  );
}
