function saludar(nombre, callback, callback1){
setTimeout(() => {
    
    console.log(`hola ${nombre}`)
    
    callback(nombre)
callback1()

},3000);

}


0
function hablar(nombre){
    console.log(`tiempo sin verte ${nombre}`)
    setTimeout(() => {
    
    },4000);
}




function despedir(){

    setTimeout(() => {
    
        console.log(`ayer sali`)
    },1000);
}

saludar("elver gonzalo", hablar,despedir)

hablar()
despedir()
saludar()