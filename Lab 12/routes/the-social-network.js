const express = require('express');
const router = express.Router();

const movies = [
    {title: 'The Social Network',
    img: 'https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
    director : 'David Fincher',
    content :'The Social Network es una de mis peliculas favoritas en cuanto se trata de cinematografia y dialogo. Dejando de lado la historia del drama relacionado con la creacion de la red social "Facebook", la parte mas cautivante para mi son las tomas que el director utiliza para mantenerte pegado a la pantalla.'}
];

router.use('/peliculas', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>'+movies[0].title+'</title></head><body>');
        response.write('<h1>'+movies[0].title+'</h1>');
        response.write('<h2>Dirigida por: '+movies[0].director+'</h2>');
        response.write('<table><tr><td><img alt="The Social Network movie poster" src="'+movies[0].img+'"></td><td>');
        response.write('<p style="text-align:center">' + movies[0].content + '</p>' + '</td></tr></table></body></html>');
        response.end();
});


module.exports = router;