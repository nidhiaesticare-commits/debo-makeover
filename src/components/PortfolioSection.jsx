import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { portfolio, portfolioStats } from '../siteData';

function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const categories = useMemo(() => {
    const values = new Set(['All']);
    portfolio.forEach((item) => values.add(item.category));
    return Array.from(values);
  }, []);

  const filtered = useMemo(
    () => (activeCategory === 'All' ? portfolio : portfolio.filter((item) => item.category === activeCategory)),
    [activeCategory]
  );

  const visibleItems = filtered.slice(0, visibleCount);

  const activeItem = selectedIndex === null ? null : filtered[selectedIndex];

  const closeLightbox = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((prev) => {
      if (prev === null) {
        return null;
      }
      return prev === 0 ? filtered.length - 1 : prev - 1;
    });
  };

  const showNext = () => {
    setSelectedIndex((prev) => {
      if (prev === null) {
        return null;
      }
      return prev === filtered.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <section id="portfolio" className="bg-[var(--cream)] py-20 text-zinc-900 md:py-28">
      <div className="section-shell">
        <h2 className="text-center text-4xl md:text-5xl">Portfolio Gallery</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
          Instagram-worthy transformations crafted to complement your event mood, outfit palette, and camera lighting.
        </p>

        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {portfolioStats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-center">
              <p className="text-2xl font-semibold text-zinc-900">{item.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(8);
              }}
              data-cursor={category}
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
          {visibleItems.map((item, index) => (
            <motion.button
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04 }}
              onClick={() => setSelectedIndex(index)}
              className="group mb-5 block w-full overflow-hidden rounded-3xl"
              data-cursor="View Look"
            >
              <div className={`relative ${item.tall ? 'h-[460px]' : 'h-[350px]'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full rounded-3xl object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/70 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/35 bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-white"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.videoPreview && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/35 bg-black/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-white">
                      <Play size={11} /> Video Preview
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4 translate-y-3 text-left opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-white/80">{item.description}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--soft-pink)]">{item.category}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="mt-6 text-center">
            <MagneticButton
              as="button"
              type="button"
              onClick={() => setVisibleCount((count) => Math.min(count + 3, filtered.length))}
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white"
              data-cursor="More"
            >
              Load More Looks
            </MagneticButton>
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[98] flex items-center justify-center bg-black/90 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[94vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/20 bg-black/70 p-4 backdrop-blur-xl md:p-6"
            >
              <button
                className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-black/60 p-2 text-white"
                onClick={closeLightbox}
                aria-label="Close image"
              >
                <X size={18} />
              </button>

              <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
                <div className="relative">
                  <img src={activeItem.image} alt={activeItem.title} className="max-h-[78vh] w-full rounded-3xl object-cover" />
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="absolute left-4 top-1/2 inline-flex -translate-y-1/2 rounded-full border border-white/30 bg-black/55 p-2 text-white"
                    aria-label="Previous look"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-4 top-1/2 inline-flex -translate-y-1/2 rounded-full border border-white/30 bg-black/55 p-2 text-white"
                    aria-label="Next look"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="rounded-3xl border border-white/20 bg-black/45 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--soft-pink)]">{activeItem.category}</p>
                  <h3 className="mt-2 text-3xl text-[var(--cream)]">{activeItem.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{activeItem.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 bg-white/8 px-3 py-1 text-xs uppercase tracking-[0.14em] text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl border border-white/15">
                      <img src={activeItem.before} alt={`${activeItem.title} before`} className="h-28 w-full object-cover" />
                      <p className="p-2 text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">Before</p>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-white/15">
                      <img src={activeItem.after} alt={`${activeItem.title} after`} className="h-28 w-full object-cover" />
                      <p className="p-2 text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">After</p>
                    </div>
                  </div>

                  <MagneticButton
                    as="a"
                    href="https://debobeautybridalstudio.setmore.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-5 py-2 text-sm font-semibold text-black"
                    data-cursor="Book"
                  >
                    Recreate This Look
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default PortfolioSection;
