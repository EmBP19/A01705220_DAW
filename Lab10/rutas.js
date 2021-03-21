const movies = [
        {url:'TSN',
            title: 'The Social Network',
        img: 'https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
        director : 'David Fincher',
        content :'The Social Network es una de mis peliculas favoritas en cuanto se trata de cinematografia y dialogo. Dejando de lado la historia del drama relacionado con la creacion de la red social "Facebook", la parte mas cautivante para mi son las tomas que el director utiliza para mantenerte pegado a la pantalla.'},
        {url:'CK',
            title: 'Citizen Kane',
         img:'https://i.pinimg.com/originals/df/41/34/df413427c01d1bcd2fe0c8b9ccdaed7c.jpg',
         director: 'Orson Welles',
         content:'Esta pelicula es el cliche de un cinefilo. La tipica respuesta a la pregunta "Cual es tu pelicula favorita?". Sin embargo, la pongo en esta lista por su aporte a los avances cinematograficos. Orson Welles utilizo la tecnica "deep focus", donde todo lo que se ve en camara esta enfocado, es decir, no hay ningun elemento borroso a la vista. Ademas de ser esteticamente agradable, no lleva a la audiencia de la mano y permite al expectador enfocarse en lo que el quiera y no en lo que la pelicula le dice. Desde entonces, la tecnica se ha hecho bastante popular ente cinematografos.'},
         {url:'BD',
             title:'Baby Driver',
         img:'https://nzfilmfreak.files.wordpress.com/2018/03/babydriver.jpg?w=640&h=336',
         director:'Edgar Wright',
         content:'Ampliando el tema de lo visual con la cinematografia, Baby Driver hace algo mas que solo ser una pelicula de accion. Edgar Wright se apoya del audiovisual para crear una de las peliculas mas entretenidas que he visto. La pelicula llevaun ritmo de acuerdo a la cancion que esta escuchando nuestro protagonista en un momento dado, yo todo desde el sonido de las puertas de un auto hasta las balas de una pistola, estan sincronizadas perfectamente. Recomiendo muchisimo simplemente por lo divertido que es ver lo que el director logra unificar con estos efectos.'}

]

const peliculas = [];

const http = require('http');
const server = http.createServer( (request, response) => {
  
    if(request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body>');
        response.write('<h1>Unas peliculas</h1>');
        response.write('<ul>');
        for(let movie of movies) {
            response.write('<li><a href="/' + movie.url + '">' + movie.title +'</a></li>');
        }
        
        response.write('<li><a href="/fav">Cual es tu pelicula favorita?</a></li></body></html>');
        response.write('</ul>');
        response.end();
    } else if (request.url === '/TSN') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>'+movies[0].title+'</title></head><body>');
        response.write('<h1>'+movies[0].title+'</h1>');
        response.write('<h2>Dirigida por: '+movies[0].director+'</h2>');
        response.write('<table><tr><td><img alt="The Social Network movie poster" src="'+movies[0].img+'"></td><td>');
        response.write('<p style="text-align:center">' + movies[0].content + '</p>' + '</td></tr></table></body></html>');
        response.end();
    } else if (request.url === '/CK') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>'+movies[1].title+'</title></head><body>');
        response.write('<h1>'+movies[1].title+'</h1>');
        response.write('<h2>Dirigida por: '+movies[1].director+'</h2>');
        response.write('<table><tr><td><img alt="The Social Network movie poster" src="'+movies[1].img+'"></td><td>');
        response.write('<p style="text-align:center">' + movies[1].content + '</p>' + '</td></tr></table></body></html>');
        response.end();
    }else if (request.url === '/BD') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>'+movies[2].title+'</title></head><body>');
        response.write('<h1>'+movies[2].title+'</h1>');
        response.write('<h2>Dirigida por: '+movies[2].director+'</h2>');
        response.write('<table><tr><td><img alt="The Social Network movie poster" src="'+movies[2].img+'"></td><td>');
        response.write('<p style="text-align:center">' + movies[2].content + '</p>' + '</td></tr></table></body></html>');
        response.end();
    } else if (request.url === '/fav' && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Tu recomendacion:</title></head><body>');
        response.write('<form action="/fav" method="POST">');
        response.write('Cual es tu pelicula favorita?: <input type="text" name="favorita"><br>');
        response.write('<input type="submit" name="enviar" value="Enviar"><br>');
        response.write('</form>');
        response.write('</body></html>');
        response.end();
    } else if (request.url === '/fav' && request.method === "POST") {
        const datos = [];
        request.on('data', (dato) => {
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            const peliculafav = datos_completos.split('=')[1].split('&')[0];

            console.log(peliculafav);
            peliculas.push(peliculafav);
            const file_system = require('fs');
            file_system.writeFileSync('pelicula_favorita.txt', peliculas.toString());

            response.statusCode = 302;
            response.setHeader('Location', '/');
            response.end();
        });

    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<html></html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Página no disponible</title></head><body>');
        response.write('<h1>Página no disponible - Error 404</h1>');
        response.write('</body></html>');
        response.end();
    }
  
  });
  
  server.listen(3000);