require('dotenv').config();
const { readInput, inquirerMenu, pause, listPlaces } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');


const main = async() => {
    
    const busquedas = new Busquedas();
    let opt = '';



    do {
        
        opt = await inquirerMenu();

        switch( opt ) {
            case '1':

                //Mostramos mensaje
            const termino = await readInput('Ciudad: ');
            //Buscar los lugares
            const lugares = await busquedas.city( termino );
            //Seleccionar el lugar
            const idSelect = await listPlaces(lugares);

            if( idSelect === '0' ) continue;
            const selectPlace = lugares.find( l => l.id === idSelect );
            // Guardar en DB
            busquedas.addHistorial( selectPlace.nombre );

            const weather = await busquedas.wheather(selectPlace.lat, selectPlace.lng)

                // //Mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:',  selectPlace.nombre);
                console.log('Lat:',  selectPlace.lat);
                console.log('Lng:', selectPlace.lng);
                console.log('Temperatura:', weather.temp);
                console.log('Maxima:', weather.max);
                console.log('Minima:', weather.min);
                console.log('Clima actual:', weather.desc.green);
                break;
                case 2:
                    busquedas.historial.firEach( (place, i) => {
                        const idx = `${ i + 1 }`.green;
                        console.log(`${idx}` `${ place }`);
                    })

                    break;
        }


        if(opt !== 0) await pause();
    
    } while(opt !== 0)


    // console.log( text )
}


main();