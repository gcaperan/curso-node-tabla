
const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs')

require('colors')

console.clear();


// const base = 4;

  crearArchivo(argv.b, argv.l, argv.h)
 .then(nombreArchivo => console.log('Se ha creado el archivo', nombreArchivo.rainbow))
 .catch(err => console.log(err))
