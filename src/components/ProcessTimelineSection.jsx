import { motion } from "framer-motion";
import {
	Brush,
	CalendarDays,
	CheckCircle2,
	Droplets,
	Sparkles,
	WandSparkles,
} from "lucide-react";
import { processTimeline } from "../siteData";

const icons = [
	CalendarDays,
	Droplets,
	Sparkles,
	WandSparkles,
	Brush,
	CheckCircle2,
];

function ProcessTimelineSection() {
	return (
		<section className="bg-[var(--bg-main)] py-24 md:py-32">
			<div className="section-shell">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					className="mx-auto max-w-3xl text-center"
				>
					<span className="section-kicker text-[var(--soft-pink)]">
						Service Process Timeline
					</span>
					<h2 className="mt-4 text-balance text-4xl text-[var(--cream)] md:text-5xl">
						A Calm, Structured Process For Flawless Event-Day Beauty
					</h2>
				</motion.div>

				<div className="relative mx-auto mt-14 max-w-5xl">
					<div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--gold)]/0 via-[var(--gold)]/60 to-[var(--gold)]/0 md:block" />
					<div className="space-y-6">
						{processTimeline.map((step, index) => {
							const Icon = icons[index % icons.length];
							return (
								<motion.article
									key={step.title}
									initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, amount: 0.25 }}
									transition={{ duration: 0.55, delay: index * 0.03 }}
									className="relative rounded-3xl border border-white/12 bg-white/5 p-6 md:ml-12"
								>
									<span className="absolute -left-14 top-6 hidden h-8 w-8 items-center justify-center rounded-full border border-[var(--gold)]/45 bg-white/60 backdrop-blur-md text-xs font-semibold text-[var(--gold)] md:flex">
										{index + 1}
									</span>
									<div className="flex items-start gap-4">
										<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-rose-300/10 bg-white/6 text-[var(--gold)]">
											<Icon size={18} />
										</span>
										<div>
											<h3 className="text-xl text-[var(--cream)]">
												{step.title}
											</h3>
											<p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
												{step.body}
											</p>
										</div>
									</div>
								</motion.article>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProcessTimelineSection;
