import { motion } from 'framer-motion';
import { useState } from 'react';
import SafeImage from './SafeImage';
import { imageFallback, transformations } from '../siteData';

function BeforeAfterCard({ item, index }) {
  const [position, setPosition] = useState(50);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08 }}
      className="rounded-3xl border border-zinc-300/70 bg-white p-4 shadow-xl shadow-black/5"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">{item.category}</p>
      <div className="relative h-80 overflow-hidden rounded-2xl" data-cursor="View Look">
        <SafeImage
          src={item.before}
          fallbackSrc={imageFallback}
          alt={`${item.title} before`}
          className={`h-full w-full ${item.imageFit === 'contain' ? 'object-contain bg-zinc-100 p-2' : 'object-cover'}`}
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <SafeImage
            src={item.after}
            fallbackSrc={imageFallback}
            alt={`${item.title} after`}
            className={`h-full w-full ${item.imageFit === 'contain' ? 'object-contain bg-zinc-100 p-2' : 'object-cover'}`}
          />
        </div>
        <div className="absolute inset-y-0" style={{ left: `${position}%` }}>
          <span className="absolute -left-px h-full w-[2px] bg-white/80 shadow-[0_0_16px_rgba(255,255,255,0.8)]" />
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white">
          After
        </span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="mt-4 h-2 w-full accent-[var(--rose-gold)]"
        aria-label={`Compare ${item.title}`}
      />
      <h3 className="mt-3 text-xl text-zinc-900">{item.title}</h3>
    </motion.article>
  );
}

function TransformationsSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream)] py-20 text-zinc-900 md:py-28">
      <div className="section-mesh absolute inset-0" />
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-kicker border-zinc-900/20 text-zinc-700">Before & After Transformations</span>
          <h2 className="mt-4 text-balance text-4xl md:text-5xl">Real Transformations, Real Confidence</h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {transformations.map((item, index) => (
            <div key={item.title} className="hover-lift-card">
              <BeforeAfterCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TransformationsSection;
