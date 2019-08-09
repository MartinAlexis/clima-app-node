const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const econdeUlr = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${econdeUlr}`,
        headers: { 'X-RapidAPI-Key': '5c3889fd4cmsh91575607c67d86fp1f015ajsne6dbb7a9c4f7' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length == 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}