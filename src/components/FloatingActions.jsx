import { CalendarDays, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function FloatingActions() {
  return (
    <>
      <motion.a
        href="https://wa.me/918787518627"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-800/40 hover:scale-105"
      >
        <MessageCircle size={18} /> WhatsApp
      </motion.a>

      <motion.a
        href="https://debobeautybridalstudio.setmore.com/"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-5 py-3 text-sm font-semibold text-black shadow-xl md:hidden"
      >
        <span className="inline-flex items-center gap-2">
          <CalendarDays size={17} /> Book Now
        </span>
      </motion.a>
    </>
  );
}

export default FloatingActions;
