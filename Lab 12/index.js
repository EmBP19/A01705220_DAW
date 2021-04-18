
const express = require('express');
const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutasBabyDriver = require('./routes/baby-driver');
const rutasTheSocialNetwork = require('./routes/the-social-network');
const rutasRecomiendaPeli = require('./routes/pelicula-favorita');
const rutasCitizenKane = require('./routes/citizen-kane');

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});


app.use('/baby-driver', rutasBabyDriver);
app.use('/the-social-network', rutasTheSocialNetwork);
app.use('/citizen-kane',rutasCitizenKane);
app.use('/pelicula-favorita',rutasRecomiendaPeli);


app.get('/', (request, response, next) => {
    response.send('<html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Lab12</title></head><body><h1>Lab 12 - Mis Peliculas favoritas</h1><ul><li><a href="/the-social-network/peliculas"> The Social Network</a></li><li><a href="/baby-driver/peliculas">Baby Driver</a></li><li><a href="/citizen-kane/peliculas">Citizen Kane</a></li><li><a href="/pelicula-favorita/recomendacion">Recomiendame una peli</a></li></ul></body></html>');
});

app.use((request, response, next) => {
    console.log('Error 404');
    response.status(404)
    response.send('Esta pagina no existe'); //Manda la respuesta
});

app.listen(2000);