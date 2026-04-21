import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function FilosofiaPage() {
  return (
    <div className="page">
      <Header />
      <main className="main-content">
        <Hero
          title="Filosofía Bonsái"
          subtitle="La paciencia, la dedicación y el respeto por la naturaleza son los pilares de nuestro trabajo."
        />
        <section className="content-section">
          <h2>El Camino del Bonsái</h2>
          <p>
            El arte del bonsái es más que una técnica de cultivo; es una filosofía de vida que
            enseña paciencia, respeto y conexión con la naturaleza.
          </p>
          <p>
            Cada árbol cuenta una historia, refleja el trabajo dedicado y la armonía entre el
            cultivador y la planta.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
