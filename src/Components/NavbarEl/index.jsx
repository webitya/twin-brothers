"use client";
import React, { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerEl from "../DrawerEl";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const NavbarEl = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#f8f5f2", // Soft beige
          color: "#3e3e3e", // Charcoal
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: { xs: 2, md: 6 } }}>
          {/* Logo and Brand */}
          <Box display="flex" alignItems="center" gap={1.5}>
            <Image
              src="/logo.png"
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

          {/* Nav Links */}
          {isMobile ? (
            <IconButton edge="start" onClick={handleDrawerToggle} sx={{ color: "#2e3a2d" }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 3 }}>
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
                        backgroundColor: "#a4c3b2", // soft green underline
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
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <DrawerEl open={open} onClose={handleDrawerToggle} navLinks={navLinks} />
    </>
  );
};

export default NavbarEl;
