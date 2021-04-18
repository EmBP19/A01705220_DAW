const express = require('express');
const router = express.Router();


const movies = [
    {title:'Baby Driver',
    img:'https://nzfilmfreak.files.wordpress.com/2018/03/babydriver.jpg?w=640&h=336',
    director:'Edgar Wright',
    content:'Ampliando el tema de lo visual con la cinematografia, Baby Driver hace algo mas que solo ser una pelicula de accion. Edgar Wright se apoya del audiovisual para crear una de las peliculas mas entretenidas que he visto. La pelicula llevaun ritmo de acuerdo a la cancion que esta escuchando nuestro protagonista en un momento dado, yo todo desde el sonido de las puertas de un auto hasta las balas de una pistola, estan sincronizadas perfectamente. Recomiendo muchisimo simplemente por lo divertido que es ver lo que el director logra unificar con estos efectos.'}


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


