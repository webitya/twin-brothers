"use client";
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
  Typography
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DrawerEl = ({ open, onClose, navLinks }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1,
            borderBottom: "1px solid #ddd",
          }}
        >
          <Typography variant="h6">Menu</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component="a" href={item.path} onClick={onClose}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerEl;
