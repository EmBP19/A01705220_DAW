const express = require('express');
const router = express.Router();

const file_system = require('fs');

router.get('/recomendacion',( request,response,next) => {

    response.send('<form action = "recomendacion" method= "POST"><input type = "text" name = "pelicula"><input type = "submit" name = "estado" value = "recomendado"></form>')

});
router.post('/recomendacion',( request,response,next) => {

    console.log(request.body);
    file_system.writeFileSync('recomendaciones', request.body.pelicula);
    response.send('Gracias por recomendarme ' + request.body.pelicula + '!');

});

module.exports = router;