const palabras = ["ana", "radar", "javascript", "reconocer", "oro", "palindromo", "salas"];
let palindromos = []
for(let palabra of palabras){
    let reverse = palabra.split('').reverse().join('');

    if(palabra == reverse){
        palindromos[palindromos.length] = palabra
    }
}

console.log(palindromos)