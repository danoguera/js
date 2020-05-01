pepito = { nombre: "Pepito" };

var maria = {
  nombre: "Terah",
  edad: 32,
  altura: 1.70,
  peso: 60,
  colorPelo: "cafe",
  esposo: pepito,
  hijos: { german: { nombre: "German" } },
  bmi(){return this.peso / this.altura ** 2}
}

console.log(maria.bmi());