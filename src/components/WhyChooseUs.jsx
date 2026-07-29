import { motion } from "framer-motion";
import {
	Clock3,
	Gem,
	ShieldCheck,
	Sparkles,
	Star,
	UserRoundCheck,
} from "lucide-react";
import { imageFallback, whyChoosePoints } from "../siteData";
import SafeImage from "./SafeImage";

const icons = [Gem, UserRoundCheck, Sparkles, Star, ShieldCheck, Clock3];

function WhyChooseUs() {
	return (
		<section className="relative overflow-hidden bg-[var(--bg-main)] py-24 md:py-32">
			<div className="section-mesh absolute inset-0" />
			<div className="section-shell">
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					className="mx-auto max-w-3xl text-center"
				>
					<span className="section-kicker text-[var(--soft-pink)]">
						Why Choose Us
					</span>
					<h2 className="mt-4 text-balance text-4xl text-[var(--cream)] md:text-5xl">
						Designed For Brides Who Want Premium Confidence
					</h2>
				</motion.div>

				<div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
					{whyChoosePoints.map((item, index) => {
						const Icon = icons[index % icons.length];

						return (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.35, delay: index * 0.04 }}
								whileHover={{ y: -5 }}
								className="group hover-lift-card relative overflow-hidden rounded-3xl border border-rose-300/10 bg-gradient-to-br from-white/10 to-white/0 p-6"
								data-cursor="Explore"
							>
								<div className="absolute inset-0">
									<SafeImage
										src={item.image}
										fallbackSrc={imageFallback}
										alt={`${item.title} supporting visual`}
										className="h-full w-full object-cover opacity-18"
									/>
									<div className="absolute inset-0 bg-gradient-to-br from-black/72 via-black/55 to-black/80" />
								</div>

								<div className="relative z-10">
									<Icon
										className="text-[var(--gold)] transition duration-300 group-hover:scale-110 group-hover:rotate-6"
										size={24}
									/>
									<h3 className="mt-4 text-xl text-[var(--cream)]">
										{item.title}
									</h3>
									<p className="mt-2 text-sm text-[var(--text-muted)]">
										{item.description}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default WhyChooseUs;
