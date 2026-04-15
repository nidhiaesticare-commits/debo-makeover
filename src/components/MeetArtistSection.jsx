import { motion } from 'framer-motion';
import { Award, BadgeCheck, Sparkles } from 'lucide-react';
import { artistProfile } from '../siteData';
import SafeImage from './SafeImage';

function MeetArtistSection() {
  return (
    <section className="bg-[var(--cream)] py-20 text-zinc-900 md:py-28">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 rounded-2xl border border-zinc-900/15 bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-700 shadow-lg">
            Meet The Artist
          </div>
          <SafeImage
            src={artistProfile.image}
            fallbackSrc={artistProfile.gallery?.[0]}
            alt={artistProfile.name}
            className="h-[560px] w-full rounded-3xl object-cover shadow-2xl shadow-black/20"
          />

          <div className="absolute -right-3 top-16 hidden w-36 gap-3 sm:grid">
            {artistProfile.gallery?.slice(0, 2).map((image, index) => (
              <div key={image} className="overflow-hidden rounded-2xl border border-zinc-900/15 bg-white p-1 shadow-xl">
                <SafeImage
                  src={image}
                  fallbackSrc={artistProfile.image}
                  alt={`Artist working shot ${index + 1}`}
                  className="h-24 w-full rounded-xl object-cover"
                />
              </div>
            ))}
          </div>

          <div className="absolute -bottom-6 right-6 rounded-2xl border border-zinc-900/15 bg-white/95 p-4 shadow-xl backdrop-blur">
            <p className="text-3xl font-semibold text-zinc-900">5+ Years</p>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Experience</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-kicker border-zinc-900/20 text-zinc-700">
            <Sparkles size={13} /> Founder Story
          </span>
          <h2 className="mt-4 text-balance text-4xl md:text-5xl">{artistProfile.name}</h2>
          <p className="mt-5 leading-relaxed text-zinc-700">{artistProfile.story}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-300/80 bg-white p-5">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-700">
                <BadgeCheck size={14} className="text-[var(--rose-gold)]" /> Specialties
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                {artistProfile.specialties.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-300/80 bg-white p-5">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-700">
                <Award size={14} className="text-[var(--rose-gold)]" /> Certifications
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                {artistProfile.certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <blockquote className="mt-7 border-l-2 border-[var(--rose-gold)] pl-4 italic leading-relaxed text-zinc-700">
            "{artistProfile.quote}"
          </blockquote>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {artistProfile.gallery?.map((image, index) => (
              <div key={`${image}-${index}`} className="overflow-hidden rounded-2xl border border-zinc-300/90 bg-white p-1">
                <SafeImage
                  src={image}
                  fallbackSrc={artistProfile.image}
                  alt={`Artist portfolio supporting image ${index + 1}`}
                  className="h-20 w-full rounded-xl object-cover"
                />
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Debo Makeover Signature
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default MeetArtistSection;
