console.log("Hola mundo");
console.log("Nodemon es un loquillo");


//Para usar express
const express = require('express');
const app = express();

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

app.use('/nueva-mascota',( request,response,text) => {

    response.send('<form action = "/guardar" method= "POST"><input type = "text" name = "nombre"><input type = "submit" name = "enviar" value = "adoptar"></form>')

});
app.use('/guardar',( request,response,text) => {

    console.log(request.body);
    response.send('Gracias por adoptar a ' + request.body.nombre + '!');

});

app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
});


app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});


         

app.listen(3000);
                      