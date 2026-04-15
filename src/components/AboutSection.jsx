import { motion } from 'framer-motion';
import { Award, HeartHandshake, ShieldCheck, Sparkles, WandSparkles } from 'lucide-react';
import SafeImage from './SafeImage';
import { aboutCollage, imageFallback } from '../siteData';

const features = [
  {
    title: 'Premium Products',
    body: 'Luxury-grade formulas selected for long-wear event coverage.',
    icon: Sparkles,
  },
  {
    title: 'Personalized Looks',
    body: 'Every look is tailored to your features, outfit, and event lighting.',
    icon: HeartHandshake,
  },
  {
    title: 'Certified Artist',
    body: 'Professional training with advanced bridal and HD glam specialization.',
    icon: Award,
  },
  {
    title: 'Hygienic Tools',
    body: 'Strict hygiene protocol with sanitized brushes and disposables.',
    icon: ShieldCheck,
  },
];

function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--cream)] py-20 text-zinc-900 md:py-28">
      <div className="absolute -right-24 top-4 h-56 w-56 rounded-full bg-[var(--soft-pink)]/40 blur-3xl" />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-4"
        >
          {aboutCollage.map((item, index) => (
            <figure
              key={item.label}
              className={`group relative overflow-hidden rounded-3xl shadow-xl shadow-black/15 ${
                index === 0 ? 'col-span-2 h-56' : ''
              } ${
                index === 1 ? 'h-64' : ''
              } ${
                index === 2 ? 'mt-6 h-56' : ''
              } ${
                index === 3 ? 'h-56' : ''
              } ${
                index === 4 ? 'h-64' : ''
              }`}
            >
              <SafeImage
                src={item.image}
                fallbackSrc={imageFallback}
                alt={item.alt}
                className={`h-full w-full transition duration-500 group-hover:scale-105 ${
                  item.fit === 'contain' ? 'object-contain bg-white p-2' : 'object-cover'
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-8">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/90">{item.label}</p>
              </div>
            </figure>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-kicker border-zinc-900/15 text-zinc-700">
            <WandSparkles size={13} />
            About Us
          </span>

          <h2 className="mt-4 text-balance text-4xl md:text-5xl">
            Where Signature Beauty Meets Bridal Storytelling
          </h2>

          <p className="mt-5 leading-relaxed text-zinc-700">
            Debo Makeover Official crafts bespoke beauty journeys for brides and modern women across Nalasopara,
            Virar, and Mumbai suburbs. From consultation to final touch, every detail is designed for confidence,
            camera-ready elegance, and all-day comfort.
          </p>

          <p className="mt-4 leading-relaxed text-zinc-700">
            Our style philosophy balances glam impact with skin realism so your look remains timeless in person and
            across photos and reels.
          </p>

          <div className="mt-5 rounded-2xl border border-zinc-300 bg-white p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Signature Promise</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700">
              Personalized consultation, luxury product selection, and calm event-day execution to help you feel fully
              prepared and confident.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {features.map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-300 bg-white p-4 shadow-sm">
                <item.icon className="mb-2 text-[var(--rose-gold)]" size={18} />
                <p className="font-medium">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
