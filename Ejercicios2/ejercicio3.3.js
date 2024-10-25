let nombres = new Set(["Hugo","Victor","Eloy","Sandra"]);

nombres.add("Carlos");
console.log(nombres.has("Hugo"));
nombres.delete("Victor");

console.log(nombres);
