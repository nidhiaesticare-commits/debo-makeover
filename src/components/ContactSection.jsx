import { motion } from 'framer-motion';
import { Clock3, MapPin, PhoneCall, Send, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';

function ContactSection() {
  return (
    <section id="contact" className="bg-[var(--bg-main)] py-20 md:py-28">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-white/15 bg-black/40 p-7"
        >
          <p className="section-kicker text-[var(--soft-pink)]">
            <Sparkles size={14} /> Contact Us
          </p>
          <h2 className="mt-3 text-balance text-4xl text-[var(--cream)]">Book Your Consultation</h2>
          <p className="mt-3 max-w-xl text-sm text-[var(--text-muted)]">
            Share your event details and preferred style. Our team will guide you with package fit, schedule options,
            and booking confirmation.
          </p>

          <form className="mt-7 grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 sm:col-span-2"
            />
            <textarea
              rows="4"
              placeholder="Tell us your event date and preferred look"
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 sm:col-span-2"
            />
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-6 py-3 font-semibold text-black sm:col-span-2"
            >
              Send Inquiry <Send size={16} />
            </button>
          </form>
        </motion.div>

        <div className="space-y-5">
          <div className="premium-panel rounded-3xl p-6">
            <p className="inline-flex items-center gap-2 text-sm text-[var(--cream)]">
              <MapPin size={16} className="text-[var(--gold)]" /> Gulmohar Heritage, Nalasopara West
            </p>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-[var(--cream)]">
              <PhoneCall size={16} className="text-[var(--gold)]" /> +91 87875 18627
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <MagneticButton
                as="a"
                href="tel:+918787518627"
                className="rounded-full border border-white/30 px-4 py-2 text-center text-sm text-white"
                data-cursor="Call"
              >
                Call Now
              </MagneticButton>
              <MagneticButton
                as="a"
                href="https://wa.me/918787518627"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-emerald-500 px-4 py-2 text-center text-sm font-medium text-white"
                data-cursor="Chat"
              >
                WhatsApp
              </MagneticButton>
            </div>
          </div>

          <div className="premium-panel rounded-3xl p-6">
            <p className="inline-flex items-center gap-2 text-sm text-[var(--cream)]">
              <Clock3 size={16} className="text-[var(--gold)]" /> Business Hours
            </p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">Mon - Sun: 9:00 AM to 9:00 PM</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">Bridal slots available on priority booking.</p>
          </div>

          <div className="map-wrap h-56 overflow-hidden rounded-3xl border border-white/15">
            <iframe
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Nalasopara+West&output=embed"
              title="Salon Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
