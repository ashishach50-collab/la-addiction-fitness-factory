import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Shiwalik Club, Bhagat Singh Nagar, Rupnagar, Punjab 140001',
      link: 'https://maps.app.goo.gl/MuXQW1pQMwofvgk27',
      linkText: 'Get Directions',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '090410 01005',
      link: 'tel:09041001005',
      linkText: 'Call Now',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Fri: 5:00 AM - 11:00 PM\nSat-Sun: 5:00 AM - 10:00 PM',
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
    <section id="contact" className="section bg-brand-charcoal/50">
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
            Get In Touch
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Visit us in Rupnagar or reach out with any questions about membership or training programs.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactInfo.map((info, i) => {
            const Icon = info.icon
            return (
              <motion.div
                key={i}
                className="glass p-8 rounded-xl border border-white/10"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <Icon size={32} className="text-brand-accent mb-4" />
                <h3 className="font-display font-bold text-lg mb-3">{info.label}</h3>
                <p className="text-white/70 mb-6 whitespace-pre-line">
                  {info.value}
                </p>
                {info.link && (
                  <motion.a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-accent-light transition-colors text-sm font-semibold"
                    whileHover={{ gap: 8 }}
                  >
                    {info.linkText}
                    <ExternalLink size={16} />
                  </motion.a>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Map Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-brand-charcoal flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl mb-4">📍</div>
              <h3 className="font-display font-bold text-2xl mb-2">LA ADDICTION Fitness Factory</h3>
              <p className="text-white/60 mb-6">Rupnagar, Punjab</p>
              <motion.a
                href="https://maps.app.goo.gl/MuXQW1pQMwofvgk27"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Open in Google Maps
                <ExternalLink size={18} />
              </motion.a>
            </div>
          </div>

          {/* Border animation */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-brand-accent pointer-events-none"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Quick Contact CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70 text-lg mb-6">
            Questions about membership or training programs?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:09041001005"
              className="btn btn-primary inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={18} />
              Call Now
            </motion.a>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enquire for Membership
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
