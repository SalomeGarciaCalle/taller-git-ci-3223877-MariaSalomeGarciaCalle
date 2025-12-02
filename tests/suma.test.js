const { suma } = require('../src/app.js');

console.log('Iniciando tests...');

// Test mínimo con Node.js nativo (sin Jest)
if (suma(2, 3) === 5) {
  console.log('✔ suma(2, 3) === 5');
} else {
  console.error('✘ suma(2, 3) falló');
  process.exit(1);
}

if (suma(-1, 1) === 0) {
  console.log('✔ suma(-1, 1) === 0');
} else {
  console.error('✘ suma(-1, 1) falló');
  process.exit(1);
}

console.log('Todos los tests pasaron');