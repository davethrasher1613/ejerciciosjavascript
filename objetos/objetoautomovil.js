
//cilindraje capacidad de tanque metodo de tanqueo kilometros que puede recorrer el carro, galones por kilometro que consume el auito



function carro(marca,modelo,cilindraje, puestos, año, capacidad_de_tanque,kilometros_recorridos,velocidad_maxima){
    this.marca=marca
    this.modelo=modelo
    this.cilindraje=cilindraje
    this.puestos=puestos
    this.año=año
    this.capacidad_de_tanque=capacidad_de_tanque
    this.kilometros_recorridos=kilometros_recorridos
    this.velocidad_maxima=velocidad_maxima
    
    this.consumo=function(gasto_de_gasolina){


      

var gasto_de_gasolina= this.capacidad_de_tanque*this.kilometros_recorridos/100
return `el gasto de gasolina fue de ${gasto_de_gasolina}`
    }

}

var auto1= new carro("renault","logan",1400,5,2018,50,500,240);
var auto2= new carro("chevrolet","camaro",1400,5,2018,50,400,240);

console.log(auto1)

console.log(auto2)
console.log(auto1.consumo())
console.log(auto2.consumo())