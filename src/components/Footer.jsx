import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function Footer() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-brand-charcoal border-t border-white/10">
      <div className="container-max py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="font-display font-bold text-2xl mb-2">
              LA ADDICTION
            </div>
            <div className="text-xs tracking-widest text-brand-accent uppercase mb-4">
              Fitness Factory
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium fitness, expert guidance and a motivating environment designed to help you reach your goals.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Facilities', 'Training', 'Gallery', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 hover:text-brand-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:09041001005"
                className="flex items-center gap-3 text-white/60 hover:text-brand-accent transition-colors text-sm group"
              >
                <Phone size={16} className="flex-shrink-0" />
                <span>090410 01005</span>
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>
                  Shiwalik Club,
                  <br />
                  Bhagat Singh Nagar,
                  <br />
                  Rupnagar, Punjab 140001
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Clock size={16} className="flex-shrink-0" />
                <span>Opens at 5:00 AM</span>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold mb-6">Hours</h4>
            <div className="space-y-2 text-white/60 text-sm">
              <p>Monday - Friday</p>
              <p className="text-brand-accent">5:00 AM - 11:00 PM</p>
              <p className="mt-4">Saturday - Sunday</p>
              <p className="text-brand-accent">5:00 AM - 10:00 PM</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2026 La Addiction Fitness Factory. All rights reserved.
            </p>
            <div className="flex gap-6 text-white/40 text-sm">
              <a href="#" className="hover:text-brand-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Terms</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
