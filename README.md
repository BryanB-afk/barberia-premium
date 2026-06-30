# Barbería Itzá — Landing page

Landing page para una barbería premium ficticia ubicada en García Ginerés,
Mérida, Yucatán. Construida con **React 18 + Vite + Tailwind CSS**.

## Cómo correrlo

```bash
npm install
npm run dev      # entorno de desarrollo en http://localhost:5173
npm run build    # build de producción en /dist
npm run preview  # sirve el build de producción localmente
```

## Estructura del proyecto

```
barberia-itza/
├── index.html                  Documento HTML raíz. Carga las fuentes
│                                (Big Shoulders Display + Inter) y monta React.
├── tailwind.config.js           Tokens de diseño: paleta de colores, tipografías
│                                y utilidades personalizadas (franja "ficha de turno").
├── postcss.config.js            Requerido por Tailwind para procesar el CSS.
├── vite.config.js                Configuración del bundler.
├── .eslintrc.cjs                 Reglas de lint para mantener consistencia de código.
│
└── src/
    ├── main.jsx                 Punto de entrada: monta <App /> en el DOM.
    ├── index.css                 Directivas de Tailwind + clases utilitarias
    │                            reutilizables (botones, títulos de sección, etc).
    ├── App.jsx                   Componente raíz: ensambla todas las secciones
    │                            en el orden en que aparecen en la página.
    │
    ├── data/
    │   └── negocio.js            Toda la información del negocio (nombre, precios,
    │                            horarios, testimonios, equipo) centralizada en un
    │                            solo lugar — separa contenido de presentación.
    │
    └── components/
        ├── Icons.jsx              Set de íconos SVG propios (sin librería externa,
        │                        mantiene el bundle ligero).
        ├── Header.jsx              Navegación fija con menú responsive (hamburguesa
        │                        en móvil) y CTA de reserva.
        ├── Hero.jsx                 Sección de apertura con layout asimétrico.
        ├── SobreNosotros.jsx        Historia del negocio y cifras clave.
        ├── Servicios.jsx            Tarjetas de servicios con precio (MXN) y duración.
        ├── TicketDivider.jsx        Elemento visual firma: franja diagonal que separa
        │                        secciones, inspirada en la ficha de turno de barbería.
        ├── Galeria.jsx              Grid de fotos del local y trabajos realizados.
        ├── Equipo.jsx               Tarjetas del equipo de barberos.
        ├── Testimonios.jsx          Reseñas de clientes con calificación en estrellas.
        ├── Ubicacion.jsx            Mapa embebido, horarios y datos de contacto.
        ├── CtaFinal.jsx             Llamado a la acción final antes del footer.
        ├── Footer.jsx               Pie de página con links y redes sociales.
        └── BotonFlotanteWhatsapp.jsx Botón flotante de WhatsApp (patrón común en
                                     negocios locales mexicanos).
```

## Decisiones de diseño

- **Paleta**: negro café (`#1C1B19`), caliza (`#E8DFD0`), terracota (`#8B3A2F`),
  verde henequén (`#5C6B4F`) y latón envejecido (`#C9A24B`) — materiales y
  colores propios de la arquitectura y el paisaje yucateco, en lugar de la
  paleta genérica negro+acento neón.
- **Tipografía**: `Big Shoulders Display` (condensada, bold) para títulos,
  evocando los rótulos pintados a mano de negocios del Centro de Mérida;
  `Inter` para texto de cuerpo, por legibilidad.
- **Elemento firma**: la franja diagonal "ticket-stripe" que separa secciones,
  reinterpretando la ficha numerada que se entrega al cliente al llegar.
- **Conversión**: todos los CTA llevan a un link de WhatsApp pre-llenado
  (`wa.me`), el canal de reserva más usado por negocios locales en México.

## Accesibilidad

- Foco visible (`:focus-visible`) en todos los elementos interactivos.
- `prefers-reduced-motion` respetado.
- Textos alternativos descriptivos en todas las imágenes.
- Contraste de color verificado entre texto y fondo en ambas paletas
  (sobre `ink` y sobre `limestone`).

## Próximos pasos sugeridos

- Reemplazar las imágenes de stock (Unsplash) por fotografía real del local.
- Conectar el formulario de reserva a un sistema real de citas si se desea
  ir más allá de WhatsApp.
- Agregar Google Analytics o Plausible para medir conversión del CTA.
