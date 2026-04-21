import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GaleriaPage() {
  const imagenes = [
    { id: 1, title: 'Bonsái 1' },
    { id: 2, title: 'Bonsái 2' },
    { id: 3, title: 'Bonsái 3' },
    { id: 4, title: 'Bonsái 4' },
    { id: 5, title: 'Bonsái 5' },
    { id: 6, title: 'Bonsái 6' },
  ];

  return (
    <div className="page">
      <Header />
      <main className="main-content">
        <div className="galeria-header">
          <h1>Galería de Bonsáis</h1>
          <p>Conoce nuestras colecciones de árboles maravillosos</p>
        </div>
        <section className="galeria-grid">
          {imagenes.map((imagen) => (
            <div key={imagen.id} className="galeria-item">
              <div className="galeria-placeholder">
                <img
                  src={`https://via.placeholder.com/300x300?text=${imagen.title}`}
                  alt={imagen.title}
                />
              </div>
              <h3>{imagen.title}</h3>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
