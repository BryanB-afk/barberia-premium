export default function SobreNosotros() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=900&auto=format&fit=crop"
            alt="Barbero atendiendo a un cliente en Barbería Itzá"
            className="w-full h-[420px] object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="eyebrow mb-4">Nuestra historia</p>
          <h2 className="section-title mb-6">
            Más que
            <br />
            un corte.
          </h2>
          <p className="text-limestone/75 text-base sm:text-lg leading-relaxed mb-5">
            Abrimos en 2011 en una casa de los años cincuenta sobre la calle
            21, a pocas cuadras del Paseo de Montejo. La idea era simple:
            traer de regreso el oficio del barbero de antes —tijera, navaja y
            tiempo— a un barrio que sigue siendo de vecinos.
          </p>
          <p className="text-limestone/75 text-base sm:text-lg leading-relaxed">
            Hoy somos tres barberos certificados, cada uno con su propia
            especialidad, y seguimos recibiendo a la mayoría de nuestros
            clientes por recomendación de boca en boca.
          </p>

          <div className="mt-9 grid grid-cols-3 gap-6 border-t border-limestone/15 pt-7">
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-brass">14</p>
              <p className="text-xs text-limestone/60 mt-1">años de oficio</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-brass">3</p>
              <p className="text-xs text-limestone/60 mt-1">barberos certificados</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-brass">6k+</p>
              <p className="text-xs text-limestone/60 mt-1">cortes al año</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
