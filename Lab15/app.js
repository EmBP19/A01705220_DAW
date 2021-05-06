const express = require('express');
const app = express();
const homeController = require('./controllers/labController');

//rutas
const rutaUserValidation = require('./routes/userValidation');
const rutaTienda = require('./routes/tienda');

//EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

// archivos estáticos 
app.use(express.static(path.join(__dirname, 'public')));

let contentType = 'text/html';
let filePath = "";


app.use('/login', rutaUserValidation);
app.use('/tienda', rutaTienda);
app.get('/', homeController.useHome);


app.listen(3000, function(){
    console.log("server is running in port 3000");
  });