let arr = [100, 200, 300, 400, 500];

function promedio(arr){

    let sum = 0;
    for(let i = 0; i<arr.length;i++){

        sum += arr[i];
    }

    return sum/arr.length;
}


const prom = promedio(arr);

console.log('El promedio del arreglo es: '+prom);

function archivo(txt){

    const file_system = require('fs');
    file_system.writeFileSync('Funcion_escribir.txt',txt);
}
archivo('Probando funcion con node :D');

let date_ob = new Date();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


let year = date_ob.getFullYear();

   
 readline.question('Que edad tienes? ', edad => {


    let fecha = year - edad;
    console.log(`Naciste en ${fecha}`);
    if(fecha > 1999){
        console.log('Zoomer');
    }else
        console.log("Boomer");
    readline.close();
});