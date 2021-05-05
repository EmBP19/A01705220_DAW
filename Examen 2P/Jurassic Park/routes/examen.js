const express = require('express');

const router = express.Router();

//Path
const path= require('path');


//Controller
const examenController = require('../controllers/examenController');

router.get('/nuevo_incidente', examenController.getNuevoRegistro); 

router.post('/nuevo_incidente',examenController.postNuevoRegistro);

router.get('/', examenController.get );



module.exports = router;