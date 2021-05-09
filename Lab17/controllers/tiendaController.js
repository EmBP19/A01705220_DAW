const Articulo = require('../models/articulo');
const Total = require('../models/total');

const cuenta = new Total(0,0,0,0);



exports.useTotal = (request, response, next) => {
    let state = request.session.sesionLoginUser === undefined ? false : true;
    if(state){
        let cantidad = 0;
        let mensaje = '';

        if (request.cookies.totalCompras === undefined){
            response.setHeader('Set-Cookie', 'totalCompras='+ cuenta.getTotal() +'; HttpOnly');
            response.render('total', {
                titulo: "Lab",
                logged : state,
                act1: "",
                act2: "",
                act3: "active",
                act4: "",
                Descuento: cuenta.getDescuento(),
                IVA: cuenta.getIva(),
                Subtotal: cuenta.getSubtot(),
                Total: cuenta.getTotal(),
                mensaje: mensaje,
                nombreUser: request.session.sesionLoginUser
            });
            cuenta.setDescuento(0);
        }else{
            cantidad = (parseInt(request.cookies.totalCompras) + cuenta.getTotal());
            response.setHeader('Set-Cookie', 'totalCompras='+ cantidad +'; HttpOnly');
            if(request.cookies.totalCompras > 500){
                response.setHeader('Set-Cookie', 'totalCompras=0; HttpOnly');
                mensaje = 'En tu proxima compra, tendrás un cupon del 10%';
                response.render('total', {
                    titulo: "Lab",
                    logged : state,
                    act1: "",
                    act2: "",
                    act3: "active",
                    act4: "",
                    Descuento: cuenta.getDescuento(),
                    IVA: cuenta.getIva(),
                    Subtotal: cuenta.getSubtot(),
                    Total: cuenta.getTotal(),
                    mensaje: mensaje,
                    nombreUser: request.session.sesionLoginUser
                });
                cuenta.setDescuento(10);
            }else
            {
                response.render('total', {
                    titulo: "Lab",
                    logged : state,
                    act1: "",
                    act2: "",
                    act3: "active",
                    act4: "",
                    Descuento: cuenta.getDescuento(),
                    IVA: cuenta.getIva(),
                    Subtotal: cuenta.getSubtot(),
                    Total: cuenta.getTotal(),
                    mensaje: mensaje,
                    nombreUser: request.session.sesionLoginUser
                });
                cuenta.setDescuento(0);
            }
        }
        
        console.log("Total tienda");
       
        response.status(201);
    }else{
        console.log("no auth");
        response.redirect('/login/Validar');
        response.status(202);
    }
    
};
exports.getTienda = (request, response, next) => {
    response.render('tienda', {
        titulo: "Lab",
        act1: "",
        act2: "",
        act3: "active",
        act4: "",
        articulos: Articulo.fetchAll()
    });
    console.log("Tienda");
    response.status(200);
};

exports.postTienda = (request, response, next) => {
    cuenta.setDescuento(request.body.descuento);
    cuenta.setIva(request.body.iva);
    cuenta.setSubtot(request.body.subtinput);
    cuenta.calculaTotal();

  
    response.redirect('/tienda/total');
    response.status(302);
    response.end();
};