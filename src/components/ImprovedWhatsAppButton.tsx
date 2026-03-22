import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function ImprovedWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    const phoneNumber = '916203447902';
    const message = 'Hello Aiwana Solution! I would like to inquire about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="fixed bottom-[190px] right-6 z-40"
      >
        <button
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center hover:shadow-green-500/50 transition-shadow duration-300 group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} fill="currentColor" />
          
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Chat on WhatsApp
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
          </motion.div>

          {/* Pulse animation */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#25D366]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}