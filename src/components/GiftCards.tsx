import { motion } from 'motion/react';

export default function GiftCards() {
  return (
    <section id="gift-cards" className="w-full bg-[#F9F6F0] py-24 px-5 border-b border-brown/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          id="gift-cards-banner"
          className="relative bg-[#120E0A] text-cream rounded-[2rem] overflow-hidden p-8 sm:p-14 lg:p-20 border border-gold/15 shadow-2xl"
        >
          {/* Background image with premium dark overlay */}
          <img
            src="/src/assets/images/membership_gift_1783627673810.jpg"
            alt="Gift Cards"
            className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none z-0"
            referrerPolicy="no-referrer"
          />
          {/* Decorative glowing gradient shapes */}
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none z-0"></div>
          <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none z-0"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 z-10">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold/20 text-gold font-sans text-xs font-bold uppercase tracking-widest mb-5 border border-gold/30">
                Gift of Recovery
              </span>
              <h3 className="font-serif italic font-semibold text-3xl sm:text-4xl md:text-5xl text-gold mb-4 leading-tight">
                Give the gift of relaxation
              </h3>
              <p className="font-sans text-sm sm:text-base text-cream-dark/85 leading-relaxed">
                Tan's Touch gift cards — perfect for birthdays, anniversaries, and "just because" moments. Share the touch of luxury with friends, family, and loved ones.
              </p>
            </div>

            <div className="flex-shrink-0 w-full lg:w-auto text-center">
              <a
                href="https://wa.me/2348163917761?text=Hello!%20I%27d%20like%20to%20buy%20a%20Tan%27s%20Touch%20gift%20card"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-full bg-gold text-cream font-sans text-sm font-semibold tracking-wider hover:bg-gold-light active:scale-95 transition-all duration-300 shadow-lg hover:-translate-y-1 hover:scale-[1.03]"
              >
                Ask about Gift Cards
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
