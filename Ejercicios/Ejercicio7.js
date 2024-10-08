


    const fechaNacimiento = window.prompt("¿Que dia naciste? (YYYY/MM/DD):");
    const fechaNacimiento2 = new Date(fechaNacimiento)
    const fechaActual = new Date();
    
    
    const milisegundos = fechaActual - fechaNacimiento2;
    
    
    const dias = Math.floor(milisegundos / (1000 * 60 * 60 * 24));

   
    
    alert(`Han pasado ${dias} días desde tu nacimiento.`);






