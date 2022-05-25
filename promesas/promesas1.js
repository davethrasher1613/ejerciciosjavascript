// function prometedora(){
//     return new Promise((resolve,reject)=>{
//         reject(error);
//         resolve();
//     })
// }
// //...............................
// function prueba(){
//     console.log(`Soy una fruta`)
// }
// // let
// function prueba2(){
//     let vec=[1,2,3]
//     console.log(vec);
// }

// prometedora()
//     .then(()=>console.log(`Se ejecuta el resolve`))
//     .then(prueba)
//     .then(prueba2)
//     .catch(()=>console.log(`Ocurrio un error`))

/////////////////////////////////////////////////////////

 //parentesis funciones y parametros
    // function conParametros(num){
    // console.log(`${num} es un parametro`);
    // }

    // conParametros(123);

/////////////////////////////////////////////////////////


// function prometedora(num){
//     return new Promise((resolve,reject)=>{
//         resolve(num);
//         reject(); 
//     })
// }
//                                                              
// function prueba(){
//     console.log(`Soy una fruta`)
// }
// 
// function prueba2(){
//     let vec=[1,2,3]
//     console.log(vec);
// }

// prometedora(100)
//     .then((num)=>console.log(`Se ejecuta el resolve ${num}`))
//     .then(prueba)
//     .then(prueba2)

/////////////////////////////////////////////////////////////////////////

let param=100

function prometedora(num){
    return new Promise((resolve,reject)=>{
        resolve(num);
        reject(); 
    })
}

function prueba(parametro){
    console.log(`Soy una fruta ${parametro}`)
    return parametro
}

function prueba2(){
    let vec=[1,2,3]
    console.log(vec);
}

prometedora(param)
    .then(prueba)
    .then((num)=>console.log(`Se ejecuta el resolve ${num}`))
    .then(prueba2)


