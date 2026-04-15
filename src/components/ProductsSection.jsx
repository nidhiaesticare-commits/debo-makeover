import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { productsUsed } from '../siteData';

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
          <h2 className="mt-4 text-3xl text-[var(--cream)] md:text-4xl">Luxury Product Stack Trusted For Every Look</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {productsUsed.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04 }}
              className="rounded-2xl border border-white/15 bg-black/35 p-4 text-center text-sm font-medium text-[var(--cream)]"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
