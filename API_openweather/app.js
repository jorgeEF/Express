const express = require('express');
const request = require('request');

const app = express();

app.get("/", (req,res) => {        
    request('https://api.openweathermap.org/data/2.5/weather?id=3861445&appid=d151fb90208c92b784e87974758bd465&lang=sp&units=metric', function (error, response, body) {
    let data = JSON.parse(body)    
    if(response.statusCode === 200){
        res.send(`En ${data.name} la temperatura es de ${data.main.temp}ºC`)
    }
    });
});

app.listen(3000, () => console.log("el servidor se ejecuta correctamente"));

