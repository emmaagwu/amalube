'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'

interface ImageCarouselProps {
  images: string[]
  caption?: {
    title: string
    description?: string
  }
  autoplaySpeed?: number  // in milliseconds
  enableLightbox?: boolean
}

export default function ImageCarousel({
  images,
  caption,
  autoplaySpeed = 2000,
  enableLightbox = true,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [openImage, setOpenImage] = useState<string | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = container.scrollWidth / images.length
      container.scrollTo({ left: scrollAmount * index, behavior: 'smooth' })
    }
  }

  const next = () => {
    const newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const prev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  useEffect(() => {
    if (!autoplaySpeed) return

    intervalRef.current = setInterval(() => {
      next()
    }, autoplaySpeed)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [currentIndex, autoplaySpeed, next])


  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {caption && (
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{caption.title}</h2>
            {caption.description && <p className="text-gray-600">{caption.description}</p>}
          </motion.div>
        )}

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
          </button>

          <div
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-8"
            ref={scrollContainerRef}
          >
            {images.map((img, i) => {
              const imageContent = (
                <motion.div
                  key={i}
                  className="flex-shrink-0 w-72 h-48 relative rounded-xl overflow-hidden shadow-md cursor-pointer snap-start"
                  whileHover={{ scale: 1.03 }}
                >
                  <Image
                    src={img}
                    alt={`Image ${i + 1}`}
                    fill
                    className="object-cover"
                    onClick={() => enableLightbox && setOpenImage(img)}
                  />
                </motion.div>
              )

              return enableLightbox ? (
                <Dialog.Root key={i}>
                  <Dialog.Trigger asChild>
                    {imageContent}
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay
                      className="fixed inset-0 bg-black bg-opacity-80 z-40"
                      onClick={() => setOpenImage(null)}
                    />
                    <Dialog.Content className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="relative w-full max-w-4xl h-[80vh]">
                        {openImage && (
                          <Image
                            src={openImage}
                            alt="Full View"
                            fill
                            className="object-contain rounded-lg"
                          />
                        )}
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              ) : (
                imageContent
              )
            })}
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
