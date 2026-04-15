import { motion } from 'framer-motion';
import { CalendarCheck2, CheckCircle2, MessageCircleHeart, Sparkles, TriangleAlert } from 'lucide-react';
import { useMemo, useState } from 'react';
import MagneticButton from './MagneticButton';
import { bookingOptions } from '../siteData';

function BookingCTA() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    slot: '',
    name: '',
    phone: '',
    city: '',
    note: '',
  });

  const steps = ['Service', 'Date', 'Time Slot', 'Details', 'Confirm'];

  const canProceed = useMemo(() => {
    if (step === 1) {
      return Boolean(formData.service);
    }
    if (step === 2) {
      return Boolean(formData.date);
    }
    if (step === 3) {
      return Boolean(formData.slot);
    }
    if (step === 4) {
      return Boolean(formData.name && formData.phone);
    }
    return true;
  }, [formData, step]);

  const updateField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const onNext = () => {
    if (!canProceed) {
      return;
    }
    setStep((prev) => Math.min(prev + 1, steps.length));
  };

  const onBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onConfirm = () => {
    setSubmitted(true);
  };

  return (
    <section id="booking" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2a1d16] via-[#5a3a2e] to-[#2a1d16]" />
      <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-[var(--gold)]/25 blur-3xl" />
      <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-[var(--soft-pink)]/25 blur-3xl" />

      <div className="section-shell relative">
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/20 bg-black/30 p-8 md:p-10"
          >
            <span className="section-kicker text-[var(--soft-pink)]">
              <Sparkles size={13} /> Premium Booking Desk
            </span>
            <h2 className="mt-4 text-balance text-4xl text-[var(--cream)] md:text-5xl">
              Your Dream Look Starts With One Booking
            </h2>
            <p className="mt-4 text-[var(--cream)]/80">
              Limited bookings available this month. Reserve early for bridal dates, festive glam, and on-location
              events.
            </p>

            <div className="mt-6 rounded-2xl border border-amber-200/25 bg-amber-300/10 p-4">
              <p className="inline-flex items-center gap-2 text-sm text-amber-100">
                <TriangleAlert size={16} /> Fast filling dates: {bookingOptions.fastFillingDates.join(', ')}
              </p>
            </div>

            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row sm:justify-start">
              <MagneticButton
                as="a"
                href="https://debobeautybridalstudio.setmore.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-7 py-3 font-semibold text-black"
                data-cursor="Book"
              >
                <CalendarCheck2 size={18} /> Book Appointment
              </MagneticButton>
              <MagneticButton
                as="a"
                href="https://wa.me/918787518627"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/8 px-7 py-3 font-medium text-white"
                data-cursor="Chat"
              >
                <MessageCircleHeart size={18} /> WhatsApp Us
              </MagneticButton>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--soft-pink)]">
              Limited bookings available this month
            </p>
          </motion.div>

          <div className="grid gap-4 lg:grid-cols-[1fr_0.45fr]">
            <div className="rounded-3xl border border-white/20 bg-black/35 p-6 md:p-7">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[360px] flex-col items-center justify-center text-center"
                >
                  <motion.span
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 210, damping: 16 }}
                    className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300"
                  >
                    <CheckCircle2 size={30} />
                  </motion.span>
                  <h3 className="mt-5 text-3xl text-[var(--cream)]">Booking Request Confirmed</h3>
                  <p className="mt-3 max-w-md text-sm text-[var(--text-muted)]">
                    Thank you, {formData.name || 'beautiful'}! Our team will contact you shortly on {formData.phone} to
                    finalize your slot.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="flex flex-wrap gap-2">
                    {steps.map((label, index) => (
                      <span
                        key={label}
                        className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.16em] ${
                          step === index + 1
                            ? 'border border-[var(--gold)] bg-[var(--gold)]/20 text-[var(--gold)]'
                            : 'border border-white/20 bg-white/5 text-[var(--text-muted)]'
                        }`}
                      >
                        {index + 1}. {label}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 min-h-[250px]">
                    {step === 1 && (
                      <div>
                        <p className="text-sm uppercase tracking-[0.15em] text-[var(--soft-pink)]">Step 1: Choose Service</p>
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          {bookingOptions.services.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => updateField('service', service)}
                              className={`rounded-2xl border px-3 py-3 text-left text-sm transition ${
                                formData.service === service
                                  ? 'border-[var(--gold)] bg-[var(--gold)]/20 text-[var(--cream)]'
                                  : 'border-white/15 bg-white/5 text-[var(--text-muted)] hover:border-white/35'
                              }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div>
                        <p className="text-sm uppercase tracking-[0.15em] text-[var(--soft-pink)]">Step 2: Choose Date</p>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(event) => updateField('date', event.target.value)}
                          className="mt-3 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white"
                        />
                      </div>
                    )}

                    {step === 3 && (
                      <div>
                        <p className="text-sm uppercase tracking-[0.15em] text-[var(--soft-pink)]">Step 3: Choose Time Slot</p>
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          {bookingOptions.slots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => updateField('slot', slot)}
                              className={`rounded-2xl border px-3 py-3 text-left text-sm transition ${
                                formData.slot === slot
                                  ? 'border-[var(--gold)] bg-[var(--gold)]/20 text-[var(--cream)]'
                                  : 'border-white/15 bg-white/5 text-[var(--text-muted)] hover:border-white/35'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 4 && (
                      <div>
                        <p className="text-sm uppercase tracking-[0.15em] text-[var(--soft-pink)]">Step 4: Personal Details</p>
                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(event) => updateField('name', event.target.value)}
                            placeholder="Full Name"
                            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500"
                          />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(event) => updateField('phone', event.target.value)}
                            placeholder="Phone Number"
                            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500"
                          />
                          <input
                            type="text"
                            value={formData.city}
                            onChange={(event) => updateField('city', event.target.value)}
                            placeholder="City"
                            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 sm:col-span-2"
                          />
                          <textarea
                            rows="3"
                            value={formData.note}
                            onChange={(event) => updateField('note', event.target.value)}
                            placeholder="Event details"
                            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 sm:col-span-2"
                          />
                        </div>
                      </div>
                    )}

                    {step === 5 && (
                      <div>
                        <p className="text-sm uppercase tracking-[0.15em] text-[var(--soft-pink)]">Step 5: Confirm Booking</p>
                        <div className="mt-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-[var(--cream)]/90">
                          <p>
                            <span className="text-[var(--text-muted)]">Service:</span> {formData.service}
                          </p>
                          <p className="mt-1">
                            <span className="text-[var(--text-muted)]">Date:</span> {formData.date}
                          </p>
                          <p className="mt-1">
                            <span className="text-[var(--text-muted)]">Slot:</span> {formData.slot}
                          </p>
                          <p className="mt-1">
                            <span className="text-[var(--text-muted)]">Name:</span> {formData.name}
                          </p>
                          <p className="mt-1">
                            <span className="text-[var(--text-muted)]">Phone:</span> {formData.phone}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={onBack}
                      disabled={step === 1}
                      className="rounded-full border border-white/25 px-5 py-2 text-sm text-white disabled:opacity-50"
                    >
                      Back
                    </button>

                    {step < steps.length ? (
                      <MagneticButton
                        as="button"
                        type="button"
                        onClick={onNext}
                        disabled={!canProceed}
                        className="rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-5 py-2 text-sm font-semibold text-black disabled:opacity-55"
                      >
                        Continue
                      </MagneticButton>
                    ) : (
                      <MagneticButton
                        as="button"
                        type="button"
                        onClick={onConfirm}
                        className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white"
                      >
                        Confirm Booking
                      </MagneticButton>
                    )}
                  </div>
                </>
              )}
            </div>

            <aside className="rounded-3xl border border-white/20 bg-black/35 p-5 lg:sticky lg:top-28 lg:h-fit">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--soft-pink)]">Booking Summary</p>
              <div className="mt-4 space-y-3 text-sm text-[var(--cream)]">
                <p>
                  <span className="text-[var(--text-muted)]">Service:</span> {formData.service || 'Not selected'}
                </p>
                <p>
                  <span className="text-[var(--text-muted)]">Date:</span> {formData.date || 'Not selected'}
                </p>
                <p>
                  <span className="text-[var(--text-muted)]">Slot:</span> {formData.slot || 'Not selected'}
                </p>
                <p>
                  <span className="text-[var(--text-muted)]">Client:</span> {formData.name || 'Not entered'}
                </p>
              </div>

              <div className="mt-5 rounded-2xl border border-white/15 bg-white/7 p-3 text-xs uppercase tracking-[0.16em] text-[var(--soft-pink)]">
                Fast filling dates this month
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingCTA;
