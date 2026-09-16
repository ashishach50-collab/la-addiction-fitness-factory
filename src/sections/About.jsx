import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { number: 4.9, label: 'Google Rating', symbol: '★', isDecimal: true },
    { number: 73, label: 'Reviews', symbol: '+', isDecimal: false },
    { number: 5, label: 'Opens at 5 AM', symbol: ' AM', isDecimal: false },
    { number: 100, label: 'Fitness Focus', symbol: '%', isDecimal: false },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="section bg-brand-charcoal/50">
      <div className="container-max">
        {/* Heading */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            More Than A Gym.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-light">
              It's Your Next Level.
            </span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            La Addiction Fitness Factory provides a motivating and professionally maintained environment for people serious about fitness. Our spacious facility combines modern equipment with expert guidance to help you achieve your goals.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {[
                { title: 'Modern Equipment', desc: 'Wide variety of fitness equipment for strength, conditioning and cardio' },
                { title: 'Professional Trainers', desc: 'Experienced staff who guide members safely and effectively' },
                { title: 'Spacious Environment', desc: 'Clean, well-maintained workout areas designed for comfort' },
                { title: 'Motivating Atmosphere', desc: 'Community focused on support and mutual achievement' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-1 h-20 bg-gradient-to-b from-brand-accent to-transparent rounded-full" />
                  <div>
                    <h4 className="font-display font-bold mb-2 text-lg">{item.title}</h4>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            className="relative h-96 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 via-brand-charcoal to-brand-charcoal flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-4">🏋️</div>
                <p className="text-white/40">Professional Fitness Environment</p>
              </div>
            </div>
            <motion.div
              className="absolute inset-0 border border-brand-accent/30 rounded-2xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="glass p-8 rounded-xl text-center group hover:border-brand-accent/50"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">
                <CountUp
                  end={stat.number}
                  duration={2.5}
                  suffix={stat.symbol}
                  isDecimal={stat.isDecimal}
                />
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Counter component
function CountUp({ end, duration, suffix = '', isDecimal = false }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationId

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      if (isDecimal) {
        setCount((progress * end).toFixed(1))
      } else {
        setCount(Math.floor(progress * end))
      }

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [end, duration, isDecimal])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}
