
const express = require('express')
const cors = require('cors');
class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath =  '/api/users';

        //Middlewares
        this.middlewares();
        // Son funciones que se ejecuta cuando levantamos nuestro servidior

        //Application ruotes
        this.routes();
    }

    middlewares() {
        
        //CORS
        this.app.use(cors());

        // Parse and body read
        this.app.use( express.json() )

        //Public directory
        this.app.use( express.static('public') )
    }


    routes() {
        this.app.use(this.usersPath, require('../routes/user'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server run port ', this.port);
        });
    }


}


module.exports = Server;