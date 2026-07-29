import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { footerVisual } from "../siteData";
import SafeImage from "./SafeImage";

function Footer() {
	return (
		<footer className="relative overflow-hidden border-t border-rose-300/10 bg-white/60 backdrop-blur-md py-14">
			<div className="absolute inset-0">
				<SafeImage
					src={footerVisual}
					fallbackSrc={footerVisual}
					alt="Luxury beauty footer backdrop"
					className="h-full w-full scale-105 object-cover opacity-22 blur-[1.4px]"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/84 via-black/90 to-black/95" />
				<div className="section-mesh absolute inset-0" />
			</div>

			<div className="section-shell relative z-10 grid gap-8 md:grid-cols-4">
				<div>
					<h3 className="text-2xl text-[var(--cream)]">Debo Makeover Studio</h3>
					<p className="mt-3 text-sm text-[var(--text-muted)]">
						Luxury bridal and glam beauty studio delivering elegant,
						camera-ready transformations.
					</p>
					<p className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--soft-pink)]">
						Luxury Bridal • Mumbai Region
					</p>
				</div>

				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
						Quick Links
					</p>
					<ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)]">
						<li>
							<a href="#about" className="hover:text-[var(--cream)]">
								About
							</a>
						</li>
						<li>
							<a href="#services" className="hover:text-[var(--cream)]">
								Services
							</a>
						</li>
						<li>
							<a href="#portfolio" className="hover:text-[var(--cream)]">
								Portfolio
							</a>
						</li>
						<li>
							<a href="#contact" className="hover:text-[var(--cream)]">
								Contact
							</a>
						</li>
					</ul>
				</div>

				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
						Signature Services
					</p>
					<ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)]">
						<li>Bridal Makeup</li>
						<li>Party Glam</li>
						<li>Engagement Looks</li>
						<li>Hairstyling</li>
						<li>Skincare & Facials</li>
					</ul>
				</div>

				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
						Connect
					</p>
					<ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)]">
						<li className="inline-flex items-center gap-2">
							<MapPin size={15} className="min-w-4" /> Gulmohar Heritage, Shop No.6, Nallasopara (W)
						</li>
						<li className="inline-flex items-center gap-2">
							<Phone size={15} className="min-w-4" /> +91 9601 960 108
						</li>
					</ul>
					<div className="mt-4 flex gap-3 text-[var(--text-light)]">
						<a
							href="https://instagram.com/Debo_beauty_and_bridal_studio"
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-rose-300/15 p-2 transition hover:border-[var(--gold)]"
						>
							<Instagram size={16} />
						</a>
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-rose-300/15 p-2 transition hover:border-[var(--gold)]"
						>
							<Facebook size={16} />
						</a>
					</div>
				</div>
			</div>

			<div className="section-shell relative z-10 mt-8 border-t border-rose-300/10 pt-6 text-center text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
				Copyright {new Date().getFullYear()} Debo Makeover Official. All rights
				reserved.
			</div>
		</footer>
	);
}

export default Footer;
