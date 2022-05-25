


 function promesa(){


return new Promise((resolve,reject)=>{

console.log('desde la funcion inicial')
resolve()




})

}

function prueba1(){
    console.log('soy prueba 1')
}
 function prueba2(){
    console.log('soy prueba 2')
}


 function prueba3(){
    console.log('soy prueba 3')
}


// se necesita crear una funcion para ejecutar otra
async function main(){

    promesa();

    await prueba1()
    await prueba2()
    await prueba3()
}

main()




//async await
function herviragua() {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log(`agua lista`);
        resolve();
    }, 3000);
    })
}


async function agregaringredientes() {
    console.log(`ingredientes listos`)
    await herviragua()

}

function picarcarne() {
    console.log(`carne lista `)
}

function pelapapa() {
    console.log(`lista papa`)
}
function salar() {
    console.log(`sal listo`)
}
herviragua()
agregaringredientes()
pelapapa()
picarcarne()
salar()
