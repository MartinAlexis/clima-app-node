const axios = require('axios');



const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0eb340f5e2ba5653ff2be1f977040fe8&units=degrees`);

    return resp.data.main.temp;
}





module.exports = {
    getClima
}