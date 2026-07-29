import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clock3, Sparkles, Star, X } from "lucide-react";
import { useState } from "react";
import { imageFallback, services } from "../siteData";
import MagneticButton from "./MagneticButton";
import SafeImage from "./SafeImage";

function ServicesSection() {
	const [activeService, setActiveService] = useState(null);

	return (
		<section
			id="services"
			className="relative overflow-hidden bg-[var(--bg-secondary)] py-24 md:py-32"
		>
			<div className="section-mesh absolute inset-0" />
			<div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-3xl" />
			<div className="absolute right-0 top-64 h-72 w-72 rounded-full bg-[var(--rose-gold)]/10 blur-3xl" />

			<div className="section-shell">
				<h2 className="text-center text-4xl text-[var(--cream)] md:text-5xl">
					Premium Services Experience
				</h2>
				<p className="mx-auto mt-4 max-w-3xl text-center text-[var(--text-muted)]">
					Curated artistry for bridal, engagement, party glam, and complete
					style finishing.
				</p>

				<div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
					{services.map((service, index) => (
						<motion.article
							key={service.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.45, delay: index * 0.05 }}
							whileHover={{ y: -5 }}
							className="premium-card hover-lift-card group overflow-hidden rounded-3xl border border-rose-300/10 bg-[var(--bg-secondary)]/40"
							data-cursor="View"
						>
							<div className="relative h-64 overflow-hidden">
								<span className="glass-tag absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--text-light)]">
									{service.badge}
								</span>
								<SafeImage
									src={service.image}
									fallbackSrc={imageFallback}
									alt={`${service.title} premium service visual`}
									className={`h-full w-full transition duration-500 group-hover:scale-110 ${
										service.imageFit === "contain"
											? "object-contain bg-white/75 p-3"
											: "object-cover"
									}`}
								/>
								<div className="luxury-overlay absolute inset-0" />

								<div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 transition group-hover:opacity-100">
									{service.chips.slice(0, 2).map((chip) => (
										<span
											key={chip}
											className="rounded-full border border-rose-300/25 bg-white/55 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-[var(--text-light)]/90"
										>
											{chip}
										</span>
									))}
								</div>
							</div>

							<div className="p-6">
								<p className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--soft-pink)]">
									<Sparkles size={14} /> Signature Service
								</p>
								<h3 className="text-2xl text-[var(--cream)]">
									{service.title}
								</h3>
								<p className="mt-2 text-sm text-[var(--text-muted)]">
									{service.description}
								</p>

								<div className="mt-4 flex flex-wrap gap-2">
									{service.chips.map((chip) => (
										<span
											key={chip}
											className="rounded-full border border-rose-300/15 bg-white/7 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--text-light)]/80"
										>
											{chip}
										</span>
									))}
								</div>

								<p className="mt-3 text-sm font-semibold text-[var(--gold)]">
									{service.price}
								</p>

								<div className="mt-5 flex items-center gap-4">
									<button
										type="button"
										onClick={() => setActiveService(service)}
										className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-light)]"
										data-cursor="Details"
									>
										View Details <ArrowUpRight size={16} />
									</button>

									<MagneticButton
										as="a"
										href="https://debobeautybridalstudio.setmore.com/"
										target="_blank"
										rel="noreferrer"
										data-cursor="Book"
										className="rounded-full border border-rose-300/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-light)]"
									>
										Book Now
									</MagneticButton>
								</div>
							</div>
						</motion.article>
					))}
				</div>
			</div>

			<AnimatePresence>
				{activeService && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[95] flex items-center justify-center bg-white/85 p-4"
					>
						<motion.div
							initial={{ y: 20, opacity: 0, scale: 0.95 }}
							animate={{ y: 0, opacity: 1, scale: 1 }}
							exit={{ y: 20, opacity: 0, scale: 0.95 }}
							className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-rose-300/10 bg-[#0e0e0e] p-6 scrollbar-gold md:p-8"
						>
							<button
								type="button"
								onClick={() => setActiveService(null)}
								className="absolute right-4 top-4 rounded-full border border-rose-300/15 bg-white/5 p-2 text-[var(--text-light)]"
								aria-label="Close service details"
							>
								<X size={16} />
							</button>

							<div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
								<div>
									<SafeImage
										src={activeService.image}
										fallbackSrc={imageFallback}
										alt={`${activeService.title} detail visual`}
										className={`h-72 w-full rounded-2xl md:h-full ${
											activeService.imageFit === "contain"
												? "object-contain bg-pink-950/80 p-3"
												: "object-cover"
										}`}
									/>
								</div>

								<div>
									<span className="inline-flex items-center gap-2 rounded-full border border-rose-300/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--soft-pink)]">
										<Star
											size={12}
											className="text-[var(--gold)]"
											fill="currentColor"
										/>{" "}
										{activeService.badge}
									</span>
									<h3 className="mt-3 text-3xl text-[var(--cream)]">
										{activeService.title}
									</h3>
									<p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
										{activeService.details}
									</p>

									<div className="mt-5 grid gap-3 sm:grid-cols-2">
										<div className="rounded-2xl border border-rose-300/10 bg-white/5 p-4">
											<p className="text-[10px] uppercase tracking-[0.18em] text-[var(--soft-pink)]">
												Price Range
											</p>
											<p className="mt-1 text-lg font-semibold text-[var(--gold)]">
												{activeService.price}
											</p>
										</div>
										<div className="rounded-2xl border border-rose-300/10 bg-white/5 p-4">
											<p className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[var(--soft-pink)]">
												<Clock3 size={12} /> Duration
											</p>
											<p className="mt-1 text-lg font-semibold text-[var(--cream)]">
												{activeService.duration}
											</p>
										</div>
									</div>

									<div className="mt-5 rounded-2xl border border-rose-300/10 bg-white/5 p-4">
										<p className="text-[10px] uppercase tracking-[0.18em] text-[var(--soft-pink)]">
											Recommended For
										</p>
										<p className="mt-2 text-sm text-[var(--cream)]/90">
											{activeService.recommendedFor}
										</p>
									</div>

									<div className="mt-5">
										<p className="text-[10px] uppercase tracking-[0.18em] text-[var(--soft-pink)]">
											Related Services
										</p>
										<div className="mt-2 flex flex-wrap gap-2">
											{activeService.related.map((service) => (
												<span
													key={service}
													className="rounded-full border border-rose-300/15 bg-white/8 px-3 py-1 text-xs text-[var(--cream)]"
												>
													{service}
												</span>
											))}
										</div>
									</div>

									<MagneticButton
										as="a"
										href="https://debobeautybridalstudio.setmore.com/"
										target="_blank"
										rel="noreferrer"
										className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-6 py-3 font-semibold text-[var(--text-light)]"
										data-cursor="Book"
									>
										Book This Service
									</MagneticButton>
								</div>
							</div>

							<div className="mt-6 grid gap-4 sm:grid-cols-2">
								<div className="overflow-hidden rounded-2xl border border-rose-300/10">
									<SafeImage
										src={activeService.before}
										fallbackSrc={imageFallback}
										alt={`${activeService.title} before`}
										className={`h-48 w-full ${
											activeService.imageFit === "contain"
												? "object-contain bg-pink-950/80 p-2"
												: "object-cover"
										}`}
									/>
									<p className="p-3 text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
										Before
									</p>
								</div>
								<div className="overflow-hidden rounded-2xl border border-rose-300/10">
									<SafeImage
										src={activeService.after}
										fallbackSrc={imageFallback}
										alt={`${activeService.title} after`}
										className={`h-48 w-full ${
											activeService.imageFit === "contain"
												? "object-contain bg-pink-950/80 p-2"
												: "object-cover"
										}`}
									/>
									<p className="p-3 text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
										After
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}

export default ServicesSection;
