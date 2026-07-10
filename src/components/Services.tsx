import { motion } from 'motion/react';

const SERVICES = [
  {
    title: 'Body Massage',
    duration: '60-90 Mins',
    description: 'Deep tissue, Swedish & hot stone.',
    image: '/src/assets/images/body_massage_card_1783627580683.jpg',
    whatsappMessage: "Hello Tan's Touch! I'd like to book a Body Massage session",
  },
  {
    title: 'Advanced & LED Facials',
    duration: '75 Mins',
    description: 'Glow-restoring treatments with LED light therapy.',
    image: '/src/assets/images/led_facial_card_1783627593297.jpg',
    whatsappMessage: "Hello Tan's Touch! I'd like to book an Advanced & LED Facials session",
  },
  {
    title: 'Hammam / Turkish Bath',
    duration: '90 Mins',
    description: 'Full-body detox, exfoliation & steam ritual.',
    image: '/src/assets/images/hammam_spa_card_1783627605364.jpg',
    whatsappMessage: "Hello Tan's Touch! I'd like to book a Hammam / Turkish Bath session",
  },
  {
    title: 'Waxing & Body Exfoliation',
    duration: '45 Mins',
    description: 'Smooth, professional, painless as possible.',
    image: '/src/assets/images/waxing_exfoliation_1783627617797.jpg',
    whatsappMessage: "Hello Tan's Touch! I'd like to book a Waxing & Body Exfoliation session",
  },
  {
    title: 'Hands & Feet Renewal',
    duration: '60 Mins',
    description: 'Manicure, Pedicure & Foot Detox treatments.',
    image: '/src/assets/images/manicure_pedicure_1783627627783.jpg',
    whatsappMessage: "Hello Tan's Touch! I'd like to book a Manicure, Pedicure & Foot Detox session",
  },
  {
    title: 'Teeth Whitening',
    duration: '45 Mins',
    description: 'Brighten your smile in one professional session.',
    image: '/src/assets/images/teeth_whitening_1783627637436.jpg',
    whatsappMessage: "Hello Tan's Touch! I'd like to book a Teeth Whitening session",
  },
  {
    title: 'Bespoke Body Polish',
    duration: '60 Mins',
    description: 'Skin-refining exfoliation for full-body radiance.',
    image: '/src/assets/images/bespoke_body_polish_1783627649827.jpg',
    whatsappMessage: "Hello Tan's Touch! I'd like to book a Bespoke Body Polish session",
    isCentered: true,
  },
];

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 20 },
    },
  };

  return (
    <section id="services" className="w-full bg-[#DFD5C6] py-24 px-5 border-b border-brown/10 text-brown">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-3">Our Menu</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brown mb-5 uppercase tracking-wide">
            Treatments & Rituals
          </h2>
          <p className="font-sans text-sm sm:text-base text-brown/80 leading-relaxed">
            Carefully curated therapies designed to heal, refresh, and restore. Book individual services directly on WhatsApp for instant 24-hour reservation confirmation.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-20"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`premium-card bg-[#F9F6F0] border border-brown/10 rounded-[1.5rem] p-5 sm:p-6 md:p-7 flex flex-col justify-between h-full group ${
                service.isCentered
                  ? 'sm:col-span-2 sm:max-w-md sm:mx-auto lg:col-span-1 lg:col-start-2 w-full'
                  : ''
              }`}
            >
              <div>
                {/* Image Block with pristine rounded top */}
                <div className="aspect-[16/11] w-full rounded-2xl overflow-hidden mb-6 border border-brown/5 relative group-hover:shadow-md transition-all duration-300">
                  <motion.img
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-5%' }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Service Title */}
                <h3 className="font-serif text-xl font-semibold text-brown mb-2 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                {/* Duration */}
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-4">{service.duration}</p>
                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-brown/70 leading-relaxed mb-6">{service.description}</p>
              </div>
              {/* WhatsApp Link */}
              <a
                href={`https://wa.me/2348163917761?text=${encodeURIComponent(service.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-gold uppercase tracking-widest hover:text-gold-light hover:translate-x-1.5 transition-all duration-300"
              >
                Book Treatment &rarr;
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* FULL-WIDTH "HOME SERVICE" BANNER - Styled with premium deep dark background for extreme visual contrast */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          id="home-service-banner"
          className="relative bg-[#120E0A] text-cream rounded-[2rem] overflow-hidden p-8 sm:p-14 lg:p-20 border border-gold/15 shadow-2xl"
        >
          {/* Background image with premium dark overlay */}
          <img
            src="/src/assets/images/home_service_wide_1783627662996.jpg"
            alt="Luxury Home Service"
            className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none z-0"
            referrerPolicy="no-referrer"
          />
          {/* Abstract glowing background decor for premium feel */}
          <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none z-0"></div>
          <div className="absolute -left-24 -top-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none z-0"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 z-10">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold/20 text-gold font-sans text-xs font-bold uppercase tracking-widest mb-5 border border-gold/30">
                Luxury Redefined
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4 leading-tight">
                Can't come to us? <br className="hidden sm:inline" />
                <span className="italic font-serif text-gold font-semibold">We come to you</span>
              </h3>
              <p className="font-sans text-sm sm:text-base text-cream-dark/85 leading-relaxed">
                Experience signature spa treatments in the complete privacy of your home, hotel, yacht, or luxury residence. Beautiful relaxation, delivered anywhere in Lagos.
              </p>
            </div>

            <div className="flex-shrink-0 w-full lg:w-auto text-center">
              <a
                href="https://wa.me/2348163917761?text=Hello%20Tan%27s%20Touch!%20I%27d%20like%20to%20book%20a%20Home%20Service"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-banner-home"
                className="inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-full bg-gold text-cream font-sans text-sm font-semibold tracking-wider hover:bg-gold-light active:scale-95 transition-all duration-300 shadow-lg hover:shadow-gold/10 hover:-translate-y-1 hover:scale-[1.03]"
              >
                Book Home Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
