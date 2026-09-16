import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function MembershipCTA() {
  return (
    <section className="section bg-brand-charcoal/50">
      <div className="container-max">
        <motion.div
          className="relative overflow-hidden rounded-2xl p-12 md:p-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background elements */}
          <motion.div
            className="absolute inset-0 -z-10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 via-transparent to-brand-accent/20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Ready To Level Up?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Your fitness journey starts with one decision. Join La Addiction Fitness Factory today and become part of a community dedicated to excellence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn btn-primary px-10 py-4 text-lg inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Now
                <ArrowRight size={20} />
              </motion.button>
              <motion.a
                href="tel:09041001005"
                className="btn btn-secondary px-10 py-4 text-lg inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                Call Us
              </motion.a>
            </div>
          </motion.div>

          {/* Border animation */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
            animate={{
              borderColor: ['rgba(255, 68, 68, 0.1)', 'rgba(255, 68, 68, 0.3)', 'rgba(255, 68, 68, 0.1)'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  )
}
