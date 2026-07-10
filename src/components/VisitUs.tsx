import { motion } from 'motion/react';
import sanctuaryPhoto from '../assets/images/hero_luxury_spa_1783627563933.jpg';

export default function VisitUs() {
  return (
    <>
      <section className="w-full bg-[#120E0A] py-24 px-5 border-t border-gold/10 text-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visit Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-widest mb-6 border border-gold/25 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping"></span>
                Open 24/7
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[0.1em] uppercase text-cream mb-8">
                Our Sanctuary
              </h2>

              {/* Address info */}
              <div className="flex flex-col gap-6 mb-10 w-fit mx-auto lg:mx-0">
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-gold mb-1 text-left">Our Address</span>
                    <p className="font-sans text-sm text-cream-dark leading-relaxed text-left">
                      5 Tony Anegbode Street,
                      <br />
                      Victoria Island, Lagos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.155-.44.01-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-gold mb-1 text-left">Call or Text</span>
                    <a href="tel:+2348163917761" className="font-sans text-sm text-cream hover:text-gold transition-colors duration-300 text-left font-semibold">
                      +234 816 391 7761
                    </a>
                  </div>
                </div>
              </div>

              {/* Team/Sanctuary Photo with premium layout frame */}
              <div className="w-full max-w-sm aspect-[16/10] rounded-xl overflow-hidden border border-gold/10 shadow-2xl relative group">
                <motion.img
                  id="sanctuary-photo"
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-5%' }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  src={sanctuaryPhoto}
                  alt="Tan's Touch Sanctuary Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120E0A]/30 to-transparent"></div>
                <div className="absolute inset-3 border border-gold/15 rounded-lg pointer-events-none transition-all duration-300 group-hover:inset-2"></div>
              </div>
            </motion.div>

            {/* Google Maps Embed Iframe (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-7 w-full h-[320px] sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-gold/15 relative bg-[#18130E]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.646961448834!2d3.4243673747160756!3d6.440624024140061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b320d7da501%3s0x103b8b320d7da501!2s5%20Tony%20Anegbode%20St%2C%20Victoria%20Island%20106104%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REVIEWS PROMPT STRIP - Luxury dark banner */}
      <div id="reviews-prompt-strip" className="bg-[#18130E] border-y border-gold/10 py-6 px-5 text-center text-cream">
        <p className="font-sans text-xs sm:text-sm text-cream-dark font-medium tracking-wide">
          Enjoyed your session?{' '}
          <a
            href="https://maps.google.com/?cid=1202613917761"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gold hover:text-gold-light font-bold underline transition-colors ml-1"
          >
            Tell Lagos about it <span className="text-xs">⭐</span>
          </a>
        </p>
      </div>
    </>
  );
}
