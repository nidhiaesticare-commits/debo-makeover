import { motion } from "framer-motion";
import { Sparkles, Diamond } from "lucide-react";
import { rentalServices } from "../siteData";

function LehengaRentalsSection() {
	return (
		<section
			id="rentals"
			className="relative overflow-hidden bg-white/60 backdrop-blur-md py-24 md:py-32"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-main)] to-black" />
			<div className="section-mesh absolute inset-0 opacity-20" />
			
			<div className="section-shell relative z-10">
				<div className="mx-auto max-w-4xl rounded-3xl border border-[var(--gold)]/20 bg-[var(--bg-secondary)]/60 p-8 md:p-14 backdrop-blur-sm text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<p className="section-kicker mx-auto text-[var(--gold)]">
							<Sparkles size={14} /> Premium Collection
						</p>
						<h2 className="mt-4 text-balance text-4xl text-[var(--cream)] md:text-5xl">
							Designer Lehenga <span className="text-[var(--soft-pink)] italic">On Rent</span>
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)] md:text-lg">
							Complete your bridal look with our exclusive collection of designer lehengas and premium bridal jewellery, available on rent for your special day.
						</p>

						<div className="mt-10 grid gap-6 sm:grid-cols-3">
							{rentalServices.map((service, idx) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: idx * 0.1 }}
									className="group flex flex-col items-center justify-center rounded-2xl border border-rose-300/10 bg-white/5 p-6 transition-colors hover:border-[var(--gold)] hover:bg-[var(--gold)]/5"
								>
									<Diamond className="mb-4 text-[var(--gold)] group-hover:animate-pulse" size={32} />
									<h3 className="text-center font-medium text-[var(--cream)] group-hover:text-[var(--text-light)]">
										{service.name}
									</h3>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default LehengaRentalsSection;
