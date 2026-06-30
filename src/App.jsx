import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import SobreNosotros from './components/SobreNosotros.jsx';
import Servicios from './components/Servicios.jsx';
import TicketDivider from './components/TicketDivider.jsx';
import Galeria from './components/Galeria.jsx';
import Equipo from './components/Equipo.jsx';
import Testimonios from './components/Testimonios.jsx';
import Ubicacion from './components/Ubicacion.jsx';
import CtaFinal from './components/CtaFinal.jsx';
import Footer from './components/Footer.jsx';
import BotonFlotanteWhatsapp from './components/BotonFlotanteWhatsapp.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <Hero />
        <SobreNosotros />
        <TicketDivider label="Tarifario" />
        <Servicios />
        <Galeria />
        <Equipo />
        <Testimonios />
        <Ubicacion />
        <CtaFinal />
      </main>
      <Footer />
      <BotonFlotanteWhatsapp />
    </div>
  );
}
