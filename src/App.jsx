import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FilosofiaPage from './pages/FilosofiaPage';
import GaleriaPage from './pages/GaleriaPage';
import ReservasPage from './pages/ReservasPage';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filosofia" element={<FilosofiaPage />} />
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/reservas" element={<ReservasPage />} />
      </Routes>
    </Router>
  );
}
