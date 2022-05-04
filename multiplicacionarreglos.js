var multiplicar=(arreglo, multiplicador)=>{

var x=0
for(var i=0;i<arreglo.length;i++){

x=arreglo[i]*multiplicador
if(i<arreglo.length){
  arreglo[i]= x
}




}

console.log(arreglo)


}

multiplicar([2,1,2,3,4,5],2)