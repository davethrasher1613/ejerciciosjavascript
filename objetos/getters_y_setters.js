 var rockalparque2019={

banda1:"sodom",
banda2:"deicide",
banda3:"toxic holocaust",
getBanda1:function(){
return this.banda1

},

getBanda2(){//el metodo get permite llamar un  elemento del objetos
    return this.banda2
},

setBanda1(banda1){

    this.banda1=banda1;
},

setBanda2(banda2){

    this.banda2=banda2;
},



};
rockalparque2019.setBanda1("slayer")// el metdo set permite modificar un atribuito de un objeto como en este caso slayer pasa al espacio de la banda uno opnde estaba sodom
rockalparque2019.banda1="cannibal corpse";//metodo set llamado de otro modo
console.log(rockalparque2019.getBanda1())
console.log(rockalparque2019.getBanda2())
 




