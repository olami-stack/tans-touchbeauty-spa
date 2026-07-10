import { motion } from 'motion/react';

const MEMBERSHIPS = [
  {
    tierName: 'Gold Membership',
    subtitle: 'Essential Luxury',
    features: [
      'Priority booking inside standard hours',
      '10% exclusive member rates on all facials',
      'Monthly complimentary aromatherapy add-on',
    ],
  },
  {
    tierName: 'Diamond Membership',
    subtitle: 'Ultimate Sanctuary',
    features: [
      'Priority booking any hour (24/7 access)',
      '15% exclusive member rates on all services',
      'Monthly complimentary hot stone add-on',
    ],
    featured: true,
  },
  {
    tierName: 'Platinum Membership',
    subtitle: 'Elite Distinction',
    features: [
      'VIP home & yacht priority booking any hour',
      '20% exclusive member rates on all treatments',
      'Monthly complimentary Hammam & massage upgrade',
    ],
  },
];

export default function Membership() {
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
    <section id="membership" className="w-full bg-[#120E0A] py-24 px-5 border-t border-gold/10 text-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-3">Elevate Your Ritual</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[0.15em] uppercase text-cream mb-5">
            Membership Waitlist
          </h2>
          <p className="font-sans text-sm sm:text-base text-cream-dark/80 leading-relaxed">
            Indulge in unmatched round-the-clock restoration. Secure your place on our exclusive waitlist today to unlock priority privileges.
          </p>
        </div>

        {/* Membership Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-6"
        >
          {MEMBERSHIPS.map((membership, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`premium-card rounded-3xl p-8 flex flex-col justify-between shadow-xl relative transition-all duration-300 ${
                membership.featured
                  ? 'bg-[#1C1612] border-2 border-gold transform scale-100 md:scale-[1.03] z-10 shadow-gold/5'
                  : 'bg-[#18130E]/80 border border-gold/10'
              }`}
            >
              {membership.featured && (
                <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-gold text-cream text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}
              <div>
                <span
                  className={`text-[10px] uppercase font-bold tracking-widest block mb-2 ${
                    membership.featured ? 'text-gold' : 'text-cream-dark/50'
                  }`}
                >
                  {membership.subtitle}
                </span>
                <h3 className="font-serif text-2xl font-bold mb-6 text-cream">
                  {membership.tierName}
                </h3>

                <ul className="space-y-4 mb-8">
                  {membership.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-cream-dark/85">
                      <svg
                        className="w-4 h-4 mt-1 flex-shrink-0 text-gold"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className={membership.featured ? 'font-medium text-cream' : ''}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/2348163917761?text=Hello!%20I%27d%20like%20to%20join%20the%20Tan%27s%20Touch%20membership%20waitlist"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center py-4 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] active:scale-95 ${
                  membership.featured
                    ? 'bg-gold text-cream hover:bg-gold-light shadow-lg'
                    : 'border-2 border-gold text-gold hover:bg-gold hover:text-cream'
                }`}
              >
                Join the Waitlist
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
