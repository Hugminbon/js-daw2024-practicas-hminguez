const semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];



const d = new Date();
let dia = semana[d.getDay()];
let dianum = d.getDate()
let mes = meses[d.getMonth()];
let año = d.getFullYear();
window.alert(`Hoy es  ${dia} , ${dianum} ${mes} ${año}` )