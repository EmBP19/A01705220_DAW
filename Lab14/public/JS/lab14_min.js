var pushpinNav=document.getElementById("pushpinNav"),pushpinNavOptions={top:300,bottom:999999999,offset:0},instancePushpinNav=M.Pushpin.init(pushpinNav,pushpinNavOptions);function passwordVal(){var e,t=document.getElementById("password").value,n=document.getElementById("passworcheck").value;""===t?e="Por favor introduce tu password":t.length<8?e="Tu password tiene que tener al menos 8 caracteres":t.match(/[a-z]/g)?t.match(/[A-Z]/g)?t.match(/[0-9]/g)?t.match("=")||t.includes("°")||t.includes("¬")||t.includes("¿")||t.includes("¨")||t.includes("~")||t.includes("{")||t.includes("}")||t.includes("#")||t.includes("$")||t.includes("%")||t.includes("&")||t.includes(":")||t.includes(",")||t.includes(";")||t.includes("_")||t.includes("-")||t.includes("/")||t.includes("!")?""===n?e="Por favor confirma tu password":t!==n?e="Los campos no coinciden":t===n&&(e="<br>"):e="Tu pasword debe de tener al menos uno de los siguientes simbolos especiales: = ° ¬ ¿ ¨ ~ { } # $ % & : , ; _ - / !":e="Tu password tiene que tener al menos un número":e="Tu password tiene que tener al menos una letra mayuscula":e="Tu password tiene que tener al menos una letra minuscula",document.getElementById("MessagePasword").innerHTML=e}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".fixed-action-btn");M.FloatingActionButton.init(e,{direction:"left"})});const listaArti=[{nombre:"Naranja",cantidad:0,precio:12},{nombre:"Sandia",cantidad:0,precio:35},{nombre:"Jicama",cantidad:0,precio:23},{nombre:"Jitomate",cantidad:0,precio:18},{nombre:"Chicharo",cantidad:0,precio:9},{nombre:"Espinaca",cantidad:0,precio:15}];function addArt(e){let t=""+e,n="input"+e;console.log(n),listaArti[e].cantidad+=1,document.getElementById(t).innerHTML=listaArti[e].cantidad,document.getElementsByName(n).value=listaArti[e].cantidad,console.table(listaArti)}function subtractArt(e){let t=""+e,n="input"+e;0!==listaArti[e].cantidad&&(listaArti[e].cantidad-=1),document.getElementById(t).innerHTML=listaArti[e].cantidad,document.getElementById(n).value=listaArti[e].cantidad,console.table(listaArti)}function subtotal(){let e=0;for(let t of listaArti)e+=t.cantidad*t.precio;return document.getElementById("subtinput").value=e,console.log(document.getElementById("subtinput").value),document.getElementById("subpago").innerHTML="Subtotal: $"+e,e}console.table(listaArti);