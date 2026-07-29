import { motion } from "framer-motion";
import { Clock3, MapPin, PhoneCall, Send, Sparkles } from "lucide-react";
import { contactVisuals, imageFallback } from "../siteData";
import MagneticButton from "./MagneticButton";
import SafeImage from "./SafeImage";

function ContactSection() {
	return (
		<section
			id="contact"
			className="relative overflow-hidden bg-[var(--bg-main)] py-24 md:py-32"
		>
			<div className="section-mesh absolute inset-0" />
			<div className="absolute -left-20 top-14 h-64 w-64 rounded-full bg-[var(--gold)]/9 blur-3xl" />
			<div className="absolute right-0 top-44 h-72 w-72 rounded-full bg-[var(--soft-pink)]/10 blur-3xl" />
			<div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					className="hover-lift-card relative overflow-hidden rounded-3xl border border-rose-300/10 bg-[var(--bg-secondary)]/60 p-7"
				>
					<div className="pointer-events-none absolute -right-12 -top-10 h-44 w-44 overflow-hidden rounded-full border border-rose-300/10">
						<SafeImage
							src={contactVisuals.accent}
							fallbackSrc={imageFallback}
							alt="Beauty product accent"
							className="h-full w-full object-cover opacity-35"
						/>
					</div>

					<p className="section-kicker text-[var(--soft-pink)]">
						<Sparkles size={14} /> Contact Us
					</p>
					<h2 className="mt-3 text-balance text-4xl text-[var(--cream)]">
						Book Your Consultation
					</h2>
					<p className="mt-3 max-w-xl text-sm text-[var(--text-muted)]">
						Share your event details and preferred style. Our team will guide
						you with package fit, schedule options, and booking confirmation.
					</p>

					<form className="mt-7 grid gap-4 sm:grid-cols-2">
						<input
							type="text"
							placeholder="Full Name"
							className="rounded-2xl border border-rose-300/10 bg-white/5 px-4 py-3 text-[var(--text-light)] placeholder:text-[var(--text-muted)]/80"
						/>
						<input
							type="tel"
							placeholder="Phone Number"
							className="rounded-2xl border border-rose-300/10 bg-white/5 px-4 py-3 text-[var(--text-light)] placeholder:text-[var(--text-muted)]/80"
						/>
						<input
							type="email"
							placeholder="Email Address"
							className="rounded-2xl border border-rose-300/10 bg-white/5 px-4 py-3 text-[var(--text-light)] placeholder:text-[var(--text-muted)]/80 sm:col-span-2"
						/>
						<textarea
							rows="4"
							placeholder="Tell us your event date and preferred look"
							className="rounded-2xl border border-rose-300/10 bg-white/5 px-4 py-3 text-[var(--text-light)] placeholder:text-[var(--text-muted)]/80 sm:col-span-2"
						/>
						<button
							type="button"
							className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-6 py-3 font-semibold text-[var(--text-light)] sm:col-span-2"
						>
							Send Inquiry <Send size={16} />
						</button>
					</form>
				</motion.div>

				<div className="space-y-5">
					<div className="image-frame-luxury relative overflow-hidden rounded-3xl border border-rose-300/10 bg-[var(--bg-secondary)]/60">
						<SafeImage
							src={contactVisuals.interior}
							fallbackSrc={imageFallback}
							alt="Luxury salon interior"
							className="h-44 w-full object-cover"
						/>
						<div className="luxury-overlay absolute inset-0" />
						<div className="border-t border-rose-300/10 px-4 py-3">
							<p className="text-[10px] uppercase tracking-[0.2em] text-[var(--soft-pink)]">
								Studio Ambience
							</p>
							<p className="mt-1 text-sm text-[var(--cream)]">
								Private luxury setup with premium lighting and comfort-focused
								prep zone.
							</p>
						</div>
					</div>

					<div className="premium-panel rounded-3xl p-6">
						<p className="inline-flex items-center gap-2 text-sm text-[var(--cream)]">
							<MapPin size={16} className="text-[var(--gold)]" /> Gulmohar Heritage, Building No.3, E-Wing, Shop No.6, Nr. Fun Fiesta, Shriprashta Nallasopara (W)
						</p>
						<p className="mt-2 inline-flex items-center gap-2 text-sm text-[var(--cream)]">
							<PhoneCall size={16} className="text-[var(--gold)]" /> +91 9601 960 108
						</p>

						<div className="mt-5 grid gap-3 sm:grid-cols-2">
							<MagneticButton
								as="a"
								href="tel:+919601960108"
								className="rounded-full border border-rose-300/20 px-4 py-2 text-center text-sm text-[var(--text-light)]"
								data-cursor="Call"
							>
								Call Now
							</MagneticButton>
							<MagneticButton
								as="a"
								href="https://wa.me/919601960108"
								target="_blank"
								rel="noreferrer"
								className="rounded-full bg-emerald-500 px-4 py-2 text-center text-sm font-medium text-[var(--text-light)]"
								data-cursor="Chat"
							>
								WhatsApp
							</MagneticButton>
						</div>
					</div>

					<div className="premium-panel rounded-3xl p-6">
						<p className="inline-flex items-center gap-2 text-sm text-[var(--cream)]">
							<Clock3 size={16} className="text-[var(--gold)]" /> Business Hours
						</p>
						<p className="mt-2 text-sm text-[var(--text-muted)]">
							Mon - Sun: 10:30 AM to 9:30 PM
						</p>
						<p className="mt-1 text-sm text-[var(--text-muted)]">
							Bridal slots available on priority booking.
						</p>
					</div>

					<div className="map-wrap relative h-56 overflow-hidden rounded-3xl border border-rose-300/10">
						<SafeImage
							src={contactVisuals.ambience}
							fallbackSrc={imageFallback}
							alt="Salon ambience overlay"
							className="absolute inset-0 h-full w-full object-cover opacity-18"
						/>
						<div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/30" />
						<p className="absolute left-3 top-3 z-20 rounded-full border border-rose-300/20 bg-[var(--bg-secondary)]/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--text-light)]/90">
							Studio Location
						</p>
						<iframe
							loading="lazy"
							allowFullScreen
							referrerPolicy="no-referrer-when-downgrade"
							src="https://www.google.com/maps?q=Nalasopara+West&output=embed"
							title="Salon Location"
							className="relative z-10"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactSection;
