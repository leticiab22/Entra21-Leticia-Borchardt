const { area, circunferencia } = require("./circulo")

console.log(area(5));
console.log(circunferencia(5));

const Quadrado = require("./quadrado")
console.log(Quadrado);

const quadrado = new Quadrado(2)
console.log(quadrado.area());