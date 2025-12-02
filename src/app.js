// Función de suma
function suma(a, b) {
  return a + b;
}

// Mostrar en consola
console.log('App lista');

// Exportar para los tests
if (typeof module !== 'undefined') {
  module.exports = { suma };
}