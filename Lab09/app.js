console.log("Hola desde node!");


const file_system = require('fs');


file_system.writeFileSync('carros.txt','Ferrari');

const arreglo = [3522,1998,2020,4500,5555,6666,34,20,2,134,10];
let i = 1;
for(let item of arreglo){
    setTimeout(() => {
       console.log(item); 
    }, item);
    console.log(i++)
}


const http = require('http');

const server = http.createServer((request,response) =>{

    console.log('Honda');
    console.log("Hola desde el servidor web");
    console.log(request.url);
    console.log("Prius C");

    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('Hola desde el servidor web');
    response.write('</html');

    response.end();

});

server.listen(3000);