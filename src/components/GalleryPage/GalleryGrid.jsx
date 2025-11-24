"use client"

import { useState, useEffect } from "react"
import { ImageIcon } from "lucide-react"
import GallerySkeleton from "../skeletons/GallerySkeleton"

export default function GalleryGrid() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    fetchGallery()
  }, [])

  const fetchGallery = async () => {
    try {
      const res = await fetch("/api/gallery")
      const data = await res.json()
      setImages(data.images || [])
    } catch (error) {
      console.log("[v0] Error fetching gallery:", error)
      setImages(placeholderImages)
    } finally {
      setLoading(false)
    }
  }

  const placeholderImages = [
    {
      id: 1,
      url: "/placeholder.svg?key=massage-spa-relaxation",
      title: "Relaxation Room",
      description: "Our peaceful relaxation treatment area",
    },
    {
      id: 2,
      url: "/placeholder.svg?key=massage-therapy-bed",
      title: "Treatment Room",
      description: "Professional massage therapy treatment space",
    },
    {
      id: 3,
      url: "/placeholder.svg?key=spa-aromatherapy",
      title: "Aromatherapy Setup",
      description: "Therapeutic essential oils and ambiance",
    },
    {
      id: 4,
      url: "/placeholder.svg?key=hot-stone-massage",
      title: "Hot Stone Area",
      description: "Specialized hot stone therapy space",
    },
    {
      id: 5,
      url: "/placeholder.svg?key=relaxation-lounge",
      title: "Relaxation Lounge",
      description: "Comfortable waiting and relaxation area",
    },
    {
      id: 6,
      url: "/placeholder.svg?key=spa-entrance",
      title: "Welcoming Entrance",
      description: "Professional and inviting spa entrance",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <GallerySkeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(images.length > 0 ? images : placeholderImages).map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-cream shadow-md hover:shadow-lg transition-all"
                >
                  <img
                    src={image.url || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <ImageIcon className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-cream font-serif font-bold text-lg">{image.title}</h3>
                    {image.description && <p className="text-warm-beige text-sm mt-1">{image.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.url || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-cream text-2xl font-serif font-bold mb-2">{selectedImage.title}</h3>
                {selectedImage.description && <p className="text-warm-beige text-lg">{selectedImage.description}</p>}
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="mt-6 w-full bg-accent-gold text-charcoal py-3 rounded-lg font-semibold hover:bg-warm-beige transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
