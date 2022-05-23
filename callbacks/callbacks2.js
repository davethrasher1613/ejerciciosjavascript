function principal(vec,callback1,callback2){
    let tamaño=Math.round(Math.random()*20);
    for (let i = 0; i < tamaño; i++) {
        vec.push(Math.round(Math.random()*100));
    }
callback1(vec);
console.log(callback2(vec));
}




function mostrarVec(vec){
    console.log(vec);
}


function sumarVec(vec){
    let suma=0;
    for (let i = 0; i < vec.length; i++) {
        suma+=vec[i];//suma=suma+vec[i]
    }
    return suma;
}

let vector=[];
principal(vector,mostrarVec,sumarVec);