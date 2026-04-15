import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, Clock3, Crown, Gem, ShieldCheck, Sparkles, Star } from 'lucide-react';
import CountUp from 'react-countup';
import { useMemo, useRef, useState } from 'react';
import MagneticButton from './MagneticButton';
import { heroHighlights, heroTrustCards, salonImages } from '../siteData';

const heroVideo = 'https://cdn.pixabay.com/video/2019/08/16/26011-354553332_large.mp4';

function HeroSection() {
  const sectionRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [primaryHovered, setPrimaryHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const yFloat = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const textReveal = {
    hidden: { opacity: 0, y: 22 },
    show: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.12 * index, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const trustIndicators = useMemo(
    () => [
      ...heroTrustCards,
      'Trusted by 500+ Brides',
      'Serving Nalasopara, Virar & Mumbai',
      'Limited Festive Season Slots Available',
    ],
    []
  );

  const statIcons = [Crown, Gem, Clock3];

  const parsedHighlights = useMemo(
    () =>
      heroHighlights.map((item, index) => {
        const numeric = Number((item.value || '').replace(/[^0-9.]/g, '')) || 0;
        const suffix = (item.value || '').replace(/[0-9.]/g, '') || (numeric >= 100 ? '+' : '');
        return {
          ...item,
          numeric,
          suffix,
          Icon: statIcons[index % statIcons.length],
        };
      }),
    []
  );

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen overflow-hidden hero-scroll-snap">
      {!videoReady && (
        <div className="absolute inset-0 z-[1]">
          <div className="skeleton h-full w-full rounded-none" />
        </div>
      )}

      {!videoFailed && (
        <motion.video
          style={{ y, scale: bgScale }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
          poster={salonImages[0]}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={heroVideo} type="video/mp4" />
        </motion.video>
      )}

      <motion.div
        style={{ y, scale: bgScale }}
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          videoFailed ? 'opacity-95' : 'opacity-28'
        }`}
        aria-hidden
        role="presentation"
      >
        <div
          className="h-full w-full bg-cover bg-center blur-[1px]"
          style={{ backgroundImage: `url(${salonImages[0]})` }}
        />
      </motion.div>

      <div className="hero-grid absolute inset-0 opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/88 via-black/76 to-[#080808]" />
      <div className="hero-vignette absolute inset-0" />
      <div className="grain-overlay absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_52%,rgba(212,175,55,0.23),transparent_44%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_35%,rgba(246,215,220,0.14),transparent_30%)]" />

      <motion.div
        style={{ y: yFloat }}
        className="absolute -left-16 top-24 h-80 w-80 rounded-full bg-[var(--rose-gold)]/20 blur-[96px]"
      />
      <motion.div
        style={{ y: yFloat }}
        className="absolute -right-8 top-40 h-96 w-96 rounded-full bg-[var(--gold)]/20 blur-[110px]"
      />
      <div className="float-slow absolute right-[11%] top-32 h-20 w-20 rounded-2xl border border-white/15 bg-white/6" />
      <div className="float-delayed absolute left-[8%] top-[35%] h-16 w-16 rounded-full border border-[var(--gold)]/25 bg-[var(--gold)]/10" />

      {Array.from({ length: 16 }).map((_, index) => (
        <motion.span
          key={index}
          className="gold-dust"
          style={{
            left: `${6 + ((index * 11.3) % 88)}%`,
            top: `${10 + ((index * 7.4) % 74)}%`,
          }}
          animate={{ y: [0, -14, 0], opacity: [0.1, 0.75, 0.15] }}
          transition={{
            duration: 5 + (index % 4),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.18,
          }}
        />
      ))}

      <motion.div
        style={{ y: yFloat }}
        className="absolute right-[18%] top-[22%] h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(255,217,140,0.72),rgba(255,217,140,0.0)_70%)] blur-xl"
      />

      <div className="section-shell relative flex min-h-screen items-center pb-18 pt-28 md:pb-24">
        <div className="grid w-full items-center gap-10 xl:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hero-feature-card max-w-2xl rounded-[34px] p-8 md:p-10 lg:min-h-[620px] lg:p-12"
            data-cursor="Luxury"
          >
            <motion.p className="section-kicker badge-float mb-6 text-[var(--soft-pink)]" custom={0} variants={textReveal} initial="hidden" animate="show">
              <Sparkles size={14} /> International Luxury Bridal & Glam Studio
            </motion.p>

            <div className="space-y-1">
              <motion.h1
                className="text-balance text-[clamp(2.7rem,6vw,5.2rem)] leading-[1.03] tracking-[-0.02em] text-white"
                custom={1}
                variants={textReveal}
                initial="hidden"
                animate="show"
              >
                Redefining Beauty,
              </motion.h1>
              <motion.h1
                className="text-balance text-[clamp(2.4rem,5.2vw,4.9rem)] leading-[1.03] tracking-[-0.016em] text-white/95"
                custom={2}
                variants={textReveal}
                initial="hidden"
                animate="show"
              >
                Confidence & Editorial Elegance
              </motion.h1>
            </div>

            <motion.p
              className="mt-7 max-w-xl text-[0.95rem] leading-[1.85] text-[var(--cream)]/78 sm:text-[1.03rem]"
              custom={3}
              variants={textReveal}
              initial="hidden"
              animate="show"
            >
              Premium bridal artistry and modern glam transformations crafted for weddings, reels, and moments that
              deserve to feel unforgettable.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              custom={4}
              variants={textReveal}
              initial="hidden"
              animate="show"
            >
              <MagneticButton
                as="a"
                href="https://debobeautybridalstudio.setmore.com/"
                target="_blank"
                rel="noreferrer"
                data-cursor="Book"
                onHoverStart={() => setPrimaryHovered(true)}
                onHoverEnd={() => setPrimaryHovered(false)}
                className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-full border border-[rgba(255,228,155,0.85)] bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-7 py-3.5 text-[0.95rem] font-semibold text-black shadow-[0_16px_42px_rgba(212,175,55,0.38)] sm:w-auto"
              >
                Book Appointment
                <motion.span animate={{ x: primaryHovered ? 5 : 0 }} transition={{ duration: 0.24 }}>
                  <ArrowRight size={17} />
                </motion.span>
              </MagneticButton>

              <MagneticButton
                as="a"
                href="#services"
                data-cursor="Explore"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-white/7 px-7 py-3.5 text-[0.93rem] font-medium text-white transition hover:border-[var(--gold)]/50 hover:bg-white/16 sm:w-auto"
              >
                View Services
              </MagneticButton>
            </motion.div>

            <div className="mt-11 -mx-1 flex snap-x gap-3 overflow-x-auto px-1 pb-1 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
              {parsedHighlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: 0.1 * index, duration: 0.55 }}
                  className="hero-stat-card relative min-w-[170px] flex-1 snap-center rounded-2xl px-4 py-4 sm:min-w-0"
                  data-cursor={item.label}
                >
                  <item.Icon size={16} className="mb-2 text-[var(--soft-pink)]" />
                  <p className="hero-stat-value text-[1.6rem] font-semibold leading-none text-[var(--gold)]">
                    <CountUp end={item.numeric} duration={2.2} enableScrollSpy scrollSpyOnce />
                    {item.suffix}
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-[var(--text-muted)]">{item.label}</p>
                  {index < parsedHighlights.length - 1 && <span className="hero-stat-divider hidden sm:block" />}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="hidden gap-4 xl:grid"
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.65 }}
              className="premium-panel float-slow ml-auto max-w-xs rounded-2xl p-4"
              whileHover={{ y: -4, rotate: -0.6 }}
              data-cursor="Season"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--soft-pink)]">Bookings Open</p>
              <p className="mt-2 text-lg text-[var(--cream)]">Wedding Season 2026</p>
              <p className="mt-2 border-t border-white/12 pt-2 text-xs text-[var(--text-muted)]">
                Premium Bridal Specialist • Limited Slots
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.65 }}
              className="premium-panel float-delayed ml-auto max-w-sm rounded-2xl p-4"
              whileHover={{ y: -5, rotate: 0.6 }}
              data-cursor="Rating"
            >
              <p className="inline-flex items-center gap-2 text-sm font-medium text-[var(--cream)]">
                <Star size={16} className="text-[var(--gold)]" fill="currentColor" /> Rated 4.9/5 by 500+ Clients
              </p>
              <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <p className="mt-3 text-xs text-[var(--text-muted)]">Trusted by 500+ Brides</p>
            </motion.div>

            <div className="grid gap-3">
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.64 + index * 0.1, duration: 0.55 }}
                  whileHover={{ y: -4, rotate: index % 2 ? 0.3 : -0.3 }}
                  className="premium-panel ml-auto flex max-w-sm items-center gap-3 rounded-2xl p-4"
                  data-cursor="Trust"
                >
                  <ShieldCheck className="text-[var(--gold)]" size={18} />
                  <p className="text-sm text-[var(--cream)]">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65 }}
            className="space-y-3 xl:hidden"
          >
            <div className="premium-panel rounded-2xl px-4 py-3" data-cursor="Season">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--soft-pink)]">Bookings Open</p>
              <p className="mt-1 text-sm text-[var(--cream)]">Wedding Season 2026 • Limited Festive Slots Available</p>
            </div>
            <div className="premium-panel rounded-2xl px-4 py-3" data-cursor="Trusted">
              <p className="text-sm text-[var(--cream)]">Trusted by 500+ Brides • Serving Nalasopara, Virar & Mumbai</p>
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
