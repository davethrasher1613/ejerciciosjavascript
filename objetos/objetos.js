//programacion orientada a objetos

//var vector=[]//array

//objetos literales
var objeto1={

    nombre:"Daniel",
    apellido:"albarracin",
    cedula:"762912",
    ficha:2237756,
    programa:"adsi",
    informacion:function(){

        return `${this.nombre} estudia ${this.programa} y su identificacion es ${this.cedula}`
    },
funcionprueba:()=>"soy tipo flecha",
    localidad:"soacha"
};//objeto por los corchetes

objeto1.estrato="2"//agregar elementos afuera del objeto
console.log(typeof(objeto1.apellido))
console.log(objeto1.informacion())
console.log(objeto1.funcionprueba())
console.log(objeto1)



