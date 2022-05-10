function elementos_repetidos(arreglo, numero) {
    var contador = 0;
    for (var i = 0; i < arreglo.length; i++) {
      for(elemento of arreglo[i]) {
        if(elemento=== numero) {
          contador++;
        }
      }
    }
    return contador;
  }
  
  console.log('Repetidos: ' + elementos_repetidos([[1, 8],[9, 5],[1, 1]], 1));