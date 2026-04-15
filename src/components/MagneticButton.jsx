import { motion, useMotionValue, useSpring } from 'framer-motion';

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

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);

    x.set((dx / rect.width) * strength);
    y.set((dy / rect.height) * strength);

    if (onMouseMove) {
      onMouseMove(event);
    }
  };

  const handleLeave = (event) => {
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
      className={className}
      style={{ x: springX, y: springY }}
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
