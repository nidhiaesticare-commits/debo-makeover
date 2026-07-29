import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";

const springConfig = { stiffness: 220, damping: 20, mass: 0.25 };

function MagneticButton({
	as = "a",
	className = "",
	children,
	strength = 18,
	onClick,
	onMouseMove,
	onMouseLeave,
	...props
}) {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rectRef = useRef(null);
	const frameRef = useRef(null);
	const pointRef = useRef({ x: 0, y: 0 });
	const rippleId = useRef(0);
	const [ripples, setRipples] = useState([]);

	const springX = useSpring(x, springConfig);
	const springY = useSpring(y, springConfig);

	const updateRect = (element) => {
		rectRef.current = element.getBoundingClientRect();
	};

	const runFrame = () => {
		frameRef.current = null;

		const rect = rectRef.current;
		if (!rect || rect.width === 0 || rect.height === 0) {
			return;
		}

		const dx = pointRef.current.x - (rect.left + rect.width / 2);
		const dy = pointRef.current.y - (rect.top + rect.height / 2);

		x.set((dx / rect.width) * strength);
		y.set((dy / rect.height) * strength);
	};

	const handleMove = (event) => {
		if (!rectRef.current) {
			updateRect(event.currentTarget);
		}

		pointRef.current.x = event.clientX;
		pointRef.current.y = event.clientY;

		if (!frameRef.current) {
			frameRef.current = window.requestAnimationFrame(runFrame);
		}

		if (onMouseMove) {
			onMouseMove(event);
		}
	};

	const handleEnter = (event) => {
		updateRect(event.currentTarget);
	};

	const handleLeave = (event) => {
		if (frameRef.current) {
			window.cancelAnimationFrame(frameRef.current);
			frameRef.current = null;
		}

		rectRef.current = null;
		x.set(0);
		y.set(0);

		if (onMouseLeave) {
			onMouseLeave(event);
		}
	};

	const handleClick = (event) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const size = Math.max(rect.width, rect.height) * 0.85;
		const id = rippleId.current++;

		setRipples((current) => [
			...current,
			{
				id,
				x: event.clientX - rect.left,
				y: event.clientY - rect.top,
				size,
			},
		]);

		window.setTimeout(() => {
			setRipples((current) => current.filter((ripple) => ripple.id !== id));
		}, 620);

		if (onClick) {
			onClick(event);
		}
	};

	const Component = motion[as] || motion.button;

	return (
		<Component
			{...props}
			className={`${className} relative isolate overflow-hidden will-change-transform`}
			style={{ x: springX, y: springY }}
			onMouseEnter={handleEnter}
			onMouseMove={handleMove}
			onMouseLeave={handleLeave}
			onClick={handleClick}
			whileHover={{
				scale: 1.035,
				boxShadow: "0 12px 32px rgba(212, 175, 55, 0.35)",
			}}
			whileTap={{ scale: 0.98 }}
			transition={{ type: "spring", stiffness: 220, damping: 22 }}
		>
			{ripples.map((ripple) => (
				<span
					key={ripple.id}
					aria-hidden
					className="btn-ripple"
					style={{
						left: ripple.x,
						top: ripple.y,
						width: ripple.size,
						height: ripple.size,
					}}
				/>
			))}
			{children}
		</Component>
	);
}

export default MagneticButton;
