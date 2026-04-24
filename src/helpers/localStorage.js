const KEY = 'reservasBonsai';

export const guardarReserva = (formData) => {
  const reservas = obtenerReservas();
  reservas.push(formData);
  localStorage.setItem(KEY, JSON.stringify(reservas));
};

export const obtenerReservas = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};