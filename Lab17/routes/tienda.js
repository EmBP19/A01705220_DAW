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