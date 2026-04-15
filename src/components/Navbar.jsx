import { useEffect, useState } from 'react';
import { Menu, Sparkles, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { navLinks } from '../siteData';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(navLinks[0].label);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks
        .map((item) => ({ label: item.label, el: document.querySelector(item.href) }))
        .filter((item) => item.el);

      for (const section of sections) {
        const top = section.el.offsetTop - 140;
        const bottom = top + section.el.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(section.label);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-[90] w-full transition-all duration-500 ${
        scrolled ? 'border-b border-white/10 bg-black/75 shadow-2xl shadow-black/40 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="section-shell grid h-20 grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <a href="#home" className="text-lg font-semibold tracking-wide text-[var(--cream)] md:text-xl" data-cursor="Home">
          Debo <span className="luxury-gradient-text">Makeover Studio</span>
        </a>

        <ul className="hidden items-center justify-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="group relative text-xs font-medium uppercase tracking-[0.2em] text-white/90"
                data-cursor={item.label}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-[var(--gold)] transition-all duration-300 ${
                    active === item.label ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-3">
          <p className="hidden text-[10px] uppercase tracking-[0.22em] text-[var(--soft-pink)] xl:block">
            Bookings Open 2026
          </p>

          <MagneticButton
            as="a"
            href="https://debobeautybridalstudio.setmore.com/"
            target="_blank"
            rel="noreferrer"
            data-cursor="Book"
            className="hidden items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-5 py-2 text-sm font-semibold text-black lg:inline-flex"
          >
            <Sparkles size={14} /> Book Appointment
          </MagneticButton>

          <button
            className="inline-flex rounded-full border border-white/30 bg-black/25 p-2 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            data-cursor="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="section-shell mb-3 rounded-3xl border border-white/20 bg-black/90 p-5 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs uppercase tracking-[0.24em] text-[var(--cream)]"
                  onClick={() => setOpen(false)}
                  data-cursor={item.label}
                >
                  {item.label}
                </a>
              ))}

              <MagneticButton
                as="a"
                href="https://debobeautybridalstudio.setmore.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-5 py-2 text-center font-semibold text-black"
                onClick={() => setOpen(false)}
                data-cursor="Book"
              >
                Book Appointment
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
