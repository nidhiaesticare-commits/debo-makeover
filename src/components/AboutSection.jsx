import { motion } from "framer-motion";
import {
	Award,
	HeartHandshake,
	ShieldCheck,
	Sparkles,
	WandSparkles,
} from "lucide-react";
import { aboutCollage, imageFallback } from "../siteData";
import SafeImage from "./SafeImage";

const features = [
	{
		title: "Premium Products",
		body: "Luxury-grade formulas selected for long-wear event coverage.",
		icon: Sparkles,
	},
	{
		title: "Personalized Looks",
		body: "Every look is tailored to your features, outfit, and event lighting.",
		icon: HeartHandshake,
	},
	{
		title: "Certified Artist",
		body: "Professional training with advanced bridal and HD glam specialization.",
		icon: Award,
	},
	{
		title: "Hygienic Tools",
		body: "Strict hygiene protocol with sanitized brushes and disposables.",
		icon: ShieldCheck,
	},
];

const collageLayouts = [
	"sm:col-span-2 lg:col-span-4 lg:row-span-4",
	"lg:col-span-2 lg:row-span-3",
	"lg:col-span-3 lg:row-span-2 lg:row-start-5",
	"lg:col-span-3 lg:row-span-3 lg:row-start-4",
	"sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:row-start-1 lg:translate-y-6",
];

function AboutSection() {
	return (
		<section
			id="about"
			className="relative overflow-hidden bg-[var(--cream)] py-24 text-[var(--text-light)] md:py-32"
		>
			<div className="section-mesh absolute inset-0" />
			<div className="absolute -right-24 top-4 h-56 w-56 rounded-full bg-[var(--soft-pink)]/40 blur-3xl" />
			<div className="absolute left-0 top-1/3 h-64 w-64 rounded-full bg-[var(--gold)]/12 blur-3xl" />
			<div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					className="relative"
				>
					<div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6 lg:grid-rows-6 lg:min-h-[620px]">
						{aboutCollage.map((item, index) => (
							<figure
								key={item.label}
								className={`group image-frame-luxury hover-lift-card relative overflow-hidden rounded-[1.6rem] ${collageLayouts[index]}`}
							>
								<SafeImage
									src={item.image}
									fallbackSrc={imageFallback}
									alt={item.alt}
									className={`h-full min-h-[180px] w-full transition duration-500 group-hover:scale-105 ${
										item.fit === "contain"
											? "object-contain bg-white/60 backdrop-blur-md p-2"
											: "object-cover"
									} ${index === 0 ? "mobile-image-safe" : ""}`}
								/>
								<div className="luxury-overlay absolute inset-0" />
								<figcaption className="glass-tag absolute bottom-3 left-3 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--text-light)]">
									{item.label}
								</figcaption>
							</figure>
						))}
					</div>

					<div className="pointer-events-none absolute -bottom-5 right-4 hidden rounded-2xl border border-pink-400/40 bg-pink-200/80 px-4 py-3 shadow-lg backdrop-blur-md md:block">
						<p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]/80">
							Luxury Direction
						</p>
						<p className="mt-1 text-sm font-medium text-[var(--text-light)]">
							Campaign-level beauty storytelling
						</p>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					<span className="section-kicker border-pink-400/30 text-[var(--text-muted)]">
						<WandSparkles size={13} />
						About Us
					</span>

					<h2 className="mt-4 text-balance text-4xl md:text-5xl">
						Where Signature Beauty Meets Editorial Bridal Storytelling
					</h2>

					<p className="mt-5 leading-relaxed text-[var(--text-muted)]">
						Debo Makeover Official crafts bespoke beauty journeys for brides and
						modern women across Nalasopara, Virar, and Mumbai suburbs. From
						consultation to final touch, every detail is designed for
						confidence, camera-ready elegance, and all-day comfort.
					</p>

					<p className="mt-4 leading-relaxed text-[var(--text-muted)]">
						Our style philosophy balances glam impact with skin realism so your
						look remains timeless in person and across photos and reels.
					</p>

					<div className="mt-5 rounded-2xl border border-pink-300 bg-white/60 backdrop-blur-md p-4">
						<p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]/80">
							Signature Promise
						</p>
						<p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
							Personalized consultation, luxury product selection, and calm
							event-day execution to help you feel fully prepared and confident.
						</p>
					</div>

					<div className="mt-7 grid gap-3 sm:grid-cols-2">
						{features.map((item) => (
							<div
								key={item.title}
								className="rounded-2xl border border-pink-300 bg-white/60 backdrop-blur-md p-4 shadow-sm"
							>
								<item.icon className="mb-2 text-[var(--rose-gold)]" size={18} />
								<p className="font-medium">{item.title}</p>
								<p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
									{item.body}
								</p>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default AboutSection;
