import { motion } from 'motion/react';

export default function WhyUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 20 },
    },
  };

  return (
    <section id="why-us" className="w-full bg-[#F9F6F0] border-y border-brown/5 py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-3">The Sanctuary Difference</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[0.1em] uppercase text-brown">
            Why Tan's Touch
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14"
        >
          {/* Point 1: Open Round the Clock */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center px-4 group">
            <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6 border border-gold/10 group-hover:bg-gold group-hover:text-cream group-hover:scale-110 transition-all duration-300">
              {/* 24 Hours Clock SVG */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-serif text-xl font-semibold text-brown mb-3 uppercase tracking-wide">Open Round the Clock</h4>
            <p className="font-sans text-sm text-brown/70 leading-relaxed">
              Your recovery matches your schedule. Seamlessly transition into pure calm at any hour of the day or night.
            </p>
          </motion.div>

          {/* Point 2: Certified Professional Therapists */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center px-4 group">
            <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6 border border-gold/10 group-hover:bg-gold group-hover:text-cream group-hover:scale-110 transition-all duration-300">
              {/* Certified Therapists SVG */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-serif text-xl font-semibold text-brown mb-3 uppercase tracking-wide">Certified Therapists</h4>
            <p className="font-sans text-sm text-brown/70 leading-relaxed">
              Our master aesthetic and massage specialists are exceptionally trained to unlock physical tension and restore alignment.
            </p>
          </motion.div>

          {/* Point 3: Serene Private Rooms */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center px-4 group">
            <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6 border border-gold/10 group-hover:bg-gold group-hover:text-cream group-hover:scale-110 transition-all duration-300">
              {/* Serene Rooms SVG */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <h4 className="font-serif text-xl font-semibold text-brown mb-3 uppercase tracking-wide">Serene Private Rooms</h4>
            <p className="font-sans text-sm text-brown/70 leading-relaxed">
              Individual suite retreats designed with acoustic dampening, soothing ambient aromatherapy, and luxurious lighting.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
