// Función que añade <li> a #lista
function agregarItem(texto) {
  const lista = document.getElementById('lista');
  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
}

document.getElementById('btnAgregar').addEventListener('click', () => {
  const input = document.getElementById('inputTexto');
  const texto = input.value.trim();
  if (texto) {
    agregarItem(texto);
    input.value = '';
  }
});
// Agregar también con Enter
document.getElementById('inputTexto').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('btnAgregar').click();
  }
});