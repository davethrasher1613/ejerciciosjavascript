var fraccionarios={
    numerador1:3,
    numerador2:5,
    denominador1:4,
    denominador2:7,
    
    suma:function(){
    
    var multiplicacion1= this.numerador1*this.denominador2
    var multiplicacion2=this.numerador2*this.denominador1
    const multiplicaciondenominador=this.denominador1*this.denominador2
    
    var fase2= multiplicacion1+multiplicacion2
    return `  el resultado es: ${fase2} / ${multiplicaciondenominador}`
    
    },
    
    resta:function(){
    
    
        var multiplicacion1= this.numerador1*this.denominador2
        var multiplicacion2=this.numerador2*this.denominador1
        const multiplicaciondenominador=this.denominador1*this.denominador2
        
        var fase2= multiplicacion1-multiplicacion2
        return `  el resultado es: ${fase2} / ${multiplicaciondenominador}`
    
    
    }
    
    }
    console.log(fraccionarios.suma())
    console.log(fraccionarios.resta())