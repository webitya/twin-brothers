"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import DrawerEl from "../DrawerEl";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Female Therapist", path: "/female-therapist" },
  { label: "Contact", path: "/contact" },
];

const NavbarEl = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <AppBar
        position="fixed" 
        style={{zIndex:"99999"}}
        elevation={isSticky ? 4 : 0}
        sx={{
          backgroundColor: isSticky ? "#f8f5f2" : "transparent",
          color: "#3e3e3e",
          borderBottom: isSticky ? "1px solid #e0e0e0" : "none",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 2, md: 6 },
            py: 1.5, 
            zIndex:"9999"
          }}
        >
          {/* Logo and Brand */}
          <Box display="flex" alignItems="center" gap={1.5}>
            <Image
              src="/logo.webp"
              alt="Twin Brothers Therapy Logo"
              width={50}
              height={50}
              style={{ borderRadius: "5px" }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                fontSize: { xs: "1rem", md: "1.1rem" },
                letterSpacing: "1px",
                color: "#2e3a2d",
              }}
            >
              TWIN BROTHERS THERAPY
            </Typography>
          </Box>

          {/* Nav Links + Call Button */}
          {isMobile ? (
            <IconButton edge="start" onClick={handleDrawerToggle} sx={{ color: "#2e3a2d" }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {navLinks.map((item, index) => (
                <Link key={index} href={item.path} passHref>
                  <Button
                    sx={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      color: "#2e3a2d",
                      textTransform: "none",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        width: "0%",
                        height: "2px",
                        backgroundColor: "#a4c3b2",
                        transition: "width 0.3s",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}

              {/* Call Button */}
              <Button
                startIcon={<PhoneIcon />}
                href="tel:+916299826209"
                sx={{
                  ml: 2,
                  px: 2.5,
                  py: 1,
                  backgroundColor: "#a4c3b2",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  fontSize: "0.9rem",
                  fontFamily: "'Lato', sans-serif",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#8fb2a3",
                  },
                }}
              >
                +91 6299 826 209
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Push content down to avoid hidden elements behind sticky AppBar */}
      <Box sx={{ height: { xs: 75, md: 90 } }} />

      <DrawerEl open={open} onClose={handleDrawerToggle} navLinks={navLinks} />
    </>
  );
};

export default NavbarEl;
