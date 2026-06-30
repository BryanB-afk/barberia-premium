import { ENLACE_WHATSAPP } from '../data/negocio.js';
import { IconWhatsapp } from './Icons.jsx';

export default function BotonFlotanteWhatsapp() {
  return (
    <a
      href={ENLACE_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar cita por WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-henequen hover:bg-henequen-light
        text-limestone flex items-center justify-center shadow-lg transition-colors"
    >
      <IconWhatsapp className="w-6 h-6" />
    </a>
  );
}
