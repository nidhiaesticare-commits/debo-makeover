import { BadgeCheck, Quote, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SafeImage from './SafeImage';
import { featuredIn, googleReviews, imageFallback, testimonials } from '../siteData';
import 'swiper/css';

function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[var(--bg-main)] py-20 md:py-28">
      <div className="section-mesh absolute inset-0" />
      <div className="absolute -left-16 top-14 h-60 w-60 rounded-full bg-[var(--soft-pink)]/12 blur-3xl" />
      <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-[var(--gold)]/10 blur-3xl" />
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-8 rounded-2xl border border-white/15 bg-gradient-to-r from-white/10 to-white/5 px-5 py-4 text-center text-sm text-[var(--cream)]"
        >
          Trusted by 500+ clients in Nalasopara, Virar & Vasai
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-4xl text-[var(--cream)] md:text-5xl"
        >
          Loved By Our Clients
        </motion.h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-[var(--text-muted)]">
          Genuine stories from bridal, engagement, and party clients who trusted us with their biggest moments.
        </p>

        <Swiper
          className="mt-12"
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <article className="hover-lift-card h-full rounded-3xl border border-white/15 bg-white/7 p-6">
                <Quote className="text-[var(--gold)]" size={24} />
                <p className="mt-4 text-sm leading-relaxed text-[var(--cream)]/85">{item.quote}</p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="image-frame-luxury h-12 w-12 overflow-hidden rounded-full">
                    <SafeImage
                      src={item.image}
                      fallbackSrc={imageFallback}
                      alt={`${item.name} profile photo`}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--cream)]">{item.name}</p>
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--soft-pink)]">{item.type}</p>
                  </div>
                </div>

                {item.before && item.after && (
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="overflow-hidden rounded-xl border border-white/15">
                      <SafeImage
                        src={item.before}
                        fallbackSrc={imageFallback}
                        alt={`${item.name} before transformation`}
                        className="h-16 w-full object-cover"
                      />
                      <p className="px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)]">Before</p>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-white/15">
                      <SafeImage
                        src={item.after}
                        fallbackSrc={imageFallback}
                        alt={`${item.name} after transformation`}
                        className="h-16 w-full object-cover"
                      />
                      <p className="px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)]">After</p>
                    </div>
                  </div>
                )}

                <div className="mt-4 flex gap-1 text-[var(--gold)]">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {googleReviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl border border-white/15 bg-black/45 p-5"
            >
              <p className="text-sm font-semibold text-[var(--cream)]">{review.name}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">{review.source} Review</p>
              <div className="mt-2 flex gap-1 text-[var(--gold)]">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{review.comment}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 rounded-3xl border border-white/15 bg-white/5 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-[var(--cream)]">
              <Sparkles size={15} className="text-[var(--gold)]" /> Average Rating 4.9 / 5.0
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">Google | Instagram | WhatsApp Referrals</p>
          </div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--cream)]">
            <BadgeCheck size={14} className="text-[var(--gold)]" /> Verified Client Feedback
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/12 bg-black/40 p-6">
          <p className="text-center text-xs uppercase tracking-[0.22em] text-[var(--soft-pink)]">Featured In</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featuredIn.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-center text-sm font-medium text-[var(--cream)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
