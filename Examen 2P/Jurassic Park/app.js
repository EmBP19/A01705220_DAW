const express = require('express');
const app = express(); 


   
    const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


const router=express.Router(); 


const path= require('path');
app.use(express.static(path.join(__dirname, 'public')));




app.use(bodyParser.json());










app.set('view engine', 'ejs');
app.set('views', 'views'); 


//rutas
const rutasExamen = require('./routes/examen.js');
app.use('/examen', rutasExamen);


app.get('/examen', (request, response, next) => {
    console.log(request.body);
    response.send('index'); 
});

//err 404
app.use((request, response, next) => {
    console.log('Error 404');
    response.status(404);
    response.send('Esta pagina no existe');
});

app.listen(3000);