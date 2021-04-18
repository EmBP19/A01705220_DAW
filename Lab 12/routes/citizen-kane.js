const express = require('express');
const router = express.Router();

const movies = [
    { title: 'Citizen Kane',
    img:'https://i.pinimg.com/originals/df/41/34/df413427c01d1bcd2fe0c8b9ccdaed7c.jpg',
    director: 'Orson Welles',
    content:'Esta pelicula es el cliche de un cinefilo. La tipica respuesta a la pregunta "Cual es tu pelicula favorita?". Sin embargo, la pongo en esta lista por su aporte a los avances cinematograficos. Orson Welles utilizo la tecnica "deep focus", donde todo lo que se ve en camara esta enfocado, es decir, no hay ningun elemento borroso a la vista. Ademas de ser esteticamente agradable, no lleva a la audiencia de la mano y permite al expectador enfocarse en lo que el quiera y no en lo que la pelicula le dice. Desde entonces, la tecnica se ha hecho bastante popular ente cinematografos.'}

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