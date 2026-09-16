import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Training() {
  const trainings = [
    { title: 'Strength Training', emoji: '💪', color: 'from-red-500' },
    { title: 'Muscle Building', emoji: '🏋️', color: 'from-orange-500' },
    { title: 'Fat Loss', emoji: '🔥', color: 'from-yellow-500' },
    { title: 'Functional Training', emoji: '⚙️', color: 'from-green-500' },
    { title: 'Cardio', emoji: '🏃', color: 'from-blue-500' },
    { title: 'Personal Training', emoji: '👨‍🏫', color: 'from-purple-500' },
    { title: 'Yoga', emoji: '🧘', color: 'from-pink-500' },
    { title: 'Aerobics', emoji: '⚡', color: 'from-cyan-500' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="training" className="section bg-brand-charcoal/50">
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
              Train With Purpose
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Choose your fitness path and join a community committed to excellence.
          </p>
        </motion.div>

        {/* Training Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {trainings.map((training, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-xl"
              variants={itemVariants}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${training.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
              <div className="absolute inset-0 bg-brand-black/60 group-hover:bg-brand-black/40 transition-all" />

              {/* Content */}
              <motion.div
                className="relative p-8 h-48 flex flex-col justify-between"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-5xl mb-4">{training.emoji}</div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-4">
                    {training.title}
                  </h3>
                  <motion.div
                    className="flex items-center gap-2 text-brand-accent text-sm font-semibold"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </motion.div>

              {/* Hover border */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-brand-accent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn btn-primary px-10 py-4 text-lg inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            Start Your Fitness Journey
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
