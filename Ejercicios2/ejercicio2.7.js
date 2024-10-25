letras = ['a', 'b', 'c', 'd'];

console.log(letras.some(function(letra) { 
        return letra == 'c';
    }));

    console.log(letras.some(function(letra) { 
        return letra == 'z';
    }));