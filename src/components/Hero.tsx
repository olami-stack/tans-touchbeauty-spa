import { motion } from 'motion/react';
import Counter from './Counter.tsx';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section className="relative w-full min-h-[92vh] flex items-center pt-28 pb-20 sm:pb-28 px-6 sm:px-10 overflow-hidden text-cream border-b border-gold/10">
      {/* Immersive Background Image covering the entire section */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/immersive_nigerian_lady_spa_1783637278539.jpg"
          alt="Luxury Spa Sanctuary"
          className="w-full h-full object-cover object-center scale-[1.01]"
          referrerPolicy="no-referrer"
        />
        {/* Multidirectional Gradients for flawless text legibility and aesthetic richness */}
        {/* Left-to-right gradient for text backing */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#120E0A] via-[#120E0A]/85 to-transparent z-10"></div>
        {/* Bottom-to-top gradient to blend with the subsequent page sections */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120E0A] via-[#120E0A]/40 to-[#120E0A]/10 z-10"></div>
      </div>

      {/* Subtle editorial decorative circular lines */}
      <div className="hidden lg:block absolute top-28 right-[8%] w-[550px] h-[550px] rounded-full border border-gold/5 pointer-events-none z-10"></div>
      <div className="hidden lg:block absolute bottom-10 left-[4%] w-[350px] h-[350px] rounded-full border border-gold/5 pointer-events-none z-10 animate-pulse" style={{ animationDuration: '10s' }}></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto w-full z-20">
        <div className="max-w-2xl text-left">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Elegant Location Pill */}
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120E0A]/60 backdrop-blur-md text-gold font-sans text-[10px] font-bold tracking-widest uppercase mb-8 border border-gold/15"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping"></span>
              Victoria Island, Lagos
            </motion.span>

            {/* Headline matching user's exact reference style */}
            <motion.h1
              variants={itemVariants}
              id="hero-headline"
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#FDFCF7] leading-[1.05] tracking-tight mb-8"
            >
              Redefine <br />
              <span className="italic font-serif text-gold font-light">Relaxation</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              variants={itemVariants}
              id="hero-subline"
              className="font-sans text-sm sm:text-base text-[#DFD5C6]/90 max-w-lg leading-relaxed mb-10 tracking-wide"
            >
              Rated <span className="font-semibold text-gold"><Counter value={4.9} decimals={1} suffix="★" /></span> by{' '}
              <span className="underline decoration-gold decoration-2 text-cream"><Counter value={130} suffix="+" /> happy clients</span>. Lagos' premier 24-hour sanctuary. Indulge in bespoke luxury, round-the-clock, at our flagship VI retreat.
            </motion.p>

            {/* Cream Pill CTA Buttons exactly like reference */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/2348163917761?text=Hello%20Tan%27s%20Touch!%20I%27d%20like%20to%20book%20a%20session"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-hero-wa"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#F5EFE4] text-[#120E0A] font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-white/10 hover:-translate-y-0.5"
              >
                Book a Session
              </a>

              <a
                href="#services"
                id="btn-hero-services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gold/40 text-cream font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-gold/10 active:scale-95 transition-all duration-300"
              >
                View Services
              </a>
            </motion.div>

            {/* Small Elegant Slogan */}
            <motion.span
              variants={itemVariants}
              className="text-[11px] italic text-[#DFD5C6]/60 tracking-widest font-sans mt-8 uppercase"
            >
              "Everyone deserves the touch."
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

