// unico elemento es un arreglo de numeros, hacer un metodo por cada operacion indicada, contar pares y sumar impares

function Arreglo(vec){

this.vec=vec,

this.cuentapar=function(){

let contador=0

for(let i=0; i< this.vec.length;i++){

if(this.vec[i]%2==0){

contador++


}

}
return contador


}

this.sumaimpar=function(){

let suma=0

for(let i =0;i< this.vec.length;i++){
    if(this.vec[i]%2!=0){
        suma+=this.vec[i]
    }
}


return suma

}

}
var v=[10,4,5,7,9,7,3,12]
var objeto=new Arreglo(v)
console.log(objeto.sumaimpar())
console.log(objeto.cuentapar())







