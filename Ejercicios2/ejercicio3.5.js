function contarOcurrencias(palabras) {
    let claves = new Map(); 

    for (let palabra of palabras) {
        if (claves.has(palabra)) {
            
            claves.set(palabra, claves.get(palabra) + 1);
        } else {
            
            claves.set(palabra, 1);
        }
    }

    console.log(claves); 
}


contarOcurrencias(["Hola", "Hola", "Adios", "Paella", "Hola", "Lentejas", "Hola"]);

