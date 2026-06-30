import { TESTIMONIOS } from '../data/negocio.js';
import { IconStar } from './Icons.jsx';

export default function Testimonios() {
  return (
    <section id="reseñas" className="bg-ink py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-14">
          <p className="eyebrow mb-4">Reseñas</p>
          <h2 className="section-title">Lo que dicen</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIOS.map((t) => (
            <figure key={t.nombre} className="border border-limestone/12 p-7">
              <div className="flex gap-1 mb-4" aria-hidden="true">
                {Array.from({ length: t.estrellas }).map((_, i) => (
                  <IconStar key={i} />
                ))}
              </div>
              <blockquote className="text-limestone/80 text-sm leading-relaxed mb-6">
                "{t.texto}"
              </blockquote>
              <figcaption className="font-display text-lg font-bold uppercase text-limestone">
                {t.nombre}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
