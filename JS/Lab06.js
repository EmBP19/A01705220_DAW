//Validar password 
var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validarPassword(){


  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("La password no coincide");
  } else {
    confirm_password.setCustomValidity('La password coincide =D');
  }
}

password.onchange = validarPassword;
confirm_password.onkeyup = validarPassword;

//Tienda 
const numpadrino = document.getElementById("godfather");
const numlalaland = document.getElementById("lalaland");
const numstarwars = document.getElementById("starwars");
const iva;
const total;
const formato = document.getElementById("form");

formato.onsubmit = addtotal(event){
    event.preventDefault();
   var t = (numpadrino.value*15)+(numlalaland.value*20)+(numstarwars.value*25);
   total.inner
   // alert("El precio total es de: " + total );
   
    document.getElementById("total").innerHTML = "El precio total es de: " + t ;
   // T.innerHTML = "El precio total es de: " + total;
    
}


