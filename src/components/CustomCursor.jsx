import { motion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState('');
  const [hovered, setHovered] = useState(false);

  const mouseX = useSpring(0, { stiffness: 600, damping: 36, mass: 0.18 });
  const mouseY = useSpring(0, { stiffness: 600, damping: 36, mass: 0.18 });

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');

    const updateDesktopState = () => {
      const value = media.matches;
      setIsDesktop(value);
      if (!value) {
        setEnabled(false);
        document.body.classList.remove('cursor-ready');
      }
    };

    updateDesktopState();
    media.addEventListener('change', updateDesktopState);

    return () => media.removeEventListener('change', updateDesktopState);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      return undefined;
    }

    const onPointerMove = (event) => {
      mouseX.set(event.clientX - 16);
      mouseY.set(event.clientY - 16);
      setEnabled(true);
    };

    const onMouseOver = (event) => {
      const interactiveEl = event.target.closest(
        'a, button, [role="button"], [data-cursor], input, textarea, select'
      );

      if (interactiveEl) {
        setHovered(true);
        setLabel(interactiveEl.getAttribute('data-cursor') || '');
      }
    };

    const onMouseOut = (event) => {
      const related = event.relatedTarget;
      if (related && related.closest('a, button, [role="button"], [data-cursor], input, textarea, select')) {
        return;
      }

      setHovered(false);
      setLabel('');
    };

    document.body.classList.add('cursor-ready');
    window.addEventListener('pointermove', onPointerMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.body.classList.remove('cursor-ready');
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, [isDesktop, mouseX, mouseY]);

  if (!isDesktop || !enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[120]"
      style={{ x: mouseX, y: mouseY }}
    >
      <motion.div
        animate={{
          width: hovered ? 80 : 32,
          height: hovered ? 80 : 32,
          borderRadius: hovered ? 24 : 999,
          backgroundColor: hovered ? 'rgba(212, 175, 55, 0.2)' : 'rgba(248, 244, 239, 0.12)',
          borderColor: hovered ? 'rgba(212, 175, 55, 0.9)' : 'rgba(248, 248, 248, 0.55)',
        }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center border backdrop-blur-xl"
      >
        <span className="max-w-16 text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--cream)]">
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default CustomCursor;
