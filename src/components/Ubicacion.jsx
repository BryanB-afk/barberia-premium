import { NEGOCIO, ENLACE_WHATSAPP } from '../data/negocio.js';
import { IconPin, IconClock, IconWhatsapp, IconInstagram } from './Icons.jsx';

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-limestone py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <p className="font-body text-xs tracking-widest2 uppercase text-terracota font-medium mb-4">
            Visítanos
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-ink leading-[0.95] mb-8">
            Te esperamos
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <IconPin className="w-5 h-5 text-terracota shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-ink">Dirección</p>
                <p className="text-ink/65 text-sm mt-1">{NEGOCIO.direccion}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <IconClock className="w-5 h-5 text-terracota shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-ink">Horarios</p>
                <ul className="text-ink/65 text-sm mt-1 space-y-0.5">
                  {NEGOCIO.horarios.map((h) => (
                    <li key={h.dia} className="flex justify-between gap-6 max-w-[260px]">
                      <span>{h.dia}</span>
                      <span>{h.horario}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <a
              href={ENLACE_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escríbenos por WhatsApp"
              className="inline-flex items-center justify-center w-11 h-11 border border-ink/20 hover:border-terracota hover:text-terracota text-ink transition-colors"
            >
              <IconWhatsapp />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram"
              className="inline-flex items-center justify-center w-11 h-11 border border-ink/20 hover:border-terracota hover:text-terracota text-ink transition-colors"
            >
              <IconInstagram />
            </a>
          </div>
        </div>

        <div className="h-[360px] lg:h-auto min-h-[360px] border border-ink/10">
          <iframe
            title="Ubicación de Barbería Itzá en García Ginerés, Mérida"
            src="https://maps.google.com/maps?q=Garc%C3%ADa%20Gin%C3%A9res%2C%20M%C3%A9rida%2C%20Yucat%C3%A1n&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full grayscale-[40%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
