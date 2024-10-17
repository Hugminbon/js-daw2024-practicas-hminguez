
const nombres = ["Ana", "Luis", "Pedro", "Marta", "Sofía"];

const edades = [15, 10, 22, 17, 35];

let mayoresEdad =[]

for (let i in nombres) {
    if (edades[i] >= 18) {
        mayoresEdad.push(nombres[i]);
    }
}

console.log(mayoresEdad);