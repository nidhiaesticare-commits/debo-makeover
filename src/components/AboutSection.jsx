import { motion } from 'framer-motion';
import { Award, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { salonImages } from '../siteData';

const features = [
  { title: 'Premium Products', icon: Sparkles },
  { title: 'Personalized Looks', icon: HeartHandshake },
  { title: 'Certified Artist', icon: Award },
  { title: 'Hygienic Tools', icon: ShieldCheck },
];

function AboutSection() {
  return (
    <section id="about" className="bg-[var(--cream)] py-20 text-zinc-900 md:py-28">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-4"
        >
          {salonImages.slice(0, 4).map((image, index) => (
            <img
              key={image}
              src={image}
              alt="Salon showcase"
              className={`h-52 w-full rounded-3xl object-cover shadow-xl shadow-black/15 ${
                index % 2 === 0 ? 'mt-4' : ''
              }`}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="inline-block rounded-full bg-zinc-900 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--soft-pink)]">
            About Us
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl">Where Signature Beauty Meets Bridal Storytelling</h2>
          <p className="mt-5 leading-relaxed text-zinc-700">
            Debo Makeover Official crafts bespoke beauty journeys for brides and modern women across Nalasopara,
            Virar, and Mumbai suburbs. From consultation to final touch, every detail is designed for confidence,
            camera-ready elegance, and all-day comfort.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-700">
            Our style philosophy balances glam impact with skin realism so your look remains timeless in person and
            across photos and reels.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {features.map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-300 bg-white p-4 shadow-sm">
                <item.icon className="mb-2 text-[var(--rose-gold)]" size={18} />
                <p className="font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
