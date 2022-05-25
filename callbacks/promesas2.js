




function desviacionestandard(x) {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {

var raiz1=x/19

   resolve()
   console.log(`la raiz ${raiz1}`)
   return raiz1

    }, 3000);
    })
   
}



function media(){
let mediades=0


for (let i = 0; i < vector.length; i++) {
    mediades+=vector[i]/vector.length;
}

console.log(`la media es de ${mediades}`)
return mediades;



}


var cuadradomedia=(vector, mediades)=>{

    var x=0
    for(var i=0;i<vector.length;i++){

    x=vector[i]-mediades
    if(i<vector.length){
    vector[i]= x
    }




    }
    console.log(vector)

}

var sumamedia=(vector)=>{


    var x=0
    for(var i=0;i<vector.length;i++){

    x=vector[i]+vector.length
    




    }
    console.log(`la suma de los elementos del vector elevado es de ${x}`)

}
    


let vector=[22,3,4,5,6,7,8,9,1,3,55,65,78,98,67,45,13,13,13,13]
media()
cuadradomedia([22,3,4,5,6,7,8,9,1,3,55,65,78,98,67,45,13,13,13,13],26.4)
sumamedia([-4.399999999999999, -23.4, -22.4, -21.4,-20.4,-19.4,-18.4,-17.4,-25.4, -23.4,28.6,38.6,51.6,71.6,40.6,18.6,-13.399999999999999,-13399999999999999, -13.399999999999999,-13.399999999999999])

desviacionestandard(6.600000000000001)
