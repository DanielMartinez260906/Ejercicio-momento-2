import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function HomePage() {
  const navigate = useNavigate();

  const handleReservaClick = () => {
    navigate('/reservas');
  };

  return (
    <div className="page">
      <Header />
      <main className="main-content">
        <Hero
          title="El arte de la
paciencia"
          subtitle="Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.&#10;Un espacio para reconectar con la naturaleza."
          buttonText="Reserva un taller"
          onButtonClick={handleReservaClick}
        />
      </main>
      <Footer />
    </div>
  );
}
