import { ENLACE_WHATSAPP } from '../data/negocio.js';

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-ink pt-32 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
        {/* Bloque tipográfico */}
        <div className="relative z-10 pb-16 lg:pb-24">
          <p className="eyebrow mb-5">García Ginerés · Mérida, Yucatán</p>
          <h1 className="font-display font-extrabold uppercase text-limestone leading-[0.88] text-[15vw] sm:text-7xl md:text-8xl lg:text-[6.5rem]">
            Oficio,
            <br />
            navaja
            <br />
            <span className="text-terracota">y barrio.</span>
          </h1>
          <p className="mt-7 max-w-md text-limestone/70 text-base sm:text-lg leading-relaxed">
            Catorce años cortando el cabello del centro de Mérida con técnica
            de barbería tradicional y el ritmo de barrio que nos hace casa.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a href={ENLACE_WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Reservar cita
            </a>
            <a href="#servicios" className="btn-secondary">
              Ver servicios
            </a>
          </div>
        </div>

        {/* Imagen del local */}
        <div className="relative h-[55vh] lg:h-[78vh]">
          <img
            src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000&auto=format&fit=crop"
            alt="Interior de la Barbería Itzá, sillones de cuero y herramientas de barbero"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          {/* Etiqueta tipo ficha, refuerza el motivo de "turno" del sitio */}
          <div className="absolute -left-4 sm:-left-8 bottom-8 bg-henequen px-5 py-3.5 shadow-lg">
            <p className="font-display text-limestone text-xs tracking-widest2 uppercase font-semibold">
              Desde 2011
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
