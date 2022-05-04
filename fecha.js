



const fecha=(a)=>{

var fechaingresada= new Date(a)
var fechadehoy=new Date("2022-05-02")
console.log(fechaingresada);
console.log(fechadehoy);
console.log()

var fechadelpc = fechadehoy.toISOString().split("T")[0]


if (fechadehoy>fechaingresada) {
    console.log("la fecha que coloco es anterior")
}else if(fechadehoy<fechaingresada){
    console.log("la fecha que coloco es posterior")
}else{
    console.log("la fecha que coloco es actual")
}

}
fecha("2023-05-02") 




/* 
const fecha=(fecha)=>{

    var fechaingresada= new Date(fecha)
    var fechadehoy=new Date()
    console.log(fechaingresada);
    console.log(fechadehoy);
    console.log()
    
    var fechadelpc = fechadehoy.toISOString().split("T")[0]
    
    
    if (fechadelpc<fechaingresada) {
        console.log("la fecha que coloco es anterior")
    }else if(fechadelpc>fechaingresada){
        console.log("la fecha que coloco es posterior")
    }else{
        console.log("la fecha que coloco es actual")
    }
    
    }
    fecha("2020-05-02")  */