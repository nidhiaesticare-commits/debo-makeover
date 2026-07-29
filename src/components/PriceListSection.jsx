import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { priceList } from "../siteData";

function PriceListSection() {
	const [activeCategory, setActiveCategory] = useState(priceList[0].category);

	return (
		<section
			id="price-list"
			className="relative overflow-hidden bg-[var(--bg-main)] py-24 md:py-32"
		>
			<div className="absolute inset-0">
				<div className="section-mesh absolute inset-0 opacity-40" />
				<div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-[var(--gold)]/10 blur-[100px]" />
				<div className="absolute -right-1/4 bottom-0 h-96 w-96 rounded-full bg-[var(--rose-gold)]/10 blur-[100px]" />
			</div>

			<div className="section-shell relative z-10">
				<div className="mx-auto max-w-3xl text-center">
					<p className="section-kicker mx-auto text-[var(--gold)]">
						<Sparkles size={14} /> Comprehensive Menu
					</p>
					<h2 className="mt-4 text-balance text-4xl text-[var(--cream)] md:text-5xl lg:text-6xl">
						Our Price List
					</h2>
					<p className="mt-4 text-[var(--text-muted)] md:text-lg">
						Explore our full range of luxury services. We use premium products to ensure you get the glow you deserve.
					</p>
				</div>

				<div className="mt-14 grid gap-8 lg:grid-cols-[1fr_2.5fr]">
					{/* Categories Sidebar */}
					<div className="flex flex-row overflow-x-auto lg:flex-col lg:overflow-visible gap-2 pb-4 lg:pb-0 scrollbar-hide">
						{priceList.map((categoryObj) => (
							<button
								key={categoryObj.category}
								onClick={() => setActiveCategory(categoryObj.category)}
								className={`whitespace-nowrap rounded-2xl px-5 py-4 text-left text-sm transition-all duration-300 ${
									activeCategory === categoryObj.category
										? "bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] font-medium text-[var(--text-light)] shadow-lg"
										: "border border-rose-300/10 bg-[var(--bg-secondary)]/60 text-[var(--text-muted)] hover:border-rose-300/20 hover:text-[var(--text-light)]"
								}`}
							>
								{categoryObj.category}
							</button>
						))}
					</div>

					{/* Pricing Display */}
					<div className="relative min-h-[400px] rounded-3xl border border-rose-300/10 bg-[var(--bg-secondary)]/60 p-6 md:p-10">
						<AnimatePresence mode="wait">
							{priceList.map(
								(categoryObj) =>
									activeCategory === categoryObj.category && (
										<motion.div
											key={categoryObj.category}
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -10 }}
											transition={{ duration: 0.3 }}
										>
											<h3 className="mb-8 text-2xl font-light text-[var(--gold)] uppercase tracking-wider">
												{categoryObj.category}
											</h3>
											<div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
												{categoryObj.items.map((item, index) => (
													<div
														key={index}
														className="group flex flex-col justify-end border-b border-rose-300/10 pb-3 transition-colors hover:border-[var(--gold)]/50"
													>
														<div className="flex items-end justify-between gap-4">
															<span className="text-[var(--cream)] group-hover:text-[var(--text-light)] transition-colors">
																{item.name}
															</span>
															<span className="shrink-0 font-medium text-[var(--gold)]">
																₹{item.price.replace('/-', '')}
															</span>
														</div>
														{item.cleanUp && (
															<div className="mt-1 flex items-center justify-between text-xs text-[var(--text-muted)]">
																<span>Cleanup</span>
																<span>₹{item.cleanUp.replace('/-', '')}</span>
															</div>
														)}
													</div>
												))}
											</div>
										</motion.div>
									),
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PriceListSection;
