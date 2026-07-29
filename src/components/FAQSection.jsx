import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { faqs } from "../siteData";

function FAQSection() {
	const [open, setOpen] = useState(0);
	const [query, setQuery] = useState("");

	const filteredFaqs = faqs.filter(
		(item) =>
			item.q.toLowerCase().includes(query.toLowerCase()) ||
			item.a.toLowerCase().includes(query.toLowerCase()),
	);

	return (
		<section id="faq" className="bg-[var(--bg-secondary)] py-24 md:py-32">
			<div className="section-shell max-w-4xl">
				<h2 className="text-center text-4xl text-[var(--cream)] md:text-5xl">
					Frequently Asked Questions
				</h2>

				<div className="relative mx-auto mt-6 max-w-xl">
					<Search
						size={16}
						className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
					/>
					<input
						type="text"
						value={query}
						onChange={(event) => setQuery(event.target.value)}
						placeholder="Search your question"
						className="w-full rounded-full border border-rose-300/15 bg-[var(--bg-secondary)]/50 py-3 pl-10 pr-4 text-sm text-[var(--text-light)] placeholder:text-[var(--text-muted)]/80"
					/>
				</div>

				<div className="mt-10 space-y-4">
					{filteredFaqs.map((item, index) => {
						const isOpen = open === index;
						return (
							<div
								key={item.q}
								className="rounded-2xl border border-rose-300/10 bg-[var(--bg-secondary)]/50"
							>
								<button
									type="button"
									className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
									onClick={() => setOpen(isOpen ? -1 : index)}
								>
									<span className="font-medium text-[var(--cream)]">
										{item.q}
									</span>
									<ChevronDown
										size={18}
										className={`text-[var(--gold)] transition ${isOpen ? "rotate-180" : ""}`}
									/>
								</button>

								<AnimatePresence>
									{isOpen && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.28 }}
											className="overflow-hidden"
										>
											<p className="px-5 pb-5 text-sm leading-relaxed text-[var(--text-muted)]">
												{item.a}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						);
					})}

					{filteredFaqs.length === 0 && (
						<p className="rounded-2xl border border-rose-300/10 bg-[var(--bg-secondary)]/50 p-5 text-center text-sm text-[var(--text-muted)]">
							No results found. Try searching with words like bridal, trial,
							home service, or products.
						</p>
					)}
				</div>
			</div>
		</section>
	);
}

export default FAQSection;
