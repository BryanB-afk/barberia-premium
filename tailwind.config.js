/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Negro café — fondo principal, evoca el cuero de los sillones de barbero
        ink: {
          DEFAULT: '#1C1B19',
          light: '#26241F',
          dark: '#121110',
        },
        // Caliza — texto claro y fondos secundarios, color de la piedra yucateca
        limestone: {
          DEFAULT: '#E8DFD0',
          light: '#F3EEE3',
          dark: '#D6CAB3',
        },
        // Terracota — acento principal, ladrillo y barro quemado
        terracota: {
          DEFAULT: '#8B3A2F',
          light: '#A8473A',
          dark: '#6E2C23',
        },
        // Verde henequén — acento secundario, la planta histórica de Mérida
        henequen: {
          DEFAULT: '#5C6B4F',
          light: '#71815F',
          dark: '#46523C',
        },
        // Latón envejecido — detalles, líneas, iconografía
        brass: {
          DEFAULT: '#C9A24B',
          light: '#D9BC73',
          dark: '#A4813A',
        },
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'ticket-stripe':
          'repeating-linear-gradient(135deg, transparent, transparent 18px, rgba(201,162,75,0.12) 18px, rgba(201,162,75,0.12) 19px)',
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
};
