"use client";

import { useState, useEffect } from "react";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";

export default function GalleryGrid() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      setImages(data.images || []);
    } catch (error) {
      console.log("Error fetching gallery:", error);
      setImages(placeholderImages);
    } finally {
      setLoading(false);
    }
  };

  const placeholderImages = [
    {
      id: 1,
      url: "/placeholder.svg?key=relaxation",
      title: "Relaxation Room",
      description: "Peaceful spa room designed for deep healing.",
    },
    {
      id: 2,
      url: "/placeholder.svg?key=treatment",
      title: "Therapy Room",
      description: "Professional setup for massage treatments.",
    },
    {
      id: 3,
      url: "/placeholder.svg?key=aroma",
      title: "Aromatherapy Setup",
      description: "Premium essential oil wellness setup.",
    },
    {
      id: 4,
      url: "/placeholder.svg?key=hot-stone",
      title: "Hot Stone Therapy",
      description: "Relaxing warm stone therapy experience.",
    },
    {
      id: 5,
      url: "/placeholder.svg?key=lounge",
      title: "Client Lounge",
      description: "Calming lounge for clients.",
    },
    {
      id: 6,
      url: "/placeholder.svg?key=entrance",
      title: "Spa Entrance",
      description: "Welcoming and soothing entrance view.",
    },
  ];

  const displayImages = images.length > 0 ? images : placeholderImages;

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-br from-white via-teal-50/40 to-white">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-16 left-0 w-72 h-72 bg-teal-300/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300/25 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-teal-900">
            Our Gallery
          </h1>
          <p className="text-teal-700 text-lg max-w-2xl mx-auto mt-3">
            Explore our peaceful therapy spaces and healing environment.
          </p>
        </div>

        {/* Skeleton Loader */}
        {loading ? (
          <div className="
            grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
            gap-4 md:gap-6
          ">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="
                  aspect-square w-full rounded-lg 
                  bg-teal-100/60 animate-pulse
                  border border-teal-200
                "
              ></div>
            ))}
          </div>
        ) : (
          /* Final Loaded Grid */
          <div
            className="
              grid 
              grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4 
              gap-4 md:gap-6
            "
          >
            {displayImages.map((image) => (
              <div
                key={image.id}
                className="
                  relative group cursor-pointer overflow-hidden 
                  rounded-lg bg-white border border-teal-100 
                  shadow-sm hover:shadow-lg 
                  transition-all
                "
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="
                    w-full h-full object-cover aspect-square
                    group-hover:scale-105 transition-transform duration-500
                  "
                />

                {/* Hover Overlay Details */}
                <div
                  className="
                    absolute inset-0 bg-black/0 
                    group-hover:bg-black/50 
                    transition-all duration-300
                    flex items-end justify-start
                    p-4
                  "
                >
                  <div
                    className="
                      opacity-0 group-hover:opacity-100 
                      transition-all duration-300
                    "
                  >
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                      <ImageSearchIcon className="text-white text-xl" />
                      {image.title}
                    </h3>

                    {image.description && (
                      <p className="text-gray-200 text-sm mt-1 leading-snug">
                        {image.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
