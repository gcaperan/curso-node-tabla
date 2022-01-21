const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type:'number',
       demandOption: true,
       describe: 'Es la base de la tabla de multiplicar'
     // default: 2
    })
    .option('l',{
        alias: 'listar',
        type:'boolean',
        // demandOption: true,
        default: false,
        describe: 'Muestra la tabla por pantalla'
    })
    .option('h',{
        alias: 'hasta',
        type:'number',
        // demandOption: true,
        default: 10,
        describe: 'tamaño de la tabla de multiplicar'
    })
    .check( (argv, options) => {
          if( isNaN( argv.b ) ){
         
              throw 'La base debe ser un numero'
          } 
          if( isNaN( argv.h ) ){
         
                throw 'el tamaño debe ser un numero'
          } 
          return true
                    
      })
    .argv;

    module.exports = argv;