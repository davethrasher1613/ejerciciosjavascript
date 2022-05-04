var contarmayusculas = 0;
var contarminusculas=0;
var contarnumeros=0;
var contarcaracteres=0;
 var cadena = "hola a TODAS y Todos soy daniel y tengo [20) años";
 var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
 var minusculas = "abcdefghijklmnñopqrstuvwxyz";
 var numeros ="1234567890"
 var caracteres="!#$%&/()=?¡+*¨´{]}["

 for (var i = 0; i < mayusculas.length; i++) {
    for (var x = 0; x < cadena.length; x++) {
    if(cadena[x]==mayusculas[i]){
    contarmayusculas+=1;
     }
   }

 }

   for (var i = 0; i < minusculas.length; i++) {
    for (var x = 0; x < cadena.length; x++) {
    if(cadena[x]==minusculas[i]){
    contarminusculas+=1;
     }
   }
  
 }




 for (var i = 0; i < numeros.length; i++) {
    for (var x = 0; x < cadena.length; x++) {
    if(cadena[x]==numeros[i]){
    contarnumeros+=1;
     }
   }
  
 }

 for (var i = 0; i < caracteres.length; i++) {
    for (var x = 0; x < cadena.length; x++) {
    if(cadena[x]==caracteres[i]){
    contarcaracteres+=1;
     }
   }
  
 }


console.log(` la cadena ${cadena} contiene: el numero de minusculas es de ${contarminusculas},  el numero de mayusculas es ${contarmayusculas}, la cantidad de numeros es ${contarnumeros} y tiene una cantidad de caracteres de ${contarcaracteres}` )


