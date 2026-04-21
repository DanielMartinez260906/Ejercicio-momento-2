import Header from '../components/Header';
import Footer from '../components/Footer';
import FormularioReserva from '../components/FormularioReserva';

export default function ReservasPage() {
  return (
    <div className="page">
      <Header />
      <main className="main-content">
        <div className="reservas-header">
          <h1>Reserva un Taller</h1>
          <p>Rellena el formulario para reservar tu lugar en nuestro próximo taller</p>
        </div>
        <FormularioReserva />
      </main>
      <Footer />
    </div>
  );
}
