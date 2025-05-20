"use client";
import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Slides with spa-themed images
const slides = [
  {
    image: "/closeup-man-enjoying-relaxing-back-massage-with-honey-spa.webp",
  },
  {
    image: "/side-view-man-getting-professional-massage.webp",
  },
  {
    image: "/high-angle-man-relaxing-spa.webp",
  },
];

// Framer Motion variants
const slideVariants = {
  initial: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
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

  const goToSlide = (i) => {
    if (i !== index) {
      setDirection(i > index ? 1 : -1);
      setIndex(i);
    }
  };

  const slide = slides[index];

  return (
   <div className="mt-[-50px]">
 <Box 
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: { xs: 220, sm: 400, md: 450, lg: 550 },
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
      }}
    >
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
          }}
        >
          <Box
            component="img"
            src={slide.image}
            alt={`slide-${index}`}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
              filter: "brightness(0.85)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, rgba(230,240,230,0.4), rgba(255,255,255,0.1))",
              zIndex: 0,
            }}
          />
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
          backgroundColor: "rgba(144, 176, 144, 0.6)",
          color: "#fff",
          zIndex: 2,
          "&:hover": {
            backgroundColor: "rgba(144, 176, 144, 0.8)",
          },
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
          backgroundColor: "rgba(144, 176, 144, 0.6)",
          color: "#fff",
          zIndex: 2,
          "&:hover": {
            backgroundColor: "rgba(144, 176, 144, 0.8)",
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Bottom Dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: 15,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 1,
          zIndex: 3,
        }}
      >
        {slides.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => goToSlide(i)}
            initial={false}
            animate={{
              width: i === index ? 22 : 10,
              backgroundColor: i === index ? "#90B090" : "#ccc",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              height: 10,
              borderRadius: 20,
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>

   </div>
  );
};

export default HomePageCarousel;
