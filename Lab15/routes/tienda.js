const express = require('express');
const router = express.Router();

const path = require('path');

const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())

let descuento = 0;
let iva = 0;
let total=0;
let subtot = 0;

const articulos = [
    {
        nombreMayus: 'LA LA LAND',
        nombre: 'La la land',
        descripcion:    'La La Land es una película dramática y musical estadounidense de 2016, escrita y dirigida por Damien Chazelle, y protagonizada por Emma Stone y Ryan Gosling, una aspirante a actriz y un pianista de jazz que se conocen y enamoran en Los Ángeles, California. Estrenada en Estados Unidos el 9 de diciembre de 2016 por Summit Entertainment, es una versión moderna de los musicales hollywoodienses.',
        imagen: './IMG/lalaland.jpg',
        precio: 12,
        num: '0'
    },
    {
        nombreMayus: 'THE GODFATHER',
        nombre: 'The Godfather',
        descripcion:    'Protagonizada por Marlon Brando y Al Pacino como los líderes de una poderosa familia criminal ficticia de Nueva York, la historia, ambientada desde 1945 a 1955, cuenta las crónicas de la Familia Corleone liderada por Vito Corleone (Brando), enfocándose en el personaje de Michael Corleone (Pacino), y su transformación de un reacio joven ajeno a los asuntos familiares a un implacable jefe de la mafia ítalo-estadounidense.',
        imagen: './IMG/godfather.jpg',
        precio: 35,
        num: '1'
    },
    {
        nombreMayus: 'BABY DRIVER',
        nombre: 'Baby Driver',
        descripcion:    'Baby Driver es una película de acción de 2017 escrita y dirigida por Edgar Wright. Está protagonizada por Ansel Elgort, Kevin Spacey, Lily James, Eiza González, Jon Hamm, Jamie Foxx, y Jon Bernthal. La trama sigue a Baby, un joven piloto de escapadas, que es forzado a trabajar para un jefe criminal.',
        imagen: './IMG/babydriver.jpg',
        precio: 23,
        num: '2'
    },
    {
        nombreMayus: 'THE SOCIAL NETWORK',
        nombre: 'The Social Network',
        descripcion:    'The Social Network es una película biográfica dirigida por David Fincher, estrenada el 24 de septiembre de 2010, en el Festival de Cine de Nueva York.6​Esta narra un drama de tribunales, sobre las implicaciones morales del entonces ascendente Mark Zuckerberg (interpretado por Jesse Eisenberg), cuyas peripecias lo encaminaron en la construcción de un imperio billonario, y de cómo alguien poco sociable logró conectar a cientos de millones de personas a través de su creación, Facebook.',
        imagen: './IMG/thesocialnetwork.jpg',
        precio: 18,
        num: '3'
    },
    {
        nombreMayus: 'The Incredibles',
        nombre: 'The Incredibles',
        descripcion:    'The Incredibles— es una película de animación, aventuras y superhéroes dirigida por el estadounidense Brad Bird y producida conjuntamente por los estudios Walt Disney Pictures y Pixar Animation Studios. El argumento gira en torno a una familia de superhéroes, los Parr, que llevan un estilo de vida suburbano ante las restricciones gubernamentales impuestas tras considerarse que sus hazañas conllevan situaciones problemáticas para la sociedad. ',
        imagen: './IMG/theincredibles.jpg',
        precio: 9,
        num: '4'
    },
    {
        nombreMayus: 'HAMILTON',
        nombre: 'Hamilton',
        descripcion:    'Hamilton: An American Musical es un musical sobre la vida de Alexander Hamilton, uno de los padres fundadores de los Estados Unidos; con letras, música y guion de Lin-Manuel Miranda.',
        imagen: './IMG/hamilton.jpg',
        precio: 15,
        num: '5'
    },
];

//Enviar archivos estáticos en carpeta public
router.use(express.static(path.join(__dirname,'..', 'public')));

router.use('/Total', (request, response, next) => {
    response.render('TotalTienda', {
        titulo: "Lab15",
        act1: "",
        act2: "",
        act3: "active",
        act4: "",
        Descuento: descuento,
        IVA: iva,
        Subtotal: subtot,
        Total: total,
    });
    console.log("Total tienda");

    response.status(201);
});

router.get('/', (request, response, next) => {
    response.render('tienda', {
        titulo: "Lab15",
        act1: "",
        act2: "",
        act3: "active",
        act4: "",
        articulos: articulos
    });
    console.log("Tienda");
    response.status(200);
});

router.post('/', (request, response, next) => {
    descuento = request.body.descuento;
    iva = request.body.iva;
    subtot = 0;
    total = 0;
    subtot=request.body.subtinput;
    total = subtot*(100-descuento)/100;
    total += (total * iva)/100;


    response.redirect('/tienda/Total');
    response.status(302);
    response.end();
});

router.use(function (req, res) {
    console.log(JSON.stringify(req.body, null, 2));
  })

module.exports = router;