const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check( (argv, options) => {
        if( isNaN(argv.b) ) {
            throw 'La base tiene que ser numero'
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Indica hasta que numero multiplico'
    })
    .argv;

    module.exports = argv;