import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { useRef, useState } from 'react';
import MagneticButton from './MagneticButton';
import { heroHighlights, heroTrustCards, salonImages } from '../siteData';

const heroVideo = 'https://cdn.pixabay.com/video/2019/08/16/26011-354553332_large.mp4';

function HeroSection() {
  const sectionRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const yFloat = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {!videoFailed && (
        <motion.video
          style={{ y }}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
          poster={salonImages[0]}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </motion.video>
      )}

      <motion.div
        style={{ y }}
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          videoFailed ? 'opacity-100' : 'opacity-35'
        }`}
        aria-hidden
        role="presentation"
      >
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${salonImages[0]})` }} />
      </motion.div>

      <div className="hero-grid absolute inset-0 opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/68 to-[#0b0b0b]" />

      <motion.div style={{ y: yFloat }} className="absolute -left-14 top-28 h-72 w-72 rounded-full bg-[var(--rose-gold)]/25 blur-3xl" />
      <motion.div style={{ y: yFloat }} className="absolute right-0 top-52 h-80 w-80 rounded-full bg-[var(--gold)]/20 blur-3xl" />
      <div className="float-slow absolute right-[10%] top-32 h-20 w-20 rounded-2xl border border-white/15 bg-white/6" />
      <div className="float-delayed absolute left-[8%] top-[35%] h-16 w-16 rounded-full border border-[var(--gold)]/25 bg-[var(--gold)]/10" />

      <div className="section-shell relative flex min-h-screen items-center pb-18 pt-28 md:pb-24">
        <div className="grid w-full items-center gap-10 xl:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="glass-card max-w-3xl rounded-3xl p-8 md:p-12"
          >
            <p className="section-kicker mb-4 text-[var(--soft-pink)]">
              <Sparkles size={14} /> Luxury Bridal & Glam Studio
            </p>

            <h1 className="text-balance text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              Redefining Beauty, Confidence & Elegance
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--cream)]/85 sm:text-base">
              Premium bridal artistry and modern glam transformations crafted for weddings, reels, and moments that
              deserve to feel unforgettable.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <MagneticButton
                as="a"
                href="https://debobeautybridalstudio.setmore.com/"
                target="_blank"
                rel="noreferrer"
                data-cursor="Book"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-7 py-3 font-semibold text-black"
              >
                Book Appointment <ArrowRight size={17} />
              </MagneticButton>

              <MagneticButton
                as="a"
                href="#services"
                data-cursor="Explore"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-7 py-3 font-medium text-white transition hover:bg-white/15"
              >
                View Services
              </MagneticButton>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/20 bg-black/35 px-4 py-3">
                  <p className="text-xl font-semibold text-[var(--gold)]">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hidden gap-4 xl:grid"
          >
            <div className="premium-panel ml-auto max-w-xs rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--soft-pink)]">Bookings Open</p>
              <p className="mt-2 text-lg text-[var(--cream)]">Wedding Season 2026</p>
            </div>

            <div className="premium-panel ml-auto max-w-sm rounded-2xl p-4">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-[var(--cream)]">
                <Star size={16} className="text-[var(--gold)]" fill="currentColor" /> Rated 4.9/5 by 500+ Clients
              </p>
            </div>

            <div className="grid gap-3">
              {heroTrustCards.map((item) => (
                <div key={item} className="premium-panel ml-auto flex max-w-sm items-center gap-3 rounded-2xl p-4">
                  <ShieldCheck className="text-[var(--gold)]" size={18} />
                  <p className="text-sm text-[var(--cream)]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        data-cursor="Scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-20 inline-flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--cream)]/80"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/35"
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}

export default HeroSection;
