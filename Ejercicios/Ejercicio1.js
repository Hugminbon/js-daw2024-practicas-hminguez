function conversorString(){
    var cadena = document.getElementById("cadena").value;
    console.log(cadena);
    var stringMayus = cadena.toUpperCase();
    var stringRepeat = cadena.repeat(3);

    var arr1 = cadena.split("");
    var arrReverse = arr1.reverse();
    var stringReverse = arrReverse.join("");

    var arr2 = cadena.split("");
    var arrReverse2 = arr2.reverse();
    var stringReverse2 = arrReverse2.join("");
    var stringReverseMayus = stringReverse2.toUpperCase();

    document.getElementById("mayus").value = stringMayus;
    document.getElementById("repeat").value = stringRepeat;
    document.getElementById("reverse").value = stringReverse;
    document.getElementById("repeatReverse").value = stringReverseMayus;
}