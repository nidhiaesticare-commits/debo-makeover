import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links
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

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? 'bg-black/75 shadow-2xl shadow-black/40 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="text-xl font-semibold tracking-wide text-[var(--cream)]">
          Debo <span className="luxury-gradient-text">Makeover</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="group relative text-sm font-medium uppercase tracking-[0.18em] text-white/90"
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

        <a
          href="https://debobeautybridalstudio.setmore.com/"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-[var(--gold)] bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-5 py-2 text-sm font-semibold text-black transition hover:scale-105 md:inline-flex"
        >
          Book Appointment
        </a>

        <button
          className="inline-flex rounded-full border border-white/30 p-2 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="section-shell mb-3 rounded-3xl border border-white/20 bg-black/90 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm uppercase tracking-[0.2em] text-[var(--cream)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://debobeautybridalstudio.setmore.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--rose-gold)] px-5 py-2 text-center font-semibold text-black"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
