import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useMemo, useState } from "react";
import { imageFallback, portfolio, portfolioStats } from "../siteData";
import MagneticButton from "./MagneticButton";
import SafeImage from "./SafeImage";

function PortfolioSection() {
	const [activeCategory, setActiveCategory] = useState("All");
	const [selectedIndex, setSelectedIndex] = useState(null);
	const [visibleCount, setVisibleCount] = useState(8);
	const [touchStartX, setTouchStartX] = useState(null);

	const categories = useMemo(() => {
		const values = new Set(["All"]);
		portfolio.forEach((item) => { values.add(item.category); });
		return Array.from(values);
	}, []);

	const filtered = useMemo(
		() =>
			activeCategory === "All"
				? portfolio
				: portfolio.filter((item) => item.category === activeCategory),
		[activeCategory],
	);

	const visibleItems = filtered.slice(0, visibleCount);

	const activeItem = selectedIndex === null ? null : filtered[selectedIndex];

	const closeLightbox = () => setSelectedIndex(null);

	const showPrevious = () => {
		setSelectedIndex((prev) => {
			if (prev === null) {
				return null;
			}
			return prev === 0 ? filtered.length - 1 : prev - 1;
		});
	};

	const showNext = () => {
		setSelectedIndex((prev) => {
			if (prev === null) {
				return null;
			}
			return prev === filtered.length - 1 ? 0 : prev + 1;
		});
	};

	const onLightboxTouchStart = (event) => {
		setTouchStartX(event.changedTouches[0]?.clientX ?? null);
	};

	const onLightboxTouchEnd = (event) => {
		const endX = event.changedTouches[0]?.clientX;
		if (touchStartX === null || typeof endX !== "number") {
			return;
		}

		const delta = endX - touchStartX;
		if (Math.abs(delta) < 42) {
			return;
		}

		if (delta < 0) {
			showNext();
			return;
		}

		showPrevious();
	};

	return (
		<section
			id="portfolio"
			className="relative overflow-hidden bg-[var(--cream)] py-24 text-[var(--text-light)] md:py-32"
		>
			<div className="section-mesh absolute inset-0" />
			<div className="section-shell">
				<h2 className="text-center text-4xl md:text-5xl">Portfolio Gallery</h2>
				<p className="mx-auto mt-4 max-w-2xl text-center text-[var(--text-muted)]">
					Instagram-worthy transformations crafted to complement your event
					mood, outfit palette, and camera lighting.
				</p>

				<div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
					{portfolioStats.map((item) => (
						<div
							key={item.label}
							className="rounded-2xl border border-pink-300 bg-white/60 backdrop-blur-md px-4 py-3 text-center"
						>
							<p className="text-2xl font-semibold text-[var(--text-light)]">
								{item.value}
							</p>
							<p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]/80">
								{item.label}
							</p>
						</div>
					))}
				</div>

				<div className="mt-8 flex flex-wrap justify-center gap-3">
					{categories.map((category) => (
						<button
							type="button"
							key={category}
							onClick={() => {
								setActiveCategory(category);
								setVisibleCount(8);
							}}
							data-cursor={category}
							className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
								activeCategory === category
									? "border-zinc-900 bg-zinc-900 text-[var(--text-light)]"
									: "border-pink-300 bg-white/60 backdrop-blur-md text-[var(--text-light)] hover:border-zinc-800"
							}`}
						>
							{category}
						</button>
					))}
				</div>

				<div className="mt-10 grid auto-rows-[220px] gap-5 sm:grid-cols-2 lg:grid-cols-6">
					{visibleItems.map((item, index) => (
						<motion.button
							key={`${item.title}-${index}`}
							initial={{ opacity: 0, y: 14 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ delay: index * 0.04 }}
							onClick={() => setSelectedIndex(index)}
							className={`group image-frame-luxury hover-lift-card block w-full overflow-hidden rounded-3xl ${
								index < 2
									? "row-span-2 sm:col-span-2 lg:col-span-3"
									: item.tall
										? "row-span-2 lg:col-span-2"
										: "row-span-1 lg:col-span-2"
							}`}
							data-cursor="View Look"
						>
							<div className="relative h-full min-h-[220px]">
								<SafeImage
									src={item.image}
									fallbackSrc={imageFallback}
									alt={`${item.title} portfolio look`}
									className={`h-full w-full rounded-3xl transition duration-500 group-hover:scale-105 ${
										item.imageFit === "contain"
											? "object-contain bg-zinc-100 p-2"
											: "object-cover"
									}`}
								/>
								<div className="luxury-overlay absolute inset-0 rounded-3xl opacity-75" />
								<div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />

								<div className="absolute left-4 top-4 flex flex-wrap gap-2">
									{item.tags.slice(0, 2).map((tag) => (
										<span
											key={tag}
											className="glass-tag rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-[var(--text-light)]"
										>
											{tag}
										</span>
									))}
									{item.videoPreview && (
										<span className="inline-flex items-center gap-1 rounded-full border border-rose-300/25 bg-[var(--bg-secondary)]/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-[var(--text-light)]">
											<Play size={11} /> Video Preview
										</span>
									)}
								</div>

								<div className="absolute bottom-4 left-4 right-4 translate-y-3 text-left opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
									<p className="text-lg font-semibold text-[var(--text-light)]">
										{item.title}
									</p>
									<p className="mt-1 text-xs text-[var(--text-light)]/80">
										{item.description}
									</p>
									<p className="text-[10px] uppercase tracking-[0.2em] text-[var(--soft-pink)]">
										{item.category}
									</p>
								</div>
							</div>
						</motion.button>
					))}
				</div>

				{visibleCount < filtered.length && (
					<div className="mt-6 text-center">
						<MagneticButton
							as="button"
							type="button"
							onClick={() =>
								setVisibleCount((count) => Math.min(count + 3, filtered.length))
							}
							className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-[var(--text-light)]"
							data-cursor="More"
						>
							Load More Looks
						</MagneticButton>
					</div>
				)}
			</div>

			<AnimatePresence>
				{activeItem && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[98] flex items-center justify-center bg-pink-950/90 p-4"
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className="relative max-h-[94vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-rose-300/15 bg-pink-950/80 p-4 backdrop-blur-xl md:p-6"
						>
							<button
								type="button"
								className="absolute right-3 top-3 z-10 rounded-full border border-rose-300/15 bg-[var(--bg-secondary)]/60 p-2 text-[var(--text-light)]"
								onClick={closeLightbox}
								aria-label="Close image"
							>
								<X size={18} />
							</button>

							<div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
								<div className="relative">
									<div
										onTouchStart={onLightboxTouchStart}
										onTouchEnd={onLightboxTouchEnd}
										className="rounded-3xl bg-[var(--bg-secondary)]/50"
									>
										<SafeImage
											src={activeItem.image}
											fallbackSrc={imageFallback}
											alt={`${activeItem.title} full preview`}
											className="max-h-[78vh] w-full rounded-3xl object-contain"
										/>
									</div>
									<p className="mt-2 text-center text-[10px] uppercase tracking-[0.16em] text-[var(--text-light)]/50 md:hidden">
										Swipe to navigate
									</p>
									<button
										type="button"
										onClick={showPrevious}
										className="absolute left-4 top-1/2 inline-flex -translate-y-1/2 rounded-full border border-rose-300/20 bg-white/55 p-2 text-[var(--text-light)]"
										aria-label="Previous look"
									>
										<ChevronLeft size={18} />
									</button>
									<button
										type="button"
										onClick={showNext}
										className="absolute right-4 top-1/2 inline-flex -translate-y-1/2 rounded-full border border-rose-300/20 bg-white/55 p-2 text-[var(--text-light)]"
										aria-label="Next look"
									>
										<ChevronRight size={18} />
									</button>
								</div>

								<div className="rounded-3xl border border-rose-300/15 bg-[var(--bg-secondary)]/40 p-5">
									<p className="text-xs uppercase tracking-[0.2em] text-[var(--soft-pink)]">
										{activeItem.category}
									</p>
									<h3 className="mt-2 text-3xl text-[var(--cream)]">
										{activeItem.title}
									</h3>
									<p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
										{activeItem.description}
									</p>

									<div className="mt-4 flex flex-wrap gap-2">
										{activeItem.tags.map((tag) => (
											<span
												key={tag}
												className="rounded-full border border-rose-300/15 bg-white/8 px-3 py-1 text-xs uppercase tracking-[0.14em] text-[var(--text-light)]/90"
											>
												{tag}
											</span>
										))}
									</div>

									<div className="mt-5 grid gap-3 sm:grid-cols-2">
										<div className="overflow-hidden rounded-2xl border border-rose-300/10">
											<SafeImage
												src={activeItem.before}
												fallbackSrc={imageFallback}
												alt={`${activeItem.title} before`}
												className={`h-28 w-full ${
													activeItem.imageFit === "contain"
														? "object-contain bg-[var(--bg-secondary)]/60 p-2"
														: "object-cover"
												}`}
											/>
											<p className="p-2 text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
												Before
											</p>
										</div>
										<div className="overflow-hidden rounded-2xl border border-rose-300/10">
											<SafeImage
												src={activeItem.after}
												fallbackSrc={imageFallback}
												alt={`${activeItem.title} after`}
												className={`h-28 w-full ${
													activeItem.imageFit === "contain"
														? "object-contain bg-[var(--bg-secondary)]/60 p-2"
														: "object-cover"
												}`}
											/>
											<p className="p-2 text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
												After
											</p>
										</div>
									</div>

									<MagneticButton
										as="a"
										href="https://debobeautybridalstudio.setmore.com/"
										target="_blank"
										rel="noreferrer"
										className="mt-5 inline-flex rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-5 py-2 text-sm font-semibold text-[var(--text-light)]"
										data-cursor="Book"
									>
										Recreate This Look
									</MagneticButton>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}

export default PortfolioSection;
