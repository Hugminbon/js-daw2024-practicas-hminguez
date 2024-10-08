
function años(){
    var fecha = document.getElementById("fecha").value;
    const d = new Date();
    const d2 = new Date(fecha);
    
    var añoActual = d.getFullYear();
    var añoNacimiento = d2.getFullYear();

    var añosTotales = añoActual - añoNacimiento


    window.alert(`Han transcurrido ${añosTotales} años, aproximadamente, desde que naciste`)
}