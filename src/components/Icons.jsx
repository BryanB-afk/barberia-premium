// Iconos SVG minimalistas, trazo único (stroke), consistentes con la
// estética de líneas finas del resto del sitio. Se evita instalar una
// librería de íconos completa para mantener el bundle ligero.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function IconScissors({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

export function IconRazor({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 4l9 9" />
      <path d="M13 4l7 7-5 5-7-7" />
      <path d="M9 18l-4 2 2-4" />
    </svg>
  );
}

export function IconBeard({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M7 4h10v6c0 4-2 9-5 11-3-2-5-7-5-11V4z" />
      <path d="M9 4v3" />
      <path d="M15 4v3" />
    </svg>
  );
}

export function IconDroplet({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z" />
    </svg>
  );
}

export function IconSparkle({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  );
}

export function IconRing({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="14" r="6" />
      <path d="M9 8l3-5 3 5" />
    </svg>
  );
}

export function IconWhatsapp({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.6 6.3A8.7 8.7 0 0 0 12 4a8.8 8.8 0 0 0-7.6 13.2L3 21l3.9-1.3A8.8 8.8 0 0 0 12 21a8.8 8.8 0 0 0 8.8-8.8 8.7 8.7 0 0 0-3.2-5.9zm-5.6 13a7.3 7.3 0 0 1-3.7-1l-.3-.2-2.3.8.8-2.3-.2-.3A7.4 7.4 0 1 1 19.3 12 7.3 7.3 0 0 1 12 19.3zm4-5.5c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.5.1-.6.7-.7.9-.3.2-.5.1a6 6 0 0 1-1.8-1.1 6.6 6.6 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.5l.4-.4a1.8 1.8 0 0 0 .2-.4.4.4 0 0 0 0-.4c-.1-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.3 11.3 0 0 0 4.4 3.9c.6.2 1 .4 1.4.5a3.4 3.4 0 0 0 1.5.1 2.5 2.5 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c-.1 0-.2-.1-.4-.2z" />
    </svg>
  );
}

export function IconInstagram({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPin({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 21s7-7.4 7-12a7 7 0 0 0-14 0c0 4.6 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function IconClock({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IconStar({ className = 'w-4 h-4', filled = true }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? '#C9A24B' : 'none'}
      stroke="#C9A24B"
      strokeWidth={1.5}
    >
      <path d="M12 2.5l2.9 6 6.6.6-5 4.4 1.5 6.5L12 16.8l-5.9 3.2 1.5-6.5-5-4.4 6.6-.6L12 2.5z" />
    </svg>
  );
}

export function IconMenu({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

export function IconX({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}
