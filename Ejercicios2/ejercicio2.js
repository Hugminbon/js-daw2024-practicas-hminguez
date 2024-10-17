let paises = ['España', 'Francia', 'Alemania', 'Italia'];

for(let pais of paises){

    console.log(pais)
}

delete paises[1];

for(let pais of paises){

    console.log(pais)
}