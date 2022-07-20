require('colors');

const showMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('===================='.green);
        console.log('Select a option'.green);
        console.log('====================\n'.green);
    
        console.log(`${'1. '.green}Create task`);
        console.log(`${'2. '.green}List homework`);
        console.log(`${'3. '.green}List completed tasks`);
        console.log(`${'4. '.green}List pending tasks`);
        console.log(`${'5. '.green}Complete task`);
        console.log(`${'6. '.green}Delete task`);
        console.log(`${'0. '.green}Exit`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('Select a option:' , (opt) => {
            readline.close() // Cerramos el readline para que no siga esperando valores del usuario
            resolve(opt);
        })
    }); 

}


const pause = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPress ${'ENTER'.blue} to continue\n`, (opt) => {
            readline.close()
            resolve();
        });
    });
}


module.exports = {
    showMenu,
    pause
}