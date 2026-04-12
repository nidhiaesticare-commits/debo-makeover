import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { portfolio } from '../siteData';

const categories = ['All', 'Bridal', 'Party', 'Glam', 'Hairstyling', 'Skincare'];

function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered = useMemo(
    () => (activeCategory === 'All' ? portfolio : portfolio.filter((item) => item.category === activeCategory)),
    [activeCategory]
  );

  return (
    <section id="portfolio" className="bg-[var(--cream)] py-20 text-zinc-900 md:py-28">
      <div className="section-shell">
        <h2 className="text-center text-4xl md:text-5xl">Portfolio Gallery</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
          Instagram-worthy transformations crafted to complement your event mood, outfit palette, and camera lighting.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
                activeCategory === category
                  ? 'border-zinc-900 bg-zinc-900 text-white'
                  : 'border-zinc-300 bg-white text-zinc-800 hover:border-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((item, index) => (
            <motion.button
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04 }}
              onClick={() => setSelectedItem(item)}
              className="group mb-5 block w-full overflow-hidden rounded-3xl"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-3xl object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 translate-y-3 text-left opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--soft-pink)]">{item.category}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl"
            >
              <button
                className="absolute -right-4 -top-4 rounded-full bg-white p-2"
                onClick={() => setSelectedItem(null)}
                aria-label="Close image"
              >
                <X size={18} />
              </button>
              <img src={selectedItem.image} alt={selectedItem.title} className="max-h-[80vh] rounded-3xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default PortfolioSection;
