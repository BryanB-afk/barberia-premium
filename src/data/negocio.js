// Datos del negocio centralizados.
// Mantener el contenido aquí permite editar textos, precios y horarios
// sin tocar la lógica de los componentes — útil para que el propio
// dueño del negocio (o alguien sin conocimientos de React) pueda
// eventualmente actualizar la información.

export const NEGOCIO = {
  nombre: 'Barbería Itzá',
  eslogan: 'Oficio, navaja y barrio',
  telefono: '+52 999 123 4567',
  whatsapp: '529991234567',
  instagram: '@barberiaitza',
  direccion: 'Calle 21 #198 x 24 y 26, García Ginerés, 97070 Mérida, Yuc.',
  horarios: [
    { dia: 'Lunes a viernes', horario: '10:00 — 20:00' },
    { dia: 'Sábado', horario: '9:00 — 19:00' },
    { dia: 'Domingo', horario: 'Cerrado' },
  ],
};

export const ENLACE_WHATSAPP = `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una cita en Barbería Itzá'
)}`;

export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Barberos', href: '#equipo' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Reseñas', href: '#reseñas' },
  { label: 'Ubicación', href: '#ubicacion' },
];

export const SERVICIOS = [
  {
    id: 'corte-clasico',
    nombre: 'Corte clásico',
    descripcion: 'Tijera y máquina, acabado pulido con toalla caliente.',
    precio: 180,
    duracion: '30 min',
  },
  {
    id: 'fade',
    nombre: 'Fade / degradado',
    descripcion: 'Degradado de precisión a navaja, cualquier nivel.',
    precio: 220,
    duracion: '40 min',
  },
  {
    id: 'barba',
    nombre: 'Arreglo de barba',
    descripcion: 'Perfilado, hidratación y aceite para barba.',
    precio: 140,
    duracion: '25 min',
  },
  {
    id: 'afeitado',
    nombre: 'Afeitado con navaja',
    descripcion: 'Ritual tradicional con toalla caliente y navaja filosa.',
    precio: 200,
    duracion: '35 min',
  },
  {
    id: 'facial',
    nombre: 'Tratamiento facial',
    descripcion: 'Limpieza profunda, mascarilla de carbón y masaje.',
    precio: 260,
    duracion: '45 min',
  },
  {
    id: 'paquete-evento',
    nombre: 'Paquete para boda o evento',
    descripcion: 'Corte, barba y afeitado completo para el día especial.',
    precio: 480,
    duracion: '90 min',
    destacado: true,
  },
];

export const BARBEROS = [
  {
    id: 'rodrigo',
    nombre: 'Rodrigo Cetz',
    especialidad: 'Fades y diseños',
    anios: 9,
    imagen:
      'https://images.unsplash.com/photo-1622296089780-290d715192af?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'manuel',
    nombre: 'Manuel Pat',
    especialidad: 'Navaja y afeitado clásico',
    anios: 14,
    imagen:
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'andres',
    nombre: 'Andrés Couoh',
    especialidad: 'Barbas y tratamientos faciales',
    anios: 6,
    imagen:
      'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=600&auto=format&fit=crop',
  },
];

export const GALERIA = [
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=600&auto=format&fit=crop',
];

export const TESTIMONIOS = [
  {
    nombre: 'Jorge Aké',
    texto:
      'Llevo dos años viniendo cada quincena. El fade que me hace Rodrigo no lo encuentras en otro lado de Mérida.',
    estrellas: 5,
  },
  {
    nombre: 'Luis Fernando Cano',
    texto:
      'El afeitado con navaja es otro nivel, toalla caliente y todo el ritual. Salgo sintiéndome otra persona.',
    estrellas: 5,
  },
  {
    nombre: 'Pedro Briceño',
    texto:
      'Pedí el paquete para mi boda y quedé impecable. Ambiente muy agradable, te ofrecen café mientras esperas.',
    estrellas: 5,
  },
];
