const numerosprimos=(numeroingresado)=>{
let residuo=0

for (let i = 1; i <= numeroingresado ; i++) {
    if (numeroingresado % i === 0) {
        residuo++
    }

}

if (residuo==2) {
    console.log(`El numero ${numeroingresado} si es un numero primo`)
    
}else{
    console.log(`El numero ${numeroingresado} no es un numero primo`)
}
}
console.log(numerosprimos(4))