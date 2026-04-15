import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { stats } from '../siteData';

function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-r from-black via-[#1a1412] to-black py-20 md:py-24">
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_center,rgba(212,175,55,0.3)_0,transparent_60%)]" />
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px] opacity-20" />

      <div className="section-shell relative">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-3xl text-[var(--cream)] md:text-4xl"
        >
          Trusted By Brides Across Nalasopara, Virar & Vasai
        </motion.h2>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.08 }}
            className="relative rounded-3xl border border-white/15 bg-black/38 p-6 text-center"
          >
            <span className="absolute inset-y-8 right-0 hidden w-px bg-white/10 md:block" />
            <p className="text-4xl font-semibold text-[var(--gold)]">
              {inView ? <CountUp end={stat.value} duration={2} /> : 0}
              {stat.suffix}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{stat.label}</p>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
