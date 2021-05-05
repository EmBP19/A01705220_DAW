//Conecta a la bd
const db = require('../util/database');



module.exports = class Incidente {

    constructor(id_incidente,id_lugar) {
       
        this.id_incidente = id_incidente, 
        this.id_lugar = id_lugar
        
    }

  
    save() {
        
        return db.execute('INSERT INTO incidentes_lugares (id_incidente, id_lugar) VALUES (?, ?)',
        [this.id_incidente, this.id_lugar]
    );
        
    }
  
     
    static fetchAll() {
       return db.execute('SELECT IL.id_incidente,IL.id_lugar,incidente,lugar, fecha , (SELECT COUNT(*) FROM reporte) AS totalIncidentes FROM incidente I, lugar L, reporte IL WHERE I.id_incidente=IL.id_incidente AND L.id_lugar=IL.id_lugar  ORDER BY fecha DESC' );       
    }
    
    static fetchOne(id){
        return db.execute('SELECT * FROM lugares WHERE id=?',[id]);   
    }

  
}