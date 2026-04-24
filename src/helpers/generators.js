export const generarIdReserva = () => {
  return `reserva-${Date.now()}`;
};

export const generarFechaActual = () => {
  return new Date().toLocaleDateString('es-CO');
};