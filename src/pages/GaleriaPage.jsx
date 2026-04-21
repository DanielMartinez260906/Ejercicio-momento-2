import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GaleriaPage() {
  const imagenes = [
    { id: 1, title: 'Arce Japonés' },
    { id: 2, title: 'Pino Negro' },
    { id: 3, title: 'Ficus Retusa' },
    { id: 4, title: 'Olmo Chino' },
    { id: 5, title: 'Enebro' },
    { id: 6, title: 'Azalea' },
  ];

  return (
    <div className="page">
      <Header />
      <main className="main-content">
        <div className="galeria-header">
          <h1>Nuestra Colección</h1>
          <p>Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada árbol cuenta una historia de tiempo y paciencia.</p>
        </div>
        <section className="galeria-grid">
          {imagenes.map((imagen) => (
            <div key={imagen.id} className="galeria-item">
              <div className="galeria-placeholder">
                <p>{imagen.title}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
