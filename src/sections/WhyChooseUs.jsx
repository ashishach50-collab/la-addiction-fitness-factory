import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    'Modern Equipment',
    'Professional Guidance',
    'Clean & Spacious Facility',
    'Motivating Atmosphere',
    'Multiple Fitness Activities',
    'Supportive Staff',
    'Convenient Early Opening',
    'Fitness-Focused Community',
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="why-us" className="section">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Why
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-light">
                LA ADDICTION?
              </span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              We've built more than a gym—we've created a community of ambitious fitness enthusiasts committed to excellence, growth, and mutual support.
            </p>

            {/* Features List */}
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 group"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Check size={18} className="text-brand-black" />
                  </motion.div>
                  <span className="text-white/80 font-medium text-lg group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Main card */}
            <motion.div
              className="glass p-10 rounded-2xl border border-white/20 relative z-10"
              whileHover={{ y: -10 }}
            >
              <div className="space-y-8">
                {[
                  { number: '1', title: 'State-of-the-Art', desc: 'Latest fitness equipment and technology' },
                  { number: '2', title: 'Expert Support', desc: 'Professional trainers at every step' },
                  { number: '3', title: 'Community First', desc: 'Supportive environment for all levels' },
                  { number: '4', title: 'Results Driven', desc: 'Track progress with measurable goals' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent to-brand-accent-light flex items-center justify-center font-display font-bold text-brand-black text-xl">
                      {item.number}
                    </div>
                    <div>
                      <h4 className="font-display font-bold mb-2">{item.title}</h4>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Background blur */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-accent/20 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
