import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import CountUp from "react-countup";
import { heroHighlights, heroMedia } from "../siteData";
import MagneticButton from "./MagneticButton";

function HeroSection() {
	const sectionRef = useRef(null);
	const [primaryHovered, setPrimaryHovered] = useState(false);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
	const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

	const textReveal = {
		hidden: { opacity: 0, y: 22 },
		show: (index) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				delay: 0.2 + 0.15 * index,
				ease: [0.22, 1, 0.36, 1],
			},
		}),
	};

	return (
		<section
			id="home"
			ref={sectionRef}
			className="relative min-h-screen overflow-hidden hero-scroll-snap flex flex-col justify-end pb-24 md:pb-32"
		>
			{/* Background Image with Parallax & Slow Entry Animation */}
			<motion.div
				style={{ y, scale: bgScale }}
				initial={{ scale: 1.15, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1.8, ease: "easeOut" }}
				className="absolute inset-0 bg-cover bg-center"
				aria-hidden
				role="presentation"
			>
				<div
					className="h-full w-full bg-cover bg-center"
					style={{ backgroundImage: `url(${heroMedia.background})` }}
				/>
			</motion.div>

			{/* Subtle glow for text readability without washing out the image */}
			<div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent mix-blend-overlay" />
			<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent" />

			{/* World-Class Editorial Inner Frame (Hidden on small screens for space) */}
			<div className="pointer-events-none absolute inset-5 md:inset-8 z-20 rounded-[1.8rem] border border-rose-300/10 mix-blend-overlay hidden sm:block" />
			<div className="pointer-events-none absolute inset-6 md:inset-9 z-20 rounded-[1.6rem] border border-[var(--gold)]/20 hidden sm:block" />

			<div className="section-shell relative z-10 w-full mt-auto pt-40">
				<div className="max-w-3xl">
					<motion.p
						className="inline-flex items-center gap-2 rounded-full border border-rose-300/15 bg-[var(--bg-secondary)]/60 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[var(--gold)] backdrop-blur-md mb-6"
						custom={0}
						variants={textReveal}
						initial="hidden"
						animate="show"
					>
						<Sparkles size={12} /> International Luxury Bridal & Glam Studio
					</motion.p>

					<div className="space-y-2">
						<motion.h1
							className="text-balance text-[clamp(2.8rem,7vw,5.5rem)] font-light leading-[1.05] tracking-tight text-[var(--text-light)] drop-shadow-2xl"
							custom={1}
							variants={textReveal}
							initial="hidden"
							animate="show"
						>
							Redefining Beauty,
						</motion.h1>
						<motion.h1
							className="text-balance text-[clamp(2.4rem,6vw,4.8rem)] font-light leading-[1.05] tracking-tight text-[var(--text-light)]/90 drop-shadow-2xl italic"
							custom={2}
							variants={textReveal}
							initial="hidden"
							animate="show"
						>
							Confidence & Elegance.
						</motion.h1>
					</div>

					<motion.p
						className="mt-8 max-w-xl text-[1rem] leading-[1.8] text-[var(--text-light)] drop-shadow-md sm:text-[1.1rem]"
						custom={3}
						variants={textReveal}
						initial="hidden"
						animate="show"
					>
						Premium bridal artistry and modern glam transformations crafted
						for moments that deserve to feel unforgettable. Book your consultation today.
					</motion.p>

					<motion.div
						className="mt-10 flex flex-col gap-5 sm:flex-row items-center"
						custom={4}
						variants={textReveal}
						initial="hidden"
						animate="show"
					>
						<MagneticButton
							as="a"
							href="https://debobeautybridalstudio.setmore.com/"
							target="_blank"
							rel="noreferrer"
							data-cursor="Book"
							onHoverStart={() => setPrimaryHovered(true)}
							onHoverEnd={() => setPrimaryHovered(false)}
							className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-8 py-4 text-[0.95rem] font-semibold text-white shadow-[0_10px_30px_rgba(255,64,129,0.3)] transition-all hover:scale-105 sm:w-auto"
						>
							Book Appointment
							<motion.span
								animate={{ x: primaryHovered ? 5 : 0 }}
								transition={{ duration: 0.24 }}
							>
								<ArrowRight size={17} />
							</motion.span>
						</MagneticButton>

						<a
							href="#services"
							className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[var(--text-light)] transition-colors hover:text-[var(--gold)]"
						>
							Explore Services
						</a>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.a
				href="#about"
				data-cursor="Scroll"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
				className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--text-light)]/70 hover:text-[var(--text-light)] transition-colors hidden md:flex"
			>
				Scroll
				<motion.span
					animate={{ y: [0, 8, 0] }}
					transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
				>
					<ArrowDown size={16} />
				</motion.span>
			</motion.a>
		</section>
	);
}

export default HeroSection;
