import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../siteData';

function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-[var(--bg-secondary)] py-20 md:py-28">
      <div className="section-shell max-w-4xl">
        <h2 className="text-center text-4xl text-[var(--cream)] md:text-5xl">Frequently Asked Questions</h2>
        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="rounded-2xl border border-white/15 bg-black/35">
                <button
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="font-medium text-[var(--cream)]">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[var(--gold)] transition ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--text-muted)]">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
