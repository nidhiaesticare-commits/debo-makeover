import { motion } from 'framer-motion';
import { Heart, Instagram, MessageCircle, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';
import SafeImage from './SafeImage';
import { imageFallback, instagramPosts } from '../siteData';

function InstagramSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream)] py-20 text-zinc-900 md:py-28">
      <div className="section-mesh absolute inset-0" />
      <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-[var(--soft-pink)]/35 blur-3xl" />
      <div className="section-shell">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="section-kicker border-zinc-900/20 text-zinc-700">
              <Sparkles size={13} /> Instagram Community
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl">Where Brides Discover Their Signature Look</h2>
            <p className="mt-3 max-w-2xl text-zinc-600">
              Join 12K+ beauty lovers following bridal reels, transformation stories, and premium glam inspiration.
            </p>
          </div>

          <MagneticButton
            as="a"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white"
            data-cursor="Follow"
          >
            Follow on Instagram
          </MagneticButton>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={`${post.image}-${index}`}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -4 }}
              className="group image-frame-luxury hover-lift-card relative overflow-hidden rounded-3xl border border-zinc-300"
              data-cursor="View Look"
            >
              <SafeImage
                src={post.image}
                fallbackSrc={imageFallback}
                alt="Instagram preview"
                className="h-72 w-full object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/45" />
              <div className="absolute bottom-4 left-4 flex translate-y-3 items-center gap-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <Instagram className="text-white" size={16} />
                <span className="text-sm text-white">@debo_makeover_official</span>
              </div>

              <div className="absolute left-4 top-4 flex gap-2 opacity-0 transition group-hover:opacity-100">
                <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-white">
                  <Heart size={11} /> {post.likes}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-white">
                  <MessageCircle size={11} /> {post.comments}
                </span>
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
