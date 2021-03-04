/*
console.log('Hola, mundo');

const precio = 22;

console.info("El precio de los tacos es de $" + precio);
let cantidad_tacos = 7;

console.log("Te voy a mandar " + cantidad_tacos + " tacos");

let persona = "Lalo";
let descuento = 0;
if(cantidad_tacos > 6 && persona === "Lalo"){

    descuento = 0.1 * (cantidad_tacos * precio);
    console.info("Se te hizo un descuento de $" + descuento);

}

const por_pagar = cantidad_tacos * precio - descuento;

console.info("Por pagar: " + por_pagar);

*/



function Funcion1(){
    let num = window.prompt('Ingresa un numero: ');

    document.write('<h1>Funcion 1</h3><br>Numeros del 1 al ' + num + ': </br><table border="4"><tr>');
    for(let i = 1; i <= num; i++){
        document.write('<td>' + i + ' </td>');
    }

    document.write('</tr></table><br>Numeros Cuadrados del 1 al ' + num + ': </br><table border="4"><tr>');
    for(let i = 1; i <= num; i++){
    document.write('<td>' + (i*i) + '</td>');
    }

    document.write('</tr></table><br>Numeros Cubos del 1 al ' + num + ':</br><table border="4"><tr>');
    for(let i = 1; i <= num; i++){
    document.write('<td>' + (i*i*i) + '</td>');
    }
    document.write('</tr></table>');
};

function Funcion2(){

    function getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    let rndm1 = getRandomInt(10);
    let rndm2 = getRandomInt(10);
    
    var t0 =performance.now();
    let respuesta = window.prompt('Suma ' + rndm1 + ' + ' + rndm2 + ' = ');
    var t1 = performance.now();
    
    document.write('<h1>Funcion 2</h1><br>Tiempo en responder: <i>' + (t1 - t0) + ' milisegundos</i></br>');
    
    var ans = rndm1 + rndm2;
    
    if(respuesta == ans){
        document.write('<p>Respuesta <strong>correcta.</strong></p>');
    }
    else{
        document.write('<p>Respuesta <strong>incorrecta.</strong></p>');
    }
}

function Funcion3(){
    let numeros = (window.prompt("Introduce un arreglo de numeros sin espacios"));
    let arregloNum = Array.from(numeros);

    function negativos(arr){
        let negativos = 0
        for(let num of arr){
            if(num < 0){
                negativos += 1;
            }
        }
        return negativos;
    }

    document.write('<h1>Funcion 3:</h1><br> Numeros negativos: <i>' + negativos(arregloNum) + ' </i></br>');

    function ceros(arr){
        let zeros = 0;
        for(let num of arr){
            if(num == 0){
                zeros += 1;
            }
        }
        return zeros;
    }

    document.write('<br> Ceros: <i>' + ceros(arregloNum) + ' </i></br>');

    function reales(arr){
        let reales = 0;
        for(let num of arr){
            if(num > 0){
                reales += 1;
            }
        }
        return reales;          
    }

    document.write('<br> Numeros reales <i>' + reales(arregloNum) + ' </i></br>');
}
//arreglar funcion 4
function Funcion4(){
    let numeros = (window.prompt("Introduce un arreglo de 3 numeros sin espacios"));
    let arr1 = Array.from(numeros);
    let numeros2 = (window.prompt("Introduce un arreglo de 3 numeros sin espacios"));
    let arr2 = Array.from(numeros2);
    let numeros3 = (window.prompt("Introduce un arreglo de 3 numeros sin espacios"));
    let arr3 = Array.from(numeros3);

    document.write('<h1>Actividad 4:</h1>');

    let matriz = [[arr1], [arr2], [arr3]];

    function promedios(array){
        let tmp = 0;
        let j = 0;
        for(let i = 0; i < 9; i++){
            for(j = j+i; j < 3; j++){
                tmp += array[j];
            }
            
            document.write('<p>El <strong>promedio</strong> del reglon <strong>' + (i+1) + '</strong> del arreglo es: <strong>' + (tmp / 3) + '.</strong> </p>');
        }
    }
   

   
    document.write("<h2>Matriz a promediar:</h2><br> " + arr1 +"<br>"+arr2+"<br>"+arr3);
    promedios(matriz);
    

    
}

function Funcion5(){     //no estoy seguro si esto es lo que se pide 

    document.write('<h1>Funcion 5</h1>');
    let inverso = window.prompt('Ingresa numero: ');

    document.write('Inversos de ' + inverso + ': ');
   
    function inver(inv){
        for(let i = (inv - 1); i > 0; i--){
            document.write(i + ', ');
        }
        document.write('0');
    }
    inver(inverso);
}