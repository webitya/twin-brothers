"use client";
import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Slides data
const slides = [
  {
    title: "Welcome to Our Website",
    description: "Discover amazing services and features we offer!",
    image: "/images/slide1.jpg",
  },
  {
    title: "Quality You Can Trust",
    description: "We ensure top quality in everything we deliver.",
    image: "/images/slide2.jpg",
  },
  {
    title: "Join Our Community",
    description: "Be part of something bigger and grow with us.",
    image: "/images/slide3.jpg",
  },
];

const slideVariants = {
  initial: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7 },
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.5 },
  }),
};

const HomePageCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[index];

  return (
    <Box sx={{ position: "relative", overflow: "hidden", width: "100%", height: { xs: 300, md: 450 } }}>
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(0,0,0,0.5)",
              padding: 3,
              borderRadius: 2,
              textAlign: "center",
              maxWidth: "90%",
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              {slide.title}
            </Typography>
            <Typography variant="subtitle1" mt={2}>
              {slide.description}
            </Typography>
          </Box>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default HomePageCarousel;
