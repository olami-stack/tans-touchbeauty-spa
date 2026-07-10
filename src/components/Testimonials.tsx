import { motion } from 'motion/react';
import Counter from './Counter.tsx';

const REVIEWS = [
  {
    name: 'Anita O.',
    quote: '"The deep tissue massage was out of this world! It literally brings the pieces of your body together after a stressful Lagos week. This is hands down the best spa in Victoria Island."',
  },
  {
    name: 'Chidi K.',
    quote: '"Incredible Hammam session! Their certified therapists are highly professional and put you completely at ease. I left feeling completely brand new and fully glowing."',
  },
  {
    name: 'Funmi A.',
    quote: '"Being open 24/7 is a complete game-changer. Standard is top-tier: clean private rooms, serene music, and welcoming staff. Tan\'s Touch is my ultimate sanctuary in Lagos!"',
  },
];

export default function Testimonials() {
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
    <section className="w-full bg-[#F5EFE4] py-24 px-5 border-b border-brown/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-3">Verbatim Devotion</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[0.1em] uppercase text-brown mb-4">
            Client Devotion
          </h2>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14"
        >
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#F9F6F0] border border-brown/10 rounded-[1.5rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Gold Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                {/* Testimonial text */}
                <p className="font-sans text-sm text-brown/85 italic leading-relaxed mb-6">{review.quote}</p>
              </div>
              {/* Reviewer Name */}
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-brown">- {review.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Read all reviews link */}
        <div className="text-center">
          <a
            href="https://maps.google.com/?cid=1202613917761"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-gold hover:text-gold-light hover:underline transition-colors duration-300"
          >
            Read all <Counter value={132} /> reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
