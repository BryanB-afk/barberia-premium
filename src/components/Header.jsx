import { useEffect, useState } from 'react';
import { NAV_LINKS, ENLACE_WHATSAPP, NEGOCIO } from '../data/negocio.js';
import { IconScissors, IconMenu, IconX, IconWhatsapp } from './Icons.jsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Cambia el fondo del header una vez que el usuario hace scroll,
  // para distinguirlo del hero sin restar protagonismo a la imagen inicial.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bloquea el scroll del body cuando el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = menuAbierto ? 'hidden' : '';
  }, [menuAbierto]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || menuAbierto ? 'bg-ink/95 backdrop-blur-sm border-b border-limestone/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5 text-limestone">
          <IconScissors className="w-6 h-6 text-brass" />
          <span className="font-display text-xl font-bold uppercase tracking-tight">
            {NEGOCIO.nombre}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-limestone/80 hover:text-brass transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={ENLACE_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-terracota hover:bg-terracota-light text-limestone font-body font-semibold text-sm px-5 py-2.5 rounded-sm transition-colors"
        >
          <IconWhatsapp className="w-4 h-4" />
          Reservar cita
        </a>

        <button
          type="button"
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto((v) => !v)}
          className="md:hidden text-limestone p-2 -mr-2"
        >
          {menuAbierto ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuAbierto && (
        <div className="md:hidden bg-ink border-t border-limestone/10 px-5 pb-8 pt-2">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuAbierto(false)}
                className="font-body text-base text-limestone/90 py-3 border-b border-limestone/10"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={ENLACE_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-terracota text-limestone font-body font-semibold px-5 py-3.5 rounded-sm"
          >
            <IconWhatsapp className="w-4 h-4" />
            Reservar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
