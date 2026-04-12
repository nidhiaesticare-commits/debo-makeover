import { motion } from 'framer-motion';
import { Heart, Instagram } from 'lucide-react';
import { salonImages } from '../siteData';

function InstagramSection() {
  return (
    <section className="bg-[var(--cream)] py-20 text-zinc-900 md:py-28">
      <div className="section-shell">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl md:text-5xl">Instagram Community</h2>
            <p className="mt-3 max-w-2xl text-zinc-600">
              Join 12K+ beauty lovers following bridal reels, transformation stories, and premium glam inspiration.
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white"
          >
            Follow on Instagram
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {salonImages.slice(0, 4).map((image, index) => (
            <motion.a
              key={image}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.07 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <img src={image} alt="Instagram preview" className="h-72 w-full object-cover transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/45" />
              <div className="absolute bottom-4 left-4 flex translate-y-3 items-center gap-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <Instagram className="text-white" size={16} />
                <span className="text-sm text-white">@debo_makeover_official</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-700">
          <Heart size={16} className="text-rose-500" /> 12.4K followers and growing
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;
