import { SERVICIOS, ENLACE_WHATSAPP } from '../data/negocio.js';
import { IconScissors, IconRazor, IconBeard, IconDroplet, IconSparkle, IconRing } from './Icons.jsx';

const ICONOS = {
  'corte-clasico': IconScissors,
  fade: IconScissors,
  barba: IconBeard,
  afeitado: IconRazor,
  facial: IconDroplet,
  'paquete-evento': IconRing,
};

const formatoMXN = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  maximumFractionDigits: 0,
});

export default function Servicios() {
  return (
    <section id="servicios" className="bg-ink py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-14">
          <p className="eyebrow mb-4">Servicios</p>
          <h2 className="section-title">Lo que hacemos</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICIOS.map((servicio) => {
            const Icono = ICONOS[servicio.id] ?? IconSparkle;
            return (
              <article
                key={servicio.id}
                className={`p-7 flex flex-col border ${
                  servicio.destacado
                    ? 'border-brass bg-henequen/15'
                    : 'border-limestone/12 hover:border-limestone/30'
                } transition-colors`}
              >
                {servicio.destacado && (
                  <span className="self-start mb-4 text-[11px] tracking-widest2 uppercase font-semibold text-brass bg-brass/10 px-3 py-1">
                    Más solicitado
                  </span>
                )}
                <Icono className="w-7 h-7 text-terracota mb-5" />
                <h3 className="font-display text-2xl font-bold uppercase text-limestone mb-2">
                  {servicio.nombre}
                </h3>
                <p className="text-limestone/65 text-sm leading-relaxed mb-6 flex-1">
                  {servicio.descripcion}
                </p>
                <div className="flex items-end justify-between border-t border-limestone/10 pt-4">
                  <span className="text-xs text-limestone/50">{servicio.duracion}</span>
                  <span className="font-display text-2xl font-bold text-brass">
                    {formatoMXN.format(servicio.precio)}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a href={ENLACE_WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agendar un servicio
          </a>
        </div>
      </div>
    </section>
  );
}
