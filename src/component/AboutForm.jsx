import React from "react";
import emailjs from '@emailjs/browser';
import {
    Box,
    TextField,
    InputAdornment,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MessageIcon from '@mui/icons-material/Message';

export default function AboutForm() {
    const [errors, setErrors] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const [service, setService] = React.useState("");

    const fieldSX = {
        mb: 4, // consistent spacing under each field
        "& .MuiInputBase-root": { alignItems: "center" },
        "& .MuiInput-underline:before": { borderBottomColor: "rgba(0,0,0,0.2)" },
        "& .MuiInput-underline:hover:before": { borderBottomColor: "rgba(0,0,0,0.35)" },
        "& .MuiInput-underline:after": { borderBottomColor: "#7444FD" },
        "& input::placeholder": { opacity: 1, color: "rgba(0,0,0,0.6)" },
    };

    const handleServiceChange = (event) => {
        setService(event.target.value);
    };

    const validate = (data) => {
        const firstName = data.get("firstName")?.trim() || "";
        const lastName = data.get("lastName")?.trim() || "";
        const email = data.get("email")?.trim() || "";
        const newErrors = { firstName: "", lastName: "", email: "" };

        if (!firstName) newErrors.firstName = "First name is required.";
        if (!lastName) newErrors.lastName = "Last name is required.";
        if (!email) newErrors.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Enter a valid email.";

        setErrors(newErrors);
        return !newErrors.firstName && !newErrors.lastName && !newErrors.email;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        if (!validate(data)) return;

        const payload = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            phone: data.get("phone"),
            email: data.get("email"),
            service: service || null,
            message: data.get("message") || null,
        };
        console.log("Submit payload:", payload);
        emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,   // Use VITE_ prefix for Vite
          import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,  // Use VITE_ prefix for Vite
          e.target,                                  // The form data
          import.meta.env.VITE_EMAILJS_USER_ID      // Use VITE_ prefix for Vite
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.error("Error sending email:", error.text);
            alert("There was an error sending the message. Please try again.");
          }
          
        );
    };

    return (
        <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: { xs: "100%", sm: 620, md: 980, lg: 1100 },
                mx: "auto",
                px: { xs: 2, sm: 3 },
                my: { xs: 4, md: 6 },
            }}
        >
            {/* Two-column responsive wrapper */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },  // Stack vertically on mobile, side by side on desktop
                    gap: { xs: 3, md: 6 },
                }}
            >
                {/* Left column */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <TextField
                        name="firstName"
                        required
                        fullWidth
                        variant="standard"
                        placeholder="First Name *"
                        error={!!errors.firstName}
                        helperText={errors.firstName}
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

                    {/* Dropdown for Service */}
                    <FormControl fullWidth variant="standard" sx={fieldSX}>
                        <InputLabel>Service</InputLabel>
                        <Select
                            name="service"
                            value={service}
                            onChange={handleServiceChange}
                            label="Service"
                        >
                            <MenuItem value="Software Development">Software Development</MenuItem>
                            <MenuItem value="Web Development">Web Development</MenuItem>
                            <MenuItem value="Big Data Development">Big Data Development</MenuItem>
                            <MenuItem value="AI / ML Development">AI / ML Development</MenuItem>
                            <MenuItem value="DevOps & Cloud Engineering">DevOps & Cloud Engineering</MenuItem>
                            <MenuItem value="Mobile App Development">Mobile App Development</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Submit Button for Desktop */}
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
                            Book Discovery Call
                        </Button>
                    </Box>
                </Box>

                {/* Right column */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <TextField
                        name="lastName"
                        required
                        fullWidth
                        variant="standard"
                        placeholder="Last Name *"
                        error={!!errors.lastName}
                        helperText={errors.lastName}
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
                        name="message"
                        fullWidth
                        variant="standard"
                        placeholder="Message (optional)"
                        multiline
                        rows={2}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MessageIcon sx={{ color: "text.secondary" }} />
                                </InputAdornment>
                            ),
                        }}
                        sx={fieldSX}
                    />

                    {/* Submit Button for Mobile */}
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
                            Book Discovery Call
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Desktop submit button spacer (keeps layout tidy) */}
            <Box sx={{ display: { xs: "none", md: "block" }, mt: 2 }} />
        </Box>
    );
}
