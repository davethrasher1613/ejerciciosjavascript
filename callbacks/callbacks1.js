//callback=función que se usa como parámetro
// de otra función

// function principal(callback){
//     console.log(callback());
// }

// function parametro(){
//     return `Soy externa a la principal`;
// }

// principal(parametro);

function principal(num1,num2,callback){
    let r=num1+num2;
    callback(r);
}

function impresora(msj){
    console.log(`imprimiendo ${msj}`);
    //return `imprimiendo ${msj}`
}

principal(123,567,impresora);