import { useState } from 'react';

export default function FormularioReserva() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    experiencia: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos no vacíos
    if (!formData.nombre || !formData.email || !formData.experiencia) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Guardar en localStorage
    const reservas = JSON.parse(localStorage.getItem('reservasBonsai')) || [];
    reservas.push(formData);
    localStorage.setItem('reservasBonsai', JSON.stringify(reservas));

    // Log en consola
    console.log('Reserva guardada:', formData);

    // Limpiar formulario
    setFormData({
      nombre: '',
      email: '',
      experiencia: '',
      mensaje: '',
    });

    alert('¡Solicitud enviada exitosamente!');
  };

  return (
    <div className="formulario-container">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej. Ana Silva"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="experiencia">Nivel de experiencia</label>
          <select
            id="experiencia"
            name="experiencia"
            value={formData.experiencia}
            onChange={handleChange}
          >
            
            <option value="principiante">Principiante (Nunca he tenido un Bonsái)</option>
            <option value="intermedio">Intermedio (Tengo algunos árboles)</option>
            <option value="avanzado">Avanzado (Busco perfeccionar técnicas)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje (Opcional)</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="¿Qué te gustaría aprender?"
            rows="5"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar Solicitud
        </button>
      </form>
    </div>
  );
}
