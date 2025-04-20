"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CallIcon from "@mui/icons-material/Call";

const DrawerEl = ({ open, onClose, navLinks }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 270,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #2e2e2e, #1c1c1c)",
          color: "#f4f4f4",
          fontFamily: "'Lato', sans-serif",
        }}
        role="presentation"
      >
        {/* Logo + Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 2,
            borderBottom: "1px solid #444",
          }}
        >
          <Box display="flex" alignItems="center" gap={1.2}>
            <Image
              src="/logo.png"
              alt="Twin Brothers Therapy Logo"
              width={40}
              height={40}
              style={{ borderRadius: "6px" }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: "1rem",
                color: "#ffb6b9",
                letterSpacing: "0.5px",
              }}
            >
              Twin Brothers Therapy
            </Typography>
          </Box>
          <IconButton onClick={onClose} sx={{ color: "#f4f4f4" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Nav Links Centered Vertically */}
        <Box sx={{ flex: 1, display: "flex", alignItems: "start", justifyContent: "start" }}>
          <List sx={{ width: "100%", px: 2 }}>
            {navLinks.map((item, index) => (
              <ListItem key={index} disablePadding>
                <Link href={item.path} passHref legacyBehavior>
                  <ListItemButton
                    component="a"
                    onClick={onClose}
                    sx={{
                      px: 3,
                      py: 1.5,
                      borderRadius: "8px",
                      color: "#f4f4f4",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "#3a3a3a",
                        pl: 4,
                        color: "#ffd6e0",
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        letterSpacing: "0.5px",
                        textAlign: "center",
                      }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Footer with Call Now Button */}
        <Box
          sx={{
            borderTop: "1px solid #444",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Button
            href="tel:+916299826209"
            startIcon={<CallIcon />}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#ffb6b9",
              color: "#1c1c1c",
              fontWeight: 600,
              borderRadius: "8px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#ffa6ac",
              },
            }}
          >
            Call Now: +91 6299 826 209
          </Button>

          <Typography
            variant="caption"
            sx={{ color: "#aaa", textAlign: "center" }}
          >
            “A peaceful soul begins with a mindful choice.”
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default DrawerEl;
