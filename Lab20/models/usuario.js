const fs = require('fs');

const usuarios = [
    {nombreUsuario: 'Admin', contrasena: '1234'}, 
    {nombreUsuario: 'User', contrasena: 'password'}];

module.exports = class Usuario {

    
    constructor(nombreUsuario,contrasena) {
        this.nombreUsuario = nombreUsuario;
        this.contrasena = contrasena;
    }

    
    save() {
        console.log(this.nombreUsuario + ' : ' + this.contrasena);
        return bcrypt.hash(this.userPssw, 12)
            .then( (contrasena) => {
                console.log(this.nombreUsuario + ' : ' + this.contrasena);
                return db.execute('INSERT INTO usuarios (userName,userPssw) VALUES (?,?)',
                [this.nombreUsuario, contrasena]
            );
            }).catch(err => {
                console.log(err);
                throw Error("Nombre de usuario duplicado");
            });
    }


    check(){
        const data = fs.readFileSync('login.txt');
        return data.includes(this.toString());
    }

    toString(){
        return "nombreUsuario: '" + this.nombreUsuario + "', contrasena: '" + this.contrasena;
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return usuarios;
    }

}