export default function Footer() {
  return (
    <footer className="bg-[#120E0A] text-cream pt-16 pb-8 px-5 border-t border-gold/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Logo Wordmark */}
        <div className="flex flex-col items-center mb-8 text-center">
          <span className="font-serif italic font-semibold text-3xl tracking-wide text-gold">
            Tan's Touch
          </span>
          <span className="text-xs font-bold tracking-[0.25em] text-cream-dark/65 mt-1">
            BEAUTY SPA
          </span>
        </div>

        {/* Contact details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center max-w-4xl w-full mb-10 border-y border-cream-dark/10 py-8">
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase font-bold tracking-widest text-cream-dark/50 mb-1">WhatsApp & Call</span>
            <a href="tel:+2348163917761" className="text-sm font-semibold hover:text-gold-light transition-colors duration-300 whitespace-nowrap">
              +234 816 391 7761
            </a>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase font-bold tracking-widest text-cream-dark/50 mb-1">Email Address</span>
            <a href="mailto:tanstouchbeautyspa@gmail.com" className="text-sm font-semibold hover:text-gold-light transition-colors duration-300 whitespace-nowrap">
              tanstouchbeautyspa@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-cream-dark/50 mb-1">Follow Us</span>
            <a href="https://www.instagram.com/tans_touchbeauty_spa/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-gold-light transition-colors duration-300 whitespace-nowrap">
              @tans_touchbeauty_spa
            </a>
          </div>
        </div>

        {/* Book Link */}
        <a
          href="https://wa.me/2348163917761?text=Hello%20Tan%27s%20Touch!%20I%27d%20like%20to%20book%20a%20session"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gold text-cream font-sans text-xs font-bold uppercase tracking-wider hover:bg-gold-light transition-all duration-300 mb-12 shadow-sm"
        >
          Book on WhatsApp
        </a>

        {/* Copyright & Designer */}
        <div className="text-center w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-cream-dark/5 text-xs text-cream-dark/40 font-sans">
          <span>&copy; 2026 Tan's Touch Beauty Spa. All rights reserved.</span>
          <span>
            Website by <span className="font-bold text-gold/60">Brandbyolami</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
