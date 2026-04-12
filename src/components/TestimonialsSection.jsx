import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { testimonials } from '../siteData';
import 'swiper/css';

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[var(--bg-main)] py-20 md:py-28">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-4xl text-[var(--cream)] md:text-5xl"
        >
          Loved By Our Clients
        </motion.h2>

        <Swiper
          className="mt-12"
          modules={[Autoplay]}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <article className="h-full rounded-3xl border border-white/15 bg-white/5 p-6">
                <Quote className="text-[var(--gold)]" size={24} />
                <p className="mt-4 text-sm leading-relaxed text-[var(--cream)]/85">{item.quote}</p>

                <div className="mt-6 flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-[var(--cream)]">{item.name}</p>
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--soft-pink)]">{item.type}</p>
                  </div>
                </div>

                <div className="mt-4 flex gap-1 text-[var(--gold)]">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialsSection;
