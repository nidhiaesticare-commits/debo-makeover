import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { salonImages } from '../siteData';

function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center"
        aria-hidden
        role="presentation"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${salonImages[0]})` }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-[#0b0b0b]" />
      <div className="absolute -left-20 top-32 h-64 w-64 rounded-full bg-[var(--rose-gold)]/25 blur-3xl" />
      <div className="absolute right-0 top-52 h-72 w-72 rounded-full bg-[var(--gold)]/20 blur-3xl" />

      <div className="section-shell relative flex min-h-screen items-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card max-w-3xl rounded-3xl p-8 md:p-12"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[var(--soft-pink)]">
            <Sparkles size={14} /> Luxury Bridal & Glam Studio
          </p>
          <h1 className="text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Redefining Beauty, Confidence & Elegance
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--cream)]/85 sm:text-base">
            Premium makeup artistry, personalized consultation, and camera-ready transformations for brides,
            engagements, and signature glam events.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://debobeautybridalstudio.setmore.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-7 py-3 font-semibold text-black transition hover:scale-105"
            >
              Book Appointment <ArrowRight size={17} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-7 py-3 font-medium text-white transition hover:bg-white/15"
            >
              View Services
            </a>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ['500+', 'Happy Clients'],
              ['5+', 'Years Experience'],
              ['100%', 'Satisfaction'],
            ].map((item) => (
              <div key={item[1]} className="rounded-2xl border border-white/20 bg-black/30 px-4 py-3">
                <p className="text-xl font-semibold text-[var(--gold)]">{item[0]}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{item[1]}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
