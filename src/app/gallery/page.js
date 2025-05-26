"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FilterList, Close, ArrowBackIos, ArrowForwardIos, TouchApp } from "@mui/icons-material"
import { galleryData, categories } from "@/Components/Gallery/galleryData"

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [showCategoryMenu, setShowCategoryMenu] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const filteredImages =
    selectedCategory === "All" ? galleryData : galleryData.filter((item) => item.category === selectedCategory)

  const openModal = (image, index) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
    setSelectedImage(filteredImages[prevIndex])
  }

  // Touch handlers for swipe gestures
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextImage()
    }
    if (isRightSwipe) {
      prevImage()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile-Optimized Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">Our Gallery</h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore our peaceful therapy spaces and witness the healing environment we have created for your wellness
              journey.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mobile-First Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        {/* Mobile Category Dropdown */}
        {isMobile ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <button
              onClick={() => setShowCategoryMenu(!showCategoryMenu)}
              className="w-full bg-white border-2 border-teal-200 rounded-xl px-4 py-4 flex items-center justify-between text-left shadow-sm"
            >
              <div className="flex items-center gap-3">
                <FilterList className="text-teal-600" />
                <span className="font-medium text-gray-800">{selectedCategory}</span>
              </div>
              <motion.div animate={{ rotate: showCategoryMenu ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ArrowBackIos className="text-gray-400 transform rotate-90" />
              </motion.div>
            </button>

            <AnimatePresence>
              {showCategoryMenu && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white border-2 border-teal-200 border-t-0 rounded-b-xl shadow-lg overflow-hidden"
                >
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedCategory(category)
                        setShowCategoryMenu(false)
                      }}
                      className={`w-full px-4 py-4 text-left border-b border-gray-100 last:border-b-0 transition-colors ${
                        selectedCategory === category
                          ? "bg-teal-50 text-teal-700 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Desktop Category Pills */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-md"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Mobile-Optimized Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence>
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group active:shadow-xl transition-shadow duration-200"
                onClick={() => openModal(item, index)}
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index < 4}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Mobile Touch Indicator */}
                  {isMobile && (
                    <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2">
                      <TouchApp className="text-teal-600 text-sm" />
                    </div>
                  )}
                </div>

                <div className="p-4 md:p-5">
                  <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found for this category.</p>
          </motion.div>
        )}
      </div>

      {/* Enhanced Mobile Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full md:max-w-4xl md:max-h-[90vh] md:h-auto bg-white md:rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 md:p-2 md:bg-white md:bg-opacity-90 md:hover:bg-opacity-100 md:text-gray-700 transition-all duration-200"
              >
                <Close className="text-xl md:text-base" />
              </button>

              {/* Navigation Arrows */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 md:p-2 transition-all duration-200"
                  >
                    <ArrowBackIos className="text-xl md:text-base" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 md:p-2 transition-all duration-200"
                  >
                    <ArrowForwardIos className="text-xl md:text-base" />
                  </button>
                </>
              )}

              {/* Image Container */}
              <div className="relative h-[60vh] md:h-[500px] bg-black">
                <Image
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Image Info */}
              <div className="p-4 md:p-6 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded-full">
                    {selectedImage.category}
                  </div>
                  {filteredImages.length > 1 && (
                    <span className="text-sm text-gray-500">
                      {currentImageIndex + 1} of {filteredImages.length}
                    </span>
                  )}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Experience the tranquility and healing environment of Twin Brothers Therapy.
                </p>

                {/* Mobile Swipe Hint */}
                {isMobile && filteredImages.length > 1 && (
                  <div className="flex items-center justify-center mt-4 text-gray-400 text-sm">
                    <TouchApp className="mr-2 text-base" />
                    Swipe left or right to navigate
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced CTA Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12 md:py-16 mt-8 md:mt-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Experience Our Healing Touch?</h2>
            <p className="text-lg md:text-xl mb-8 text-teal-100 leading-relaxed">
              Book your personalized therapy session and discover the path to wellness.
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg w-full sm:w-auto"
            >
              Book Your Session Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
