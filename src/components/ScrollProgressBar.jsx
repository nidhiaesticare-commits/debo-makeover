import { motion, useScroll, useSpring } from 'framer-motion';

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 22,
    mass: 0.18,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[100] h-1 w-full origin-left bg-gradient-to-r from-[var(--gold)] via-[var(--soft-pink)] to-[var(--rose-gold)]"
    />
  );
}

export default ScrollProgressBar;
