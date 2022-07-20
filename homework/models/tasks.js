
/*
_list: 
    { 'uuid-1232343-23456-1: {id:23}   }
*/

const Homework = require('./task');

class Homeworks {

    _list = {
        'abc': 123
    };

    get listArr() {
        const list = [];
        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            list.push( task );
        } )
        return list;
    }

    constructor() {
        this._list = {};
    }

    deleteTask(id = '') {
        if(this._list[id]) {
            delete this._list[id];
        }
    }

    loadTaskFromArray( tasks = []) {
        tasks.forEach( task => {
            this._list[task.id] = task;
        });
    }

    createTask(desc = '') {

        const task = new Homework(desc);
        this._list[task.id] = task;
    }

    fullList() {
        this.listArr.forEach( (task, id) => {
            const idx = `${id + 1}`.green;
            const { desc, completed} = task;
            const state = (completed) ? 'Completed'.green : 'Slope'.red;

            console.log(`${idx} ${desc} - ${state}`)
        })
    }

    listCompleted( complete = true) {
        let counter = 0;
        this.listArr.forEach( (task) => {
            const { desc, completed } = task;
            const state = (completed) ? 'Completed'.green : 'Slope'.red
            if(complete) {
                //Show completed tasks
                if( completed ) {
                    counter += 1;
                    console.log(`${(counter + '.').green} ${desc} - ${state}`)
                }
            } else {
                if( !completed ) {
                    counter += 1;
                    console.log(`${(counter + '.').green} ${desc} - ${state}`)
                }
            }
        });
    }

    toggleComplete( ids = [] ) {

        ids.forEach( id => {

            const task = this._list[id];
            if ( !task.completed  ) {
                task.completed = new Date().toISOString()
            }

        });

        this.listArr.forEach( task => {

            if ( !ids.includes(task.id) ) {
                this._list[task.id].completed = null;
            }

        });
    }
}


module.exports = Homeworks;