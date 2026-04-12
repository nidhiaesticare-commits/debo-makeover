import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { services } from '../siteData';

function ServicesSection() {
  return (
    <section id="services" className="bg-[var(--bg-secondary)] py-20 md:py-28">
      <div className="section-shell">
        <h2 className="text-center text-4xl text-[var(--cream)] md:text-5xl">Premium Services</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--text-muted)]">
          Curated artistry for bridal, engagement, party glam, and complete style finishing.
        </p>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-white/15 bg-black/45"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <p className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--soft-pink)]">
                  <Sparkles size={14} /> Signature Service
                </p>
                <h3 className="text-2xl text-[var(--cream)]">{service.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{service.description}</p>
                <p className="mt-3 text-sm font-semibold text-[var(--gold)]">{service.price}</p>
                <a
                  href="https://debobeautybridalstudio.setmore.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white"
                >
                  Reserve Slot <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
