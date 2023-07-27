// Fecha y hora del evento (ajustada al 29 de julio de 2023 a las 5:00 PM)
const eventDate = new Date('2023-07-29T17:00:00');

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = eventDate - currentDate;

  if (timeDifference <= 0) {
    // El evento ha ocurrido, puedes mostrar un mensaje especial o esconder el contador
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  // Cálculo del tiempo restante
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Actualización de los elementos en la página
  document.getElementById('days').textContent = days < 10 ? '0' + days : days;
  document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
  document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
}

// Llamada inicial para que el contador se actualice al cargar la página
updateCountdown();

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);
