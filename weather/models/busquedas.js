const fs = require('fs')
const axios = require('axios');


class Busquedas {

    historial = [];
    dbPath = './db/database.json';


    constructor() {
        //TODO: Leer DB si existe
    }

    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    get paramsWeather() {
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
        }
    }

    async city( city = '' ) {

        try {
            //Peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`,
                params: this.paramsMapBox
            });

            const resp = await instance.get();
            return resp.data.features.map( place => ({
                id: place.id,
                nombre: place.place_name,
                lng: place.center[0],
                lat: place.center[1]
            }));
        
        } catch (error) {
            return [];
        }
    }


    async wheather( lat, lon ) {

        try {
            
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.paramsWeather, lat, lon}
            });

            const resp = await instance.get();
            const { weather, main} = resp.data;
            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }


        }catch(err) {
            console.log(err);
        }
    }


    addHistorial( place = '' ) {
        
        if( this.historial.includes(place.toLocaleLowerCase())) {
            return;
        }


        this.historial.unshift( place.toLocaleLowerCase() );

        // Grabar en DB
        this.saveDB();


    }

    saveDB() {

        const payload = {
            historial: this.historial
        }

        fs.writeFile( this.dbPath, JSON.stringify(payload) );

    }

    readDB() {

    }


}


module.exports = Busquedas;