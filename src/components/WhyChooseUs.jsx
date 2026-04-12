import { motion } from 'framer-motion';
import { Clock3, Gem, ShieldCheck, Sparkles, Star, UserRoundCheck } from 'lucide-react';

const points = [
  { title: 'Luxury Experience', icon: Gem },
  { title: 'Certified Makeup Artist', icon: UserRoundCheck },
  { title: 'Premium Products Only', icon: Sparkles },
  { title: 'Personalized Consultation', icon: Star },
  { title: 'Hygienic & Safe', icon: ShieldCheck },
  { title: 'On-Time Service', icon: Clock3 },
];

function WhyChooseUs() {
  return (
    <section className="bg-[var(--bg-main)] py-20 md:py-28">
      <div className="section-shell">
        <h2 className="text-center text-4xl text-[var(--cream)] md:text-5xl">Why Choose Us</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {points.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group rounded-3xl border border-white/15 bg-gradient-to-br from-white/8 to-white/0 p-6"
            >
              <item.icon className="text-[var(--gold)] transition group-hover:scale-110" size={24} />
              <h3 className="mt-4 text-xl text-[var(--cream)]">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Delivering consistent premium outcomes through artistry, planning, and disciplined execution.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
