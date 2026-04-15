import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

const springConfig = { stiffness: 220, damping: 20, mass: 0.25 };

function MagneticButton({
  as = 'a',
  className = '',
  children,
  strength = 18,
  onMouseMove,
  onMouseLeave,
  ...props
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rectRef = useRef(null);
  const frameRef = useRef(null);
  const pointRef = useRef({ x: 0, y: 0 });

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

  const Component = motion[as] || motion.button;

  return (
    <Component
      {...props}
      className={`${className} will-change-transform`}
      style={{ x: springX, y: springY }}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.035, boxShadow: '0 12px 32px rgba(212, 175, 55, 0.35)' }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
    >
      {children}
    </Component>
  );
}

export default MagneticButton;
