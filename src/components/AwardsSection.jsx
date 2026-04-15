import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { awards } from '../siteData';

function AwardsSection() {
  return (
    <section className="bg-[var(--cream)] py-18 text-zinc-900 md:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-kicker border-zinc-900/20 text-zinc-700">Awards & Certifications</span>
          <h2 className="mt-4 text-3xl md:text-4xl">Professional Recognition That Builds Trust</h2>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {awards.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06 }}
              className="rounded-3xl border border-zinc-300 bg-white p-6 shadow-md shadow-black/5"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-[var(--gold)]">
                <BadgeCheck size={18} />
              </span>
              <h3 className="mt-4 text-xl">{item.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">{item.year}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
