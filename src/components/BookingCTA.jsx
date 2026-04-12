import { motion } from 'framer-motion';
import { CalendarCheck2, MessageCircleHeart } from 'lucide-react';

function BookingCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2a1d16] via-[#5a3a2e] to-[#2a1d16]" />
      <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-[var(--gold)]/25 blur-3xl" />
      <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-[var(--soft-pink)]/25 blur-3xl" />

      <div className="section-shell relative rounded-3xl border border-white/20 bg-black/30 p-8 text-center md:p-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl text-[var(--cream)] md:text-5xl"
        >
          Your Dream Look Starts With One Booking
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--cream)]/80">
          Limited bookings available this month. Reserve early for bridal dates, festive glam, and on-location events.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://debobeautybridalstudio.setmore.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-7 py-3 font-semibold text-black transition hover:scale-105"
          >
            <CalendarCheck2 size={18} /> Book Appointment
          </a>
          <a
            href="https://wa.me/918787518627"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/8 px-7 py-3 font-medium text-white transition hover:bg-white/15"
          >
            <MessageCircleHeart size={18} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default BookingCTA;
