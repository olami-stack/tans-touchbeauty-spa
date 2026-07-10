import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function WhatsAppBubble() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          id="whatsapp-bubble"
          href="https://wa.me/2348163917761?text=Hello%20Tan%27s%20Touch!%20I%27d%20like%20to%20book%20a%20session"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="fixed bottom-4 right-4 z-50 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer filter drop-shadow-md"
        >
          {/* Embedded WhatsApp Icon from Google Drive */}
          <img
            src="https://lh3.googleusercontent.com/d/1wCtnJSEoji0g_Y8fmLqOg4jZ-HPuG1IP"
            alt="WhatsApp"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
