
function comprobarFecha(){
    var fecha = document.getElementById("fecha").value;
    
    const regex = /[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/0?[1-9]||[1-2][0-9]||3[01]/;
    if(regex.test(fecha)== true){

        window.alert("Gracias por introducir la fecha");

    }else{
        window.alert("El formato de la fecha no esta bien");
    }
}
