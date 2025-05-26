"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FilterList, Close } from "@mui/icons-material"
import { galleryData, categories } from "@/Components/Gallery/galleryData"

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages =
    selectedCategory === "All" ? galleryData : galleryData.filter((item) => item.category === selectedCategory)

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Gallery</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our peaceful therapy spaces and witness the healing environment we have created for your wellness
              journey.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <FilterList className="text-teal-600" />
            <span className="text-gray-700 font-medium">Filter by Category:</span>
          </div>
        </motion.div>

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

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
                onClick={() => openModal(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                <div className="p-4">
                  <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
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

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
              >
                <Close className="text-gray-700" />
              </button>

              <div className="relative h-96 md:h-[500px]">
                <Image
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded-full mb-3">
                  {selectedImage.category}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h2>
                <p className="text-gray-600">
                  Experience the tranquility and healing environment of Twin Brothers Therapy.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <div className="bg-teal-600 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Our Healing Touch?</h2>
            <p className="text-xl mb-8 text-teal-100">
              Book your personalized therapy session and discover the path to wellness.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Book Your Session Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
