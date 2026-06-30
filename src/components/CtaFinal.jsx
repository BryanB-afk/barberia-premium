import { ENLACE_WHATSAPP } from '../data/negocio.js';

export default function CtaFinal() {
  return (
    <section className="bg-henequen-dark py-20 sm:py-28 text-center">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">Cupo limitado por barbero</p>
        <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-limestone leading-[0.95] mb-7">
          Agenda tu lugar
          <br />
          esta semana
        </h2>
        <p className="text-limestone/70 mb-9 max-w-md mx-auto">
          Los sábados se llenan rápido. Resérvalo por WhatsApp y te
          confirmamos en minutos.
        </p>
        <a href={ENLACE_WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Reservar por WhatsApp
        </a>
      </div>
    </section>
  );
}
