const fs = require('fs');

const colors = require('colors');

const crearArchivo = async ( base = 2, l = false, h = 10) => {

    try {

    console.log('========================='.blue);
    console.log('       Tabla del '.blue,colors.yellow(base));
    console.log('========================='.blue);
    
        
    let salida = '';
    let consola = '';
    
    for(let i=1;i<h+1;i++) {
        salida += `${base} x ${i} = ${base*i}\n`;
        consola += `${colors.red(base)} ${ 'x'.yellow } ${colors.red(i)} ${'='.green} ${base*i}\n`;
            
    }
    if (l) console.log(consola);

      
    
            fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    
            console.log(`fichero tabla-${base}.txt creado`);   
            return (`tabla-${base}.txt`);

        }catch(error)
        { 
            console.log(`Error en la creación del fichero`); 
            throw(error);
        }

    
}

module.exports = {
    crearArchivo
}