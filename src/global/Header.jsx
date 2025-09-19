import React from "react";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Collapse,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Top-level nav (except Services dropdown)
const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about-us" },
  // Services handled separately for dropdown
  { name: "Industries", link: "#" },
  { name: "Resources", link: "#" },
  { name: "Contact", link: "#" },
];

// Services submenu items
const servicesItems = [
  { name: "Software Development", link: "/software-development" },
  { name: "Web Development", link: "/web-development" },
  { name: "Big Data Development", link: "/big-data-development" },
  { name: "AI Development", link: "/ai-development" },
  { name: "DevOps", link: "/devops" },
  { name: "Mobile App Development", link: "/mobile-app-development" },
];

const Header = () => {
  const [open, setOpen] = React.useState(false); // mobile drawer
  const [svcAnchor, setSvcAnchor] = React.useState(null); // desktop menu anchor
  const svcMenuOpen = Boolean(svcAnchor);

  // mobile services expand/collapse
  const [mobileSvcOpen, setMobileSvcOpen] = React.useState(false);

  const handleSvcOpen = (event) => setSvcAnchor(event.currentTarget);
  const handleSvcClose = () => setSvcAnchor(null);

  return (
    <Box component="header" sx={{ mb: { xs: -8, lg: -10 }, zIndex: 9, position: "relative" }}>
      <Box
        sx={{
          maxWidth: "1540px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 6, lg: "90px" },
          py: { xs: 1.5, md: 2 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 1.5, md: 2 },
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={logo} alt="Logo" style={{ width: "100%", maxWidth: 150 }} />
        </Box>

        {/* Desktop nav */}
        <Box
          component="ul"
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: { md: 2.5, lg: 3.5 },
            listStyle: "none",
            m: 0,
            p: 0,
            "& li": {
              cursor: "pointer",
              fontWeight: 500,
              fontSize: { md: "0.95rem", lg: "1rem" },
              opacity: 0.9,
              "&:hover": { opacity: 1 },
            },
          }}
        >
          {/* Home / About */}
          {navItems.slice(0, 2).map((item) => (
            <li key={item.name}>
              <Link to={item.link} style={{ textDecoration: "none", color: "inherit" }}>
                {item.name}
              </Link>
            </li>
          ))}

          {/* Services: link + separate dropdown trigger (desktop) */}
          <li style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {/* Pure link — always navigates */}
            <Typography
              component={Link}
              to="/services"
              color="inherit"
              variant="text"
              sx={{
                textDecoration: "none",
                p: 0,
                minWidth: 0,
                textTransform: "none",
                fontWeight: 500,
                fontSize: { md: "0.95rem", lg: "1rem" },
                lineHeight: 1.2,
                // "&:hover": { backgroundColor: "transparent" },


              }}
            >
              Services
            </Typography>

            {/* Arrow only controls the dropdown */}
            <IconButton
              size="small"
              aria-label="Open services menu"
              aria-haspopup="menu"
              aria-controls={svcMenuOpen ? "services-menu" : undefined}
              aria-expanded={svcMenuOpen ? "true" : undefined}
              onClick={handleSvcOpen}
              onMouseEnter={handleSvcOpen} // optional: hover-to-open
              sx={{ p: 0 }}
            >
              <KeyboardArrowDownIcon
                sx={{
                  fontSize: "1.1rem",
                  transition: "transform 0.3s ease",
                  transform: svcMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </IconButton>

            {/* Dropdown menu */}
            <Menu
              id="services-menu"
              anchorEl={svcAnchor}
              open={svcMenuOpen}
              onClose={handleSvcClose}
              MenuListProps={{ onMouseLeave: handleSvcClose }}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              elevation={2}
            >
              {servicesItems.map((svc) => (
                <MenuItem
                  key={svc.name}
                  component={Link}
                  to={svc.link}
                  onClick={handleSvcClose}
                  disableRipple
                >
                  {svc.name}
                </MenuItem>
              ))}
            </Menu>
          </li>

          {/* Remaining items */}
          {navItems.slice(2).map((item) => (
            <li key={item.name}>
              <Link to={item.link} style={{ textDecoration: "none", color: "inherit" }}>
                {item.name}
              </Link>
            </li>
          ))}
        </Box>

        {/* Desktop CTA */}
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            display: { xs: "none", md: "inline-flex" },
            borderRadius: "9999px",
            px: { md: 2.5, lg: 3.5 },
            py: { md: 0.75, lg: 1 },
            fontSize: { md: "0.95rem", lg: "1rem" },
            textTransform: "none",
            bgcolor: "#7444FD",
            "&:hover": { bgcolor: "#5e32d6" },
            whiteSpace: "nowrap",
          }}
        >
          Get Started
        </Button>

        {/* Mobile hamburger */}
        <IconButton
          sx={{ display: { xs: "inline-flex", md: "none" } }}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }} // better performance on mobile
        PaperProps={{
          sx: {
            width: 320,
            maxWidth: "100vw",
            pt: "env(safe-area-inset-top)", // iOS safe area
          },
        }}
      >
        <Box sx={{ p: 2, pt: 3, display: "flex", flexDirection: "column", gap: 1.5 }}>
          <List>
            {/* Home / About */}
            {navItems.slice(0, 2).map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton onClick={() => setOpen(false)} component={Link} to={item.link}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}

            {/* Services (mobile): left tap navigates, right chevron expands */}
            <ListItem disablePadding>
              <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                <ListItemButton
                  onClick={() => setOpen(false)}
                  component={Link}
                  to="/services"
                  aria-label="Go to Services page"
                  sx={{ flex: 1, pr: 1.5 }}
                >
                  <ListItemText primary="Services" />
                </ListItemButton>

                <IconButton
                  edge="end"
                  aria-label="Expand services submenu"
                  aria-expanded={mobileSvcOpen ? "true" : "false"}
                  aria-controls="mobile-services-submenu"
                  onClick={(e) => {
                    e.stopPropagation(); // don't trigger the link
                    setMobileSvcOpen((v) => !v);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      e.stopPropagation();
                      setMobileSvcOpen((v) => !v);
                    }
                  }}
                  sx={{ mr: 1 }}
                >
                  {mobileSvcOpen ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </Box>
            </ListItem>

            <Collapse in={mobileSvcOpen} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                id="mobile-services-submenu"
                aria-label="Services submenu"
              >
                {servicesItems.map((svc) => (
                  <ListItem key={svc.name} disablePadding>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      onClick={() => setOpen(false)}
                      component={Link}
                      to={svc.link}
                    >
                      <ListItemText primary={svc.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>

            {/* Remaining items */}
            {navItems.slice(2).map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton onClick={() => setOpen(false)} component={Link} to={item.link}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              alignSelf: "stretch",
              mt: 1,
              borderRadius: "9999px",
              textTransform: "none",
              bgcolor: "#7444FD",
              "&:hover": { bgcolor: "#5e32d6" },
            }}
            onClick={() => setOpen(false)}
          >
            Get Started
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
