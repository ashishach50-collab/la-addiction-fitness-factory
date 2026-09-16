import { motion } from 'framer-motion'
import { Dumbbell, Users, Waves, Yoga, Zap, Sparkles } from 'lucide-react'

export default function Facilities() {
  const facilities = [
    {
      icon: Dumbbell,
      title: 'Modern Equipment',
      description: 'Wide variety of modern fitness equipment for strength and conditioning.',
      emoji: '🏋️'
    },
    {
      icon: Users,
      title: 'Professional Trainers',
      description: 'Experienced and supportive trainers who help members train safely and effectively.',
      emoji: '👨‍🏫'
    },
    {
      icon: Waves,
      title: 'Swimming Pool',
      description: 'Dedicated swimming facility for aquatic fitness and training.',
      emoji: '🏊'
    },
    {
      icon: Yoga,
      title: 'Yoga Classes',
      description: 'Dedicated yoga sessions for flexibility, balance and wellness.',
      emoji: '🧘'
    },
    {
      icon: Zap,
      title: 'Aerobics',
      description: 'Energetic aerobic workouts designed to keep members active and motivated.',
      emoji: '⚡'
    },
    {
      icon: Sparkles,
      title: 'Spacious Environment',
      description: 'Clean, spacious and well-maintained workout areas.',
      emoji: '✨'
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
    <section id="facilities" className="section">
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
            World-Class
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-light">
              Facilities
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to train hard, recover fast, and achieve your fitness goals.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {facilities.map((facility, i) => {
            const Icon = facility.icon
            return (
              <motion.div
                key={i}
                className="group accent-glow"
                variants={itemVariants}
              >
                <motion.div
                  className="glass p-8 rounded-xl h-full border border-white/10 transition-all duration-300"
                  whileHover={{
                    y: -10,
                    borderColor: 'rgba(255, 68, 68, 0.5)',
                    backgroundColor: 'rgba(255, 68, 68, 0.05)',
                  }}
                >
                  {/* Icon + Emoji */}
                  <div className="mb-6 flex items-start justify-between">
                    <div className="text-5xl">{facility.emoji}</div>
                    <Icon
                      size={24}
                      className="text-brand-accent opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl mb-3">
                    {facility.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed mb-6">
                    {facility.description}
                  </p>

                  {/* Arrow */}
                  <motion.div
                    className="flex items-center gap-2 text-brand-accent text-sm font-semibold"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Explore More
                    <span>→</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
