var multiplicar=(arreglo, multiplicador)=>{

var x=0
for(var i=0;i<arreglo.length;i++){

x=arreglo[i]-multiplicador
if(i<arreglo.length){
  arreglo[i]= x
}




}

console.log(arreglo)


}

multiplicar([4,8,4,1,8,9],2)