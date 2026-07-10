import { AnimatePresence, motion } from 'motion/react';

interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MemberModal({ isOpen, onClose }: MemberModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div id="member-area-modal" className="fixed inset-0 z-[100] flex items-center justify-center px-5">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brown/60 backdrop-blur-sm"
          />

          {/* Modal Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            id="member-modal-card"
            className="bg-cream border border-gold/30 rounded-3xl p-8 sm:p-10 max-w-lg w-full shadow-2xl relative z-10"
          >
            {/* Elegant decorative top gold line */}
            <div className="h-1 w-20 bg-gold mx-auto mb-8 rounded-full"></div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brown text-center mb-4">
              Member Area
            </h3>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block text-center mb-6">
              Currently Under Wraps
            </span>

            <p className="font-sans text-sm text-brown/80 leading-relaxed text-center mb-8">
              The Tan's Touch Member Area is currently under wraps. We are crafting a digital experience as bespoke as our physical sanctuary. Members will soon enjoy seamless round-the-clock bookings, historic session tracking, and personal treatment profiles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                id="btn-close-modal"
                onClick={onClose}
                className="flex-1 py-3.5 rounded-full border-2 border-gold text-gold font-sans text-xs font-bold uppercase tracking-wider hover:bg-gold hover:text-cream transition-all duration-300 cursor-pointer focus:outline-none"
              >
                Close
              </button>
              <a
                href="https://wa.me/2348163917761?text=Hello!%20I%27d%20like%20to%20join%20the%20Tan%27s%20Touch%20membership%20waitlist"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center py-3.5 rounded-full bg-gold text-cream font-sans text-xs font-bold uppercase tracking-wider hover:bg-gold-light active:scale-95 transition-all duration-300 shadow-md"
              >
                Join Waitlist
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
