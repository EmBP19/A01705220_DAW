// Obtener lo que se va ser en MODELS
const { json } = require('body-parser');
const Incidente = require('../models/examen');



exports.getNuevoRegistro = (request, response, next) => {

   response.render('nuevo_incidente',{title:'Nuevo Incidente',
                                    });
   
};


exports.postNuevoRegistro =  (request, response, next) => {

    console.log(request.body.id_incidente)
    console.log(request.body.id_lugar)
    
     const incidente=new Incidente( request.body.id_incidente, request.body.id_lugar);

     incidente.save().then(() => {
         response.redirect('/examen');
     }).catch(
         err => { console.log(err)
       
         response.redirect('/examen/nuevo_incidente');}
   
     );
     
 };



exports.get= (request, response, next) => {
 
  
    
    Incidente.fetchAll() 
           .then(([rows, fieldData]) => {
               
            response.render('examen',
            {incidentes: rows , 
             totalIncidentes: rows[0].totalIncidentes,
             title: 'Examen' 

             });
             })
  
            .catch(err => { 
             console.log(err);
            });
        
    
        


};
