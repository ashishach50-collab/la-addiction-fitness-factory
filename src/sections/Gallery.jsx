import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const galleries = [
    { category: 'Gym', emoji: '🏋️', images: ['Gym 1', 'Gym 2', 'Gym 3'] },
    { category: 'Equipment', emoji: '⚙️', images: ['Equipment 1', 'Equipment 2'] },
    { category: 'Training', emoji: '👨‍🏫', images: ['Training 1', 'Training 2'] },
    { category: 'Facilities', emoji: '🏊', images: ['Pool', 'Yoga Studio'] },
    { category: 'Community', emoji: '👥', images: ['Members 1', 'Members 2'] },
  ]

  const allImages = galleries.flatMap((g, gIdx) =>
    g.images.map((img, iIdx) => ({
      title: `${g.category}: ${img}`,
      emoji: g.emoji,
      category: g.category,
      fullIdx: galleries.slice(0, gIdx).reduce((acc, x) => acc + x.images.length, 0) + iIdx,
    }))
  )

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="gallery" className="section bg-brand-charcoal/50">
      <div className="container-max">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-light">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore our premium fitness facility, equipment, and community.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleries.map((gallery, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              variants={itemVariants}
              onClick={() => setSelectedIndex(0)}
              whileHover={{ scale: 1.05 }}
            >
              {/* Category Image */}
              <div className="relative h-48 bg-gradient-to-br from-brand-accent/20 to-brand-charcoal flex items-center justify-center overflow-hidden">
                <motion.div
                  className="text-7xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {gallery.emoji}
                </motion.div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all flex items-end p-4 opacity-0 group-hover:opacity-100">
                <div>
                  <h3 className="font-display font-bold text-lg">{gallery.category}</h3>
                  <p className="text-white/70 text-sm">{gallery.images.length} images</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Masonry Grid - All Images */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {allImages.map((image, i) => (
            <motion.div
              key={i}
              className="group relative h-64 overflow-hidden rounded-lg cursor-pointer"
              variants={itemVariants}
              onClick={() => setSelectedIndex(i)}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/30 to-brand-charcoal flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">{image.emoji}</div>
                  <p className="text-white/60 text-sm">{image.title}</p>
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                whileHover={{ opacity: 1 }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">{image.emoji}</div>
                  <p className="text-white font-semibold">{image.category}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
            >
              <motion.div
                className="relative w-full max-w-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image */}
                <div className="relative bg-brand-charcoal rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                  <div className="text-8xl">{allImages[selectedIndex].emoji}</div>
                </div>

                {/* Image Info */}
                <div className="mt-4 text-center">
                  <h3 className="font-display font-bold text-2xl mb-2">
                    {allImages[selectedIndex].title}
                  </h3>
                  <p className="text-white/60">
                    {selectedIndex + 1} / {allImages.length}
                  </p>
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-4 mt-6">
                  <motion.button
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrev}
                  >
                    <ChevronLeft size={20} />
                  </motion.button>
                  <motion.button
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNext}
                  >
                    <ChevronRight size={20} />
                  </motion.button>
                </div>

                {/* Close Button */}
                <motion.button
                  className="absolute -top-12 right-0 text-white hover:text-brand-accent transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedIndex(null)}
                >
                  <X size={32} />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
