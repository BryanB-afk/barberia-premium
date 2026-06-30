import { BARBEROS, ENLACE_WHATSAPP } from '../data/negocio.js';

export default function Equipo() {
  return (
    <section id="equipo" className="bg-limestone py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-14">
          <p className="font-body text-xs tracking-widest2 uppercase text-terracota font-medium mb-4">
            Nuestro equipo
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-ink leading-[0.95]">
            Elige tu barbero
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {BARBEROS.map((barbero) => (
            <article key={barbero.id} className="group">
              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src={barbero.imagen}
                  alt={`${barbero.nombre}, barbero especialista en ${barbero.especialidad}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="pt-5">
                <h3 className="font-display text-2xl font-bold uppercase text-ink">
                  {barbero.nombre}
                </h3>
                <p className="text-terracota text-sm font-medium mt-1">{barbero.especialidad}</p>
                <p className="text-ink/50 text-xs mt-1">{barbero.anios} años de experiencia</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={ENLACE_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-ink hover:bg-ink-light text-limestone font-body font-semibold px-7 py-3.5 rounded-sm transition-colors"
          >
            Reservar con tu barbero
          </a>
        </div>
      </div>
    </section>
  );
}
