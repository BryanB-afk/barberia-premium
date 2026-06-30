import { NEGOCIO, NAV_LINKS, ENLACE_WHATSAPP } from '../data/negocio.js';
import { IconScissors, IconWhatsapp, IconInstagram } from './Icons.jsx';

export default function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-limestone/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-3 gap-10 pb-12">
          <div>
            <div className="flex items-center gap-2.5 text-limestone mb-4">
              <IconScissors className="w-6 h-6 text-brass" />
              <span className="font-display text-xl font-bold uppercase tracking-tight">
                {NEGOCIO.nombre}
              </span>
            </div>
            <p className="text-limestone/55 text-sm leading-relaxed max-w-xs">
              {NEGOCIO.eslogan}. Barbería tradicional en García Ginerés,
              Mérida, desde 2011.
            </p>
          </div>

          <div>
            <p className="font-body text-xs tracking-widest2 uppercase text-limestone/40 font-medium mb-4">
              Navegación
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-limestone/65 text-sm hover:text-brass transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs tracking-widest2 uppercase text-limestone/40 font-medium mb-4">
              Contacto
            </p>
            <p className="text-limestone/65 text-sm mb-3">{NEGOCIO.telefono}</p>
            <div className="flex gap-3">
              <a
                href={ENLACE_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center w-9 h-9 border border-limestone/15 hover:border-brass hover:text-brass text-limestone/70 transition-colors"
              >
                <IconWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-9 h-9 border border-limestone/15 hover:border-brass hover:text-brass text-limestone/70 transition-colors"
              >
                <IconInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-limestone/10 pt-6 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-limestone/40 text-xs">
            © {anioActual} {NEGOCIO.nombre}. Todos los derechos reservados.
          </p>
          <p className="text-limestone/40 text-xs">Mérida, Yucatán, México</p>
        </div>
      </div>
    </footer>
  );
}
