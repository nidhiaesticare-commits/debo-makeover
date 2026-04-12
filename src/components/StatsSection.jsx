import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Happy Clients', value: 500, suffix: '+' },
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Bridal Looks', value: 200, suffix: '+' },
  { label: 'Satisfaction', value: 100, suffix: '%' },
];

function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-r from-black via-[#1a1412] to-black py-18 md:py-24">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_center,rgba(212,175,55,0.3)_0,transparent_60%)]" />
      <div className="section-shell relative grid gap-5 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-3xl border border-white/15 bg-black/35 p-6 text-center"
          >
            <p className="text-4xl font-semibold text-[var(--gold)]">
              {inView ? <CountUp end={stat.value} duration={2} /> : 0}
              {stat.suffix}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
