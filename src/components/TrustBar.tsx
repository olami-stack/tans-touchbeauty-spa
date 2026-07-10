import { motion } from 'motion/react';
import Counter from './Counter.tsx';

export default function TrustBar() {
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="bg-[#18130E] border-y border-gold/10 py-8 px-5 text-cream">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around gap-6 text-center"
      >
        {/* Trust Item 1: Open 24 Hours */}
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold text-cream text-xs font-bold uppercase tracking-wider shadow-md hover:bg-gold-light transition-all duration-300">
            <svg
              className="w-3.5 h-3.5 animate-spin"
              style={{ animationDuration: '8s' }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Open 24 Hours
          </span>
        </motion.div>

        {/* Divider (Desktop Only) */}
        <span className="hidden md:inline text-gold/30 font-serif text-lg">•</span>

        {/* Trust Item 3: Rating */}
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="font-sans text-sm font-semibold text-cream-dark tracking-wide">
            <Counter value={4.9} decimals={1} suffix="★" /> Google Rating
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
