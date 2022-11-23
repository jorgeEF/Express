const express = require('express');
const https = require('https')

const app = express();

const api = "https://api.openweathermap.org/data/2.5/weather?id=3861445&appid=d151fb90208c92b784e87974758bd465&lang=sp&units=metric";

app.get("/", (req,res) => {          
    https.get(api, function(response) {        
        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
            res.write(`<h1> En ${weatherData.name} la temperatura es de ${weatherData.main.temp}ºC`);
        });        
    });
});

app.listen(3000, () => console.log("el servidor se ejecuta correctamente"));