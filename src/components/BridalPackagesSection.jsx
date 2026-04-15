import { motion } from 'framer-motion';
import { Check, Crown, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';
import SafeImage from './SafeImage';
import { bridalPackages, imageFallback } from '../siteData';

function BridalPackagesSection() {
  return (
    <section id="packages" className="relative overflow-hidden bg-[var(--bg-secondary)] py-20 md:py-28">
      <div className="section-mesh absolute inset-0" />
      <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-[var(--rose-gold)]/20 blur-3xl" />
      <div className="absolute right-10 top-12 h-56 w-56 rounded-full bg-[var(--gold)]/15 blur-3xl" />

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-kicker text-[var(--soft-pink)]">Signature Bridal Packages</span>
          <h2 className="mt-4 text-balance text-4xl text-[var(--cream)] md:text-5xl">
            Curated Bridal Packages For Every Celebration Style
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {bridalPackages.map((pkg, index) => (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className={`premium-card relative overflow-hidden rounded-3xl border p-7 ${
                pkg.recommended
                  ? 'border-[var(--gold)] bg-gradient-to-b from-[#30210f] to-[#15120d]'
                  : 'border-white/15 bg-black/45'
              }`}
            >
              <div className="absolute inset-0">
                <SafeImage
                  src={pkg.image}
                  fallbackSrc={imageFallback}
                  alt={`${pkg.name} package visual`}
                  className="h-full w-full scale-105 object-cover opacity-34 blur-[0.3px]"
                />
                <div
                  className={`absolute inset-0 ${
                    pkg.recommended
                      ? 'bg-gradient-to-b from-[#2c1c0d]/75 via-[#160f0b]/65 to-[#070605]/92'
                      : 'bg-gradient-to-b from-black/65 via-black/55 to-black/88'
                  }`}
                />
              </div>

              <div className="relative z-10">
              <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[var(--soft-pink)]">{pkg.style}</p>
              {pkg.recommended && (
                <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full border border-[var(--gold)]/50 bg-[var(--gold)]/20 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--gold)]">
                  <Crown size={12} /> Recommended
                </span>
              )}

              <h3 className="pr-20 text-2xl text-[var(--cream)]">{pkg.name}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">Tailored for premium occasion depth and camera fidelity.</p>

              <div className="mt-5 space-y-2 text-sm text-[var(--cream)]/85">
                <p>
                  <span className="text-[var(--text-muted)]">Duration:</span> {pkg.duration}
                </p>
                <p>
                  <span className="text-[var(--text-muted)]">Trial:</span> {pkg.trial}
                </p>
                <p>
                  <span className="text-[var(--text-muted)]">Home Service:</span> {pkg.homeService}
                </p>
              </div>

              <ul className="mt-5 space-y-2">
                {pkg.includes.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[var(--cream)]/90">
                    <Check className="mt-0.5 text-[var(--gold)]" size={14} /> {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-end justify-between">
                <p className="text-lg font-semibold text-[var(--gold)]">{pkg.price}</p>
                <MagneticButton
                  as="a"
                  href="https://debobeautybridalstudio.setmore.com/"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="Book"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white"
                >
                  <Sparkles size={14} /> Book
                </MagneticButton>
              </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BridalPackagesSection;
