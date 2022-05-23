//función con dos parámetros
//una función, tiempo en milisegundos
// console.log("Yo amo la programación");
// console.log("Yo amo la programación");
// console.log("Yo amo la programación");
let vec1=[];
setTimeout(() => {
    
}, timeout);

function prueba(param){
    //console.log('externa al settimeout');
    return `externa a settimeout con parametro = ${param}`;
}

setTimeout(prueba,1000);

//setTimeout(console.log(prueba),1000);
setTimeout(()=>{
    console.log(prueba(123));
}, 1000);


for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
       console.log(i) 
    }, 1000);
    console.log(`->${i}`)
}


for (let i = 1; i <= 5; i++) {
     setTimeout(() => {
         console.log("Yo amo la programación");    
     }, i*2000);
    //console.log(i);        
}

setTimeout(() => {
    console.log("adsi");    
}, 0);
console.log("saludo");


let vec=[1,3,5,2,4];
let i=0;
setTimeout(() => {    
    for ( i = 0; i < 5; i++) {        
        console.log(vec[Math.round(Math.random()*4)])
    }
}, i*2000);