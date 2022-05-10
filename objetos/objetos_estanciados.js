function Auto(marca, modelo){


this.marca=marca;
this.modelo=modelo;

 this.setmarca=function(marca){

this.marca=marca;



} 

}

var auto1= new Auto("renault","logan");
var auto2= new Auto();
var auto3=new Auto("lamborghini", "gallardo")

//auto1.setmarca=("nissan")
auto1.marca="kia"
auto3.setmarca=("dodge")
console.log(auto1)
console.log(auto1.setmarca())
console.log(auto1.modelo)
console.log(auto2)
console.log(auto3)