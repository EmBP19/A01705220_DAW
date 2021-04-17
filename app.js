console.log("Hola mundo");
console.log("Nodemon es un loquillo");


//Para usar express
const express = require('express');
const app = express();
const router = express.Router();

//Para usar body-parser
const bodyParser = require('body-parser');
const { response } = require('express');
const { text } = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use(
    (request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});



app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
});

//Para que ponga la raiz o home
app.get('/', (request, response, next) => {
    response.send('Bienvenido al mejor lugar para mascotas'); 
});

// Para mandar un 404
app.use((request, response, next) => {
    console.log('Error 404');
    response.status(404);
    response.send('Lo sentimos, hay muchas mascotas perdidas como tu en este sitio'); //Manda la respuesta
});


         

app.listen(3000);
                      