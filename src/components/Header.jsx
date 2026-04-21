import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          ZENITH BONSAI
        </Link>
        <nav className="nav">
          <Link to="/filosofia">Filosofía</Link>
          <Link to="/galeria">Galería</Link>
          <Link to="/reservas">Reservas</Link>
        </nav>
      </div>
    </header>
  );
}
