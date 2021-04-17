
const express = require('express');

const router = express.Router();


router.get('/nueva-mascota',( request,response,text) => {

    response.send('<form action = "nueva-mascota" method= "POST"><input type = "text" name = "nombre"><input type = "submit" name = "enviar" value = "adoptar"></form>')

});
router.post('/nueva-mascota',( request,response,text) => {

    console.log(request.body);
    response.send('Gracias por adoptar a ' + request.body.nombre + '!');

});

module.exports = router;