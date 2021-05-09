const express = require('express');
const app = express();

const path = require('path');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

//rutas
const rutaUserValidation = require('./routes/userValidation');
const rutaTienda = require('./routes/tienda');
const rutaUsuarios = require('./routes/usuarios');


//controller

const homeController = require('./controllers/labController');


app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
  secret: '1d#$%dwe45f#$5sd()=df345#$%bLim&dfvdfg#$12qex%RT(?ipfgh5dvfgdewt56ytbru9',
  resave: false, 
  saveUninitialized: false,
}));


//EJS
app.set('view engine', 'ejs');
app.set('views', 'views');


// archivos estáticos 
app.use(express.static(path.join(__dirname, 'public')));

let contentType = 'text/html';
let filePath = "";


app.use('/login', rutaUserValidation);
app.use('/tienda', rutaTienda);
app.get('/', homeController.useHome);
app.use('/usuarios',rutaUsuarios);

app.use(homeController.useNotFound);

app.listen(3000, function(){
    console.log("server is running in port 3000");
  });