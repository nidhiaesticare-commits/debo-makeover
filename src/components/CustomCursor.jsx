import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CustomCursor() {
	const [isDesktop, setIsDesktop] = useState(false);
	const [enabled, setEnabled] = useState(false);
	const [label, setLabel] = useState("");
	const [hovered, setHovered] = useState(false);
	const enabledRef = useRef(false);
	const hoveredRef = useRef(null);
	const pointRef = useRef({ x: 0, y: 0 });
	const frameRef = useRef(null);

	const pointerX = useMotionValue(0);
	const pointerY = useMotionValue(0);
	const mouseX = useSpring(pointerX, {
		stiffness: 1000,
		damping: 48,
		mass: 0.14,
	});
	const mouseY = useSpring(pointerY, {
		stiffness: 1000,
		damping: 48,
		mass: 0.14,
	});
	const trailX = useSpring(pointerX, {
		stiffness: 240,
		damping: 34,
		mass: 0.22,
	});
	const trailY = useSpring(pointerY, {
		stiffness: 240,
		damping: 34,
		mass: 0.22,
	});

	useEffect(() => {
		const media = window.matchMedia("(min-width: 1024px)");

		const updateDesktopState = () => {
			const value = media.matches;
			setIsDesktop(value);
			if (!value) {
				setEnabled(false);
				enabledRef.current = false;
				document.body.classList.remove("cursor-ready");
			}
		};

		updateDesktopState();
		media.addEventListener("change", updateDesktopState);

		return () => media.removeEventListener("change", updateDesktopState);
	}, []);

	useEffect(() => {
		if (!isDesktop) {
			return undefined;
		}

		const moveCursor = () => {
			frameRef.current = null;
			pointerX.set(pointRef.current.x);
			pointerY.set(pointRef.current.y);
		};

		const onPointerMove = (event) => {
			pointRef.current.x = event.clientX - 16;
			pointRef.current.y = event.clientY - 16;

			if (!enabledRef.current) {
				enabledRef.current = true;
				setEnabled(true);
			}

			if (!frameRef.current) {
				frameRef.current = window.requestAnimationFrame(moveCursor);
			}
		};

		const getInteractiveTarget = (target) => {
			if (!(target instanceof Element)) {
				return null;
			}

			return target.closest(
				'a, button, [role="button"], [data-cursor], input, textarea, select, .premium-panel, .hero-feature-card, .hero-stat-card, .glass-card, .premium-card, [data-hoverable], img',
			);
		};

		const onPointerOver = (event) => {
			const interactiveEl = getInteractiveTarget(event.target);

			if (interactiveEl && hoveredRef.current !== interactiveEl) {
				hoveredRef.current = interactiveEl;
				setHovered(true);

				const explicitLabel = interactiveEl.getAttribute("data-cursor") || "";
				const isImage = interactiveEl.tagName === "IMG";
				const inPortfolio = Boolean(interactiveEl.closest("#portfolio"));
				const fallbackLabel =
					inPortfolio && isImage ? "View Look" : isImage ? "Preview" : "";

				setLabel(explicitLabel || fallbackLabel);
			}
		};

		const onPointerOut = (event) => {
			const related = event.relatedTarget;
			if (getInteractiveTarget(related)) {
				return;
			}

			hoveredRef.current = null;
			setHovered(false);
			setLabel("");
		};

		document.body.classList.add("cursor-ready");
		window.addEventListener("pointermove", onPointerMove, { passive: true });
		document.addEventListener("pointerover", onPointerOver);
		document.addEventListener("pointerout", onPointerOut);

		return () => {
			if (frameRef.current) {
				window.cancelAnimationFrame(frameRef.current);
			}

			document.body.classList.remove("cursor-ready");
			window.removeEventListener("pointermove", onPointerMove);
			document.removeEventListener("pointerover", onPointerOver);
			document.removeEventListener("pointerout", onPointerOut);
		};
	}, [isDesktop, pointerX, pointerY]);

	if (!isDesktop || !enabled) {
		return null;
	}

	return (
		<>
			<motion.div
				aria-hidden
				className="pointer-events-none fixed left-0 top-0 z-[119] will-change-transform"
				style={{ x: trailX, y: trailY }}
			>
				<motion.div
					animate={{
						width: hovered ? 58 : 16,
						height: hovered ? 58 : 16,
						opacity: hovered ? 0.6 : 0.35,
						backgroundColor: hovered
							? "rgba(212, 175, 55, 0.42)"
							: "rgba(246, 215, 220, 0.22)",
					}}
					transition={{ duration: 0.2 }}
					className="rounded-full blur-xl"
				/>
			</motion.div>

			<motion.div
				aria-hidden
				className="pointer-events-none fixed left-0 top-0 z-[120] will-change-transform"
				style={{ x: mouseX, y: mouseY }}
			>
				<motion.div
					animate={{
						width: hovered ? 84 : 32,
						height: hovered ? 84 : 32,
						borderRadius: hovered ? 24 : 999,
						backgroundColor: hovered
							? "rgba(212, 175, 55, 0.22)"
							: "rgba(248, 244, 239, 0.12)",
						borderColor: hovered
							? "rgba(212, 175, 55, 0.9)"
							: "rgba(248, 248, 248, 0.55)",
						boxShadow: hovered
							? "0 0 24px rgba(212, 175, 55, 0.4), inset 0 0 20px rgba(255,255,255,0.08)"
							: "0 0 0 rgba(0,0,0,0)",
					}}
					transition={{ duration: 0.14 }}
					className="flex items-center justify-center border backdrop-blur-md will-change-transform"
				>
					<span className="max-w-16 text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--cream)]">
						{label}
					</span>
				</motion.div>
			</motion.div>
		</>
	);
}

export default CustomCursor;
