const express = require('express');
const router = express.Router();

const path = require('path');

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

const fs = require('fs');


//Enviar archivos estáticos en carpeta public
router.use(express.static(path.join(__dirname,'..', 'public')));

router.get('/Registrar', (request, response, next) => {
    response.render('Registrar', {
        titulo: "",
        act1: "",
        act2: "active",
        act3: "",
        act4: "",
    });
    console.log("Registar");
    response.status(200);
});

router.post('/Registrar', (request, response, next) => {
    let username = request.body.username;
    let pass = request.body.password;
    usuarios.push({nombreUsuario: username, contrasena: pass});
    user = "nombreUsuario: '" + username + "', contrasena: '" + pass + "\n";
    fs.writeFileSync('login.txt', user, {encoding: "utf8", flag: "a+"});
    response.status(302);
    response.redirect('/login');
});

router.get('/Validar', (request, response, next) => {
    response.render('Validar', {
        titulo: "Lab14-login-GAGM-DAW & BD",
        act1: "",
        act2: "active",
        act3: "",
        act4: "",
    });
    console.log("Valida Pssw");
    response.status(200);    
});

router.post('/Validar', (request, response, next) => {
    let username = request.body.username;
    let pass = request.body.pass;
    const data = fs.readFileSync('login.txt');
    if(data.includes("nombreUsuario: '"+ username +"', contrasena: '"+ pass)){
        console.log("Acceso concedido");
        response.status(302);
        
        response.redirect('/tienda');
    }else{
        console.log("nombreUsuario: '"+ username +"', contrasena: '"+ pass);
        console.log("Acceso denegado");
        response.status(302);
    
        response.redirect('/login/Validar');
    }
    response.end();
});

router.get('/', (request, response, next) => {
    response.render('login', {
        titulo: "",
        act1: "",
        act2: "active",
        act3: "",
        act4: "",
    });
    console.log("login");    
    console.log(usuarios);
    response.status(200);
});

module.exports = router;