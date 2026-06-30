import { GALERIA } from '../data/negocio.js';

export default function Galeria() {
  return (
    <section id="galeria" className="bg-ink py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-12">
          <p className="eyebrow mb-4">Galería</p>
          <h2 className="section-title">Trabajo real</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {GALERIA.map((src, i) => (
            <div
              key={src}
              className={`overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img
                src={src}
                alt={`Trabajo realizado en Barbería Itzá, foto ${i + 1}`}
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
