// Función que añade <li> a #lista
// Función que añade <li> a #lista
function agregarItem(texto) {
  const lista = document.getElementById('lista');
  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
}

// --- Solo ejecutar si estamos en el navegador ---
if (typeof window !== 'undefined') {
  document.getElementById('btnAgregar').addEventListener('click', () => {
    const input = document.getElementById('inputTexto');
    const texto = input.value.trim();
    if (texto) {
      agregarItem(texto);
      input.value = '';
    }
  });

  document.getElementById('inputTexto').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('btnAgregar').click();
    }
  });
}
// Función de suma
function suma(a, b) {
  return a + b;
}

// ✅ Exportar para los tests
if (typeof module !== 'undefined') {
  module.exports = { suma };
}