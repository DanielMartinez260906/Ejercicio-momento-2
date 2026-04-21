import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function FilosofiaPage() {
  return (
    <div className="page">
      <Header />
      <main className="main-content">
        <Hero
          title="Menos es más"
          subtitle="Nuestra filosofia se centra en la observación y el respeto por los ritmos naturales.\nCreemos que cultivar un Bonsái no es solo jardinería, sino una meditación activa."
          centered={true}
          
        />
        <section className="content-section">
          <p>
            En nuestro estudio, te enseñamos a escuchar al árbol, entendiendo que cada corte y cada alambrado debe tener un propósito. Buscamos el equilibrio perfecto entre la intervención humana y la expresión salvaje de la naturaleza.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
