console.log("Soy una PWA");
document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el contenedor de artículos
  const articlesContainer = document.querySelector('.articulos');

  // Agrega un evento de clic al contenedor de artículos
  articlesContainer.addEventListener('click', function () {
    // Cambia el color de fondo al hacer clic
    articlesContainer.style.backgroundColor = getRandomColor();
  });

  // Función para generar un color aleatorio en formato hexadecimal
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
