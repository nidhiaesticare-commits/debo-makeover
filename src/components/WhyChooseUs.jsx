import { motion } from 'framer-motion';
import { Clock3, Gem, ShieldCheck, Sparkles, Star, UserRoundCheck } from 'lucide-react';
import { whyChoosePoints } from '../siteData';

const icons = [Gem, UserRoundCheck, Sparkles, Star, ShieldCheck, Clock3];

function WhyChooseUs() {
  return (
    <section className="bg-[var(--bg-main)] py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-kicker text-[var(--soft-pink)]">Why Choose Us</span>
          <h2 className="mt-4 text-balance text-4xl text-[var(--cream)] md:text-5xl">Designed For Brides Who Want Premium Confidence</h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {whyChoosePoints.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/0 p-6"
              data-cursor="Explore"
            >
              <Icon className="text-[var(--gold)] transition duration-300 group-hover:scale-110 group-hover:rotate-6" size={24} />
              <h3 className="mt-4 text-xl text-[var(--cream)]">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{item.description}</p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
