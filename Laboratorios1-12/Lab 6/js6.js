function validarPasswords(){
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password2").value;
    if (p1 == p2) {
        alert("Las passwords deben de coincidir");
        return false;
      } else {
        alert("Todo esta correcto");
        return true; 
      }

}
document.getElementById("enviar").addEventListener('click',Valid)



