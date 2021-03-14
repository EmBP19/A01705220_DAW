var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validarPassword(){


  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("La password no coincide");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validarPassword;
confirm_password.onkeyup = validarPassword;