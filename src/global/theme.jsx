// src/global/theme.jsx
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Urbanist, Arial, sans-serif",
    h1: {
      fontSize: "3rem",       // global size for h1
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      textTransform:"capitalize",
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 600,
      textTransform:"capitalize",
    },
    h3: {
      fontSize: "1.4rem",
      fontWeight: 600,
      textTransform:"capitalize",
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
      textTransform:"capitalize",
    },
    h5: {
      fontSize: "1.15rem",
      fontWeight: 600,
      textTransform:"capitalize",
    },
    body: {
      fontFamily: "urbanist"
    }
  },
  palette: {
    primary: {
      main: "#7444FD", // your brand purple
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
          padding:"8px 20px",
          textTransform: "none",
          fontWeight: 600,
        },
        outlinedPrimary:{
          borderWidth: 2,
          
        }
      }
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
