const descuento=(precio, descuento)=>{
var descuento=50
const descuentoinicial=precio/descuento
var preciofinal= 100/descuentoinicial
console.log(`el precio ingresado es de ${precio}`)
console.log(`el descuento es de ${descuento}`)
return 'el precio con descuento  es de:' + preciofinal;
}
console.log(descuento(200,50))
