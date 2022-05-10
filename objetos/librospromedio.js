function libro(nombre,autor, fecha_de_publicacion,paginas){

this.nombre=nombre
this.autor=autor
this.fecha_de_publicacion=new Date(fecha_de_publicacion)
this.paginas=paginas

this.tiempo_de_lectura=function(promedio_de_lectura){

var minutos=5
var hojas_x_minuto=10

var promedio_de_lectura= paginas* minutos/hojas_x_minuto

return `el tiempo que se demorara leyendo el libro es de  ${promedio_de_lectura} minutos`

},

this.fecha_de_cambio=function(cambiar_libro){


var  cambiar_libro=new Date("2012-01-01")

if (this.fecha_de_publicacion>cambiar_libro){
 return   `el libro ${this.nombre} aun tiene vida util`
       
}else{

    return`el libro ${this.nombre} debe ser cambiado`
}




}




}


var libro1= new libro("antologia de terror","h.p lovecraft","1980-05-05",551);
var libro2= new libro("satanas","mario mendoza","2021-05-05",20);
var libro3= new libro("el señor de los anillos","J,R Tolkien","1954-07-29",465);
var libro4= new libro("La importancia de morir a tiempo","Mario Mendoza","2012-07-29",465);



console.log(libro1)
console.log(libro1.tiempo_de_lectura())
console.log(libro1.fecha_de_cambio())
console.log(libro2)
console.log(libro2.tiempo_de_lectura())
console.log(libro2.fecha_de_cambio())
console.log(libro3)
console.log(libro3.tiempo_de_lectura())
console.log(libro3.fecha_de_cambio())
console.log(libro4)
console.log(libro4.tiempo_de_lectura())
console.log(libro4.fecha_de_cambio())