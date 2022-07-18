const fs = require('fs');
require('colors');

const createFileTable = async( base = 3, listar, until ) => {

        let salida = '';
        let consoled = '';
        for(let i = 1; i <=until; i++) {
        salida += `${base} x ${i} = ${ base * i }\n `;
        consoled += `${base} ${ 'X'.green} ${until} = ${ base * i }\n `;
        }
    
        if(listar) {
            console.log('=================' .green)
            console.log(`TABLA DEL ${base}` .white)
            console.log('=================' .green)
            console.log(consoled);
        }
    
        // Genera un archivo txt con la tabla de 5
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;
}

module.exports = {
    createFileTable
}