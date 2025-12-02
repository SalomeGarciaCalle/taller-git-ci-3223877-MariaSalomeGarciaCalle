// Función que añade <li> a #lista
function agregarItem(texto) {
  const lista = document.getElementById('lista');
  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
}

// Conectar botón
document.getElementById('btnAgregar').addEventListener('click', () => {
  agregarItem(`Item ${Date.now()}`);
});