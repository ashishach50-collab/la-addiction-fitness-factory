import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-charcoal to-brand-black" />
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-brand-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, 30, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ y: [0, -30, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content */}
      <div className="container-max relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 mb-8 glass px-4 py-2 rounded-full">
              <span className="text-brand-accent font-bold">4.9★</span>
              <span className="text-sm text-white/80">73 Google Reviews</span>
            </div>

            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Build Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-light">
                Strongest Self
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Train harder. Move stronger. Become better.
            </p>

            <p className="text-white/60 mb-10 max-w-md text-lg">
              Premium fitness, expert guidance and a motivating environment designed to help you reach your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Now
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Gym
              </button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative h-96 md:h-full min-h-[500px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">💪</div>
                <p className="text-white/40 text-lg">Premium Gym Facility</p>
              </div>
            </div>
            <motion.div
              className="absolute inset-0 border border-brand-accent/30 rounded-2xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-white/40 text-sm">Scroll to explore</span>
          <ChevronDown size={20} className="text-brand-accent" />
        </motion.div>
      </div>
    </section>
  )
}
