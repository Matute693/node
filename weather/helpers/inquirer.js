const inquirer = require('inquirer');
require('colors')

const questions = [
     {
         type: 'list',
         name: 'option',
         message: 'Que ciudad buscas?',
         choices: [
            {
                value: '1',
                name: `${'1.' .green} Buscar ciudad`
            },
            {
                value: '2',
                name: `${'2.' .green} Historial`
            },
            {
                value: '3',
                name: `${'3.' .green} Salir`
            }
        ],
     }
]

const inquirerMenu = async() => {

    console.log('===================='.green);
    console.log('Select a option'.white);
    console.log('====================\n'.green);

    const { option } = await inquirer.prompt(questions);
    return option;
}


const pause = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `(Press ${'ENTER'.green} to continue`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question)
}


const readInput = async( message ) => {
    const questionRead = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if(value.length === 0) {
                    return 'Please enter a value'
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(questionRead);
    return desc;
}

// Retorna la lista por id y nombre
const listPlaces = async(places = []) => {

    const choices = places.map( (place, i) => {
        const index = `${i + 1}`.green;
        return {
            value: place.id,
            name: `${index} - ${place.nombre}`
        }
    });

    choices.unshift({
        value:'0',
        name: '0.'.green + ' Cancel'
    })

    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccionar ciudad',
            choices
        }
    ];
    const { id } = await inquirer.prompt(question);
    return id;
}

const confirm = async( message ) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const showCheckList = async(tasks = []) => {

    const choices = tasks.map( (task, i) => {
        const idx = `${i + 1}.`.green;
        return {
            value: task.id,
            name: `${idx} - ${task.desc}`,
            checked: (task.completed) ? true : false
        }
    });

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Select',
            choices
        }
    ];
    const { ids } = await inquirer.prompt(question);
    return ids;
}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listPlaces,
    confirm,
    showCheckList,
}