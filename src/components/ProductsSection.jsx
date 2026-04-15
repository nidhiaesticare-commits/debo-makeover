import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SafeImage from './SafeImage';
import { imageFallback, productShowcase, productsUsed } from '../siteData';

function ProductsSection() {
  return (
    <section className="bg-[var(--bg-secondary)] py-18 md:py-22">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-kicker text-[var(--soft-pink)]">
            <Sparkles size={13} /> Premium Products Used
          </span>
          <h2 className="mt-4 text-3xl text-[var(--cream)] md:text-4xl">Luxury Product & Skin Prep Story</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
            We combine premium global products, hygienic tools, and skin-first preparation rituals for high-definition,
            long-wear bridal and glam finishes.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productShowcase.map((item, index) => (
            <motion.div
              key={item.brand}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04 }}
              className="group hover-lift-card overflow-hidden rounded-3xl border border-white/15 bg-black/40"
            >
              <div className="relative h-52 overflow-hidden">
                <SafeImage
                  src={item.image}
                  fallbackSrc={imageFallback}
                  alt={`${item.brand} luxury product showcase`}
                  className={`h-full w-full transition duration-500 group-hover:scale-105 ${
                    item.fit === 'contain' ? 'object-contain bg-black/65 p-3' : 'object-cover'
                  }`}
                />
                <div className="luxury-overlay absolute inset-0" />
                <span className="glass-tag absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white">
                  {item.badge}
                </span>
              </div>

              <div className="p-4">
                <p className="text-sm font-semibold text-[var(--cream)]">{item.brand}</p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {productsUsed.map((brand) => (
            <span
              key={brand}
              className="rounded-full border border-white/20 bg-white/6 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
