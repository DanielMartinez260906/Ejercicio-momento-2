import { useState } from 'react';

export default function FormularioReserva() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    fecha: '',
    horario: '',
    participantes: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos no vacíos
    if (
      !formData.nombre ||
      !formData.email ||
      !formData.fecha ||
      !formData.horario ||
      !formData.participantes
    ) {
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
      fecha: '',
      horario: '',
      participantes: '',
      mensaje: '',
    });

    alert('¡Reserva guardada exitosamente!');
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Tu nombre"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
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
        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="horario">Horario</label>
        <select
          id="horario"
          name="horario"
          value={formData.horario}
          onChange={handleChange}
        >
          <option value="">Selecciona un horario</option>
          <option value="09:00">09:00</option>
          <option value="11:00">11:00</option>
          <option value="14:00">14:00</option>
          <option value="16:00">16:00</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="participantes">Cantidad de participantes</label>
        <input
          type="number"
          id="participantes"
          name="participantes"
          value={formData.participantes}
          onChange={handleChange}
          placeholder="1"
          min="1"
        />
      </div>

      <div className="form-group">
        <label htmlFor="mensaje">Mensaje (opcional)</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Cuéntanos algo sobre ti..."
          rows="4"
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Confirmar Reserva
      </button>
    </form>
  );
}
