// Separador de sección con el patrón diagonal "ficha de turno".
// Es el elemento firma del diseño: reinterpreta el papelito numerado
// que se entrega al cliente al llegar a una barbería tradicional,
// convertido aquí en una franja rítmica entre secciones.

export default function TicketDivider({ label }) {
  return (
    <div className="ticket-divider flex items-center justify-center">
      {label && (
        <span className="relative z-10 font-display text-limestone text-sm sm:text-base tracking-widest2 uppercase font-semibold bg-henequen px-4">
          {label}
        </span>
      )}
    </div>
  );
}
