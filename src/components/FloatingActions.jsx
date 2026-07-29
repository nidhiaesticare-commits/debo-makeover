import { motion } from "framer-motion";
import { CalendarDays, MessageCircle } from "lucide-react";

function FloatingActions() {
	return (
		<>
			<motion.a
				href="https://wa.me/918787518627"
				target="_blank"
				rel="noreferrer"
				initial={{ opacity: 0, x: 30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 1 }}
				className="pulse-emerald fixed bottom-24 right-5 z-[96] hidden items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-[var(--studio-pink)] shadow-xl shadow-pink-300/40 border border-pink-200 transition-transform hover:scale-105 md:inline-flex"
				data-cursor="Chat"
			>
				<MessageCircle size={18} /> WhatsApp
			</motion.a>

			<motion.a
				href="https://debobeautybridalstudio.setmore.com/"
				target="_blank"
				rel="noreferrer"
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.1 }}
				className="btn-shine fixed bottom-5 right-5 z-[96] hidden rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-pink-300/40 transition-transform hover:scale-[1.03] md:inline-flex"
				data-cursor="Book"
			>
				<span className="inline-flex items-center gap-2">
					<CalendarDays size={17} /> Book Now
				</span>
			</motion.a>

			<div className="pointer-events-none fixed bottom-0 left-0 right-0 z-[94] border-t border-rose-300/10 bg-white/85 p-3 backdrop-blur-xl md:hidden">
				<div className="pointer-events-auto section-shell grid grid-cols-2 gap-3">
					<a
						href="https://wa.me/918787518627"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center justify-center gap-2 rounded-full border border-pink-200 bg-white py-2 text-sm font-semibold text-[var(--studio-pink)]"
					>
						<MessageCircle size={15} /> WhatsApp
					</a>
					<a
						href="https://debobeautybridalstudio.setmore.com/"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] py-2 text-sm font-semibold text-white"
					>
						<CalendarDays size={15} /> Book Now
					</a>
				</div>
			</div>
		</>
	);
}

export default FloatingActions;
