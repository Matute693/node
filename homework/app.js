require('colors');

const { saveDB, readDB } = require('./helpers/saveFile');
const { inquirerMenu,
        pause, 
        readInput, 
        deleteListTask, 
        confirm,
        showCheckList, 
} =  require('./helpers/inquirer');
const Homeworks = require('./models/tasks');



const main = async() => {
    console.log('Welcome this is the console app with Node.js');

    let opt = '';
    const tasks = new Homeworks();

    const taskDB = readDB();

    if(taskDB) { // set tasks
        tasks.loadTaskFromArray(taskDB)
    }

    do {//Print menu
         opt = await inquirerMenu();
         switch(opt) {
            case '1':
                //Create option 
                const desc = await readInput('Description: ');
                tasks.createTask(desc);
            break;

            case '2': // full list
                tasks.fullList( tasks )
            break;
            case '3':
                tasks.listCompleted( true );
            break;

            case '4': //Complete list
                tasks.listCompleted( false );
            break;
            case '5': //Completed
                const ids = await showCheckList( tasks.listArr );
                tasks.toggleComplete( ids );
            break;
            case '6': // Delete
                const id = await deleteListTask( tasks.listArr );
                if( id !== '0') {
                    const deleteConfirm = await confirm('Are you sure?');
                    if( deleteConfirm ) {
                        tasks.deleteTask( id );
                        console.log('Task deleted');
                    }
                }
            break;
         }

         saveDB( tasks.listArr );
         await pause()

        } while(opt !== '0')

}


main();