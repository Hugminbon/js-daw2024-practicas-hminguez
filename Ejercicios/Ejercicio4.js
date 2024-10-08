
function conversionNumero(){
var cadena = document.getElementById("numero").value;
var num = parseInt(cadena)

document.getElementById("bin").innerHTML += "<td>"+ num.toString(2) + "</td>";
document.getElementById("oct").innerHTML += "<td>"+ num.toString(8) + "</td>";
document.getElementById("hex").innerHTML += "<td>"+ num.toString(16) + "</td>";
}