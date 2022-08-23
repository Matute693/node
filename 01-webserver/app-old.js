

const http = require('http');

//request es toda la informacion que estan solicitando de la url, 
//como el header de la peticion, argumentos, es decir la solicitud web server

// response es la respuesta que va a dar mi servidor al cliente
http.createServer( (req, res) => {
    
    res.write('Hello world');
    res.end();

    
})
.listen( 2323 );

console.log('Listening by port', 2323);