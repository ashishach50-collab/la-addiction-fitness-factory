import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'

export default function Reviews() {
  const reviews = [
    {
      text: "Excellent gym with great trainers, modern equipment and a motivating atmosphere. One of the best fitness experiences I've had.",
      author: 'Verified Member',
      rating: 5,
    },
    {
      text: "One of the biggest gyms in town with excellent amenities. The staff is professional and the facilities are top-notch.",
      author: 'Google Reviewer',
      rating: 5,
    },
    {
      text: "Clean environment, supportive staff and excellent equipment. This is where serious fitness happens.",
      author: 'Community Member',
      rating: 5,
    },
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="reviews" className="section">
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
            Loved By Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-light">
              Community
            </span>
          </h2>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="fill-brand-accent text-brand-accent"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-3xl">4.9</div>
              <div className="text-white/60 text-sm">Based on 73 Google Reviews</div>
            </div>
          </div>
        </motion.div>

        {/* Review Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="glass p-8 rounded-xl border border-white/10 hover:border-brand-accent/50"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-brand-accent text-brand-accent"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white/80 mb-6 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-bold">{review.author}</p>
                  <p className="text-white/40 text-sm">Google Reviews</p>
                </div>
                <div className="text-brand-accent">✓</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA to Google Maps */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://maps.app.goo.gl/MuXQW1pQMwofvgk27"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Reviews on Google Maps
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
