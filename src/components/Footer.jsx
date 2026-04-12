import { Instagram, Phone, MapPin, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="section-shell grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-2xl text-[var(--cream)]">Debo Makeover</h3>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            Luxury bridal and glam beauty studio delivering elegant, camera-ready transformations.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)]">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)]">
            <li>Bridal Makeup</li>
            <li>Party Glam</li>
            <li>Hairstyling</li>
            <li>Skincare & Facials</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Connect</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)]">
            <li className="inline-flex items-center gap-2"><MapPin size={15} /> Nalasopara West</li>
            <li className="inline-flex items-center gap-2"><Phone size={15} /> +91 87875 18627</li>
          </ul>
          <div className="mt-4 flex gap-3 text-white">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 p-2"><Instagram size={16} /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 p-2"><Facebook size={16} /></a>
          </div>
        </div>
      </div>

      <div className="section-shell mt-8 border-t border-white/10 pt-6 text-center text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
        Copyright {new Date().getFullYear()} Debo Makeover Official. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
