import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FavoriteIcon from "@mui/icons-material/Favorite";

const therapyFeatures = [
  {
    icon: <SpaIcon sx={{ fontSize: 40, color: "#a3d2ca" }} />,
    title: "Relaxing Environment",
    description: "Our spaces are designed to promote peace and tranquility.",
  },
  {
    icon: <SelfImprovementIcon sx={{ fontSize: 40, color: "#a3d2ca" }} />,
    title: "Expert Therapists",
    description: "Experienced professionals offering various massage techniques.",
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 40, color: "#a3d2ca" }} />,
    title: "Healing Touch",
    description: "Boost your wellbeing with our healing massage therapies.",
  },
];

const HomePageMassageTherapySection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f0f7f4",
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        mb={4}
        sx={{ color: "#344e41" }}
      >
        Massage Therapy That Rejuvenates
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign="center"
        maxWidth="700px"
        mx="auto"
        mb={6}
        sx={{ color: "#344e41" }}
      >
        Discover the ancient art of healing with our curated massage therapies. Whether you're looking to reduce stress, manage pain, or simply relax, we've got you covered.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {therapyFeatures.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#dbe5e5",
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent sx={{ textAlign: "center", py: 4 }}>
                {feature.icon}
                <Typography variant="h6" fontWeight="bold" mt={2} mb={1}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#333" }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePageMassageTherapySection;
