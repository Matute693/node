
const { createFileTable } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
// const [,,arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');
// console.log(base);


createFileTable( argv.b, argv.l, argv.h )
    .then( file => console.log( file ))
    .catch( err => console.log( err ))