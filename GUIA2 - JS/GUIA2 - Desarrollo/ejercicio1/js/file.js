    var r = 0;
    var n = new Array();
    var numero = prompt("Ingrese un número: ", ""), contador = 0, contadorImpar = 0, contadorPar = 0, sumaPar = 0, sumaImpar = 0;
    var nMenor = 0, nMayor = 0;
    var sum = 0, resultadoMenor = 0, resultadoMayoe = 0;

    function separarNumeros(num, arreglo){
        arreglo = num.split(' ');  
        for(i = 0; i < arreglo.length; ++i){  
            r  = r + parseInt(arreglo[i], 10);
        }
        return r;
    }

    function cantidadNumeros(numero){
        while(numero>=1){
            contador = contador + 1;
            numero = numero / 10;
            divisionResultado = numero * 10 % 10 / 10;
            integer = numero - divisionResultado; 
            if(integer % 2 == 0){
                contadorPar = contadorPar + 1;
                document.write("Numeros pares: " + integer + "<br>");
                sumaPar = sumaPar + integer;
            }else{
                contadorImpar = contadorImpar + 1;
                document.write("Numeros Impares: " + integer + "<br>");
                sumaImpar = sumaImpar + integer;
            }
        }   
        return contador;
    }

    function sumaNumeros(arreglo, resultado){
        arreglo.forEach (function(arreglo){
            resultado += arreglo;
        });
        return resultado;
    }

    function cifrasMenor(arreglo, resultadoMenor){
        for(let k = 0; k<arreglo.length; ++k){
            for(let t = k + 1; t < k; ++t){
                if(arreglo[k] < arreglo[t]){
                    nMenor = arreglo[k];
                    resultadoMenor = nMenor;
                }
            }
        }
        return resultadoMenor;
    }
    function cifrasMayor(arreglo, resultadoMayor){
        for(let k = 0; k<arreglo.length; ++k){
            for(let t = k + 1; t < k; ++t){
                if(arreglo[k] > arreglo[t]){
                    nMayor = arreglo[k];
                    resultadoMayor = nMayor;
                }
            }
        }
        return resultadoMayor;
    }

    document.write("Numero en arreglo: " + separarNumeros(numero, n) + "<br><br>");
    document.write("Cantidad de dígitos del número: " + cantidadNumeros(numero) + "<br>");
    document.write("Suma Arreglo: " + sumaNumeros(n, sum) + "<br>");
    document.write("Cantidad de Pares: " + contadorPar + "<br>");
    document.write("Cantidad de Impares: "+ contadorImpar + "<br>");
    document.write("Suma de Pares: "+ sumaPar + "<br>");
    document.write("Suma de Impares: "+ sumaImpar + "<br>");
    document.write("Numero menor:  " + cifrasMenor(n, resultadoMenor));
    document.write("Numero menor:  " + cifrasMayor(n, resultadoMenor));



/*function init(){    
        var numero = parseInt(prompt("Ingrese un número: ", ""));
        document.write("Número ingresado: " + numero + "<br>");
            let contador = 0;
            var almacen = new Array();
            var contadorImpar = 0, contadorPar = 0;
            var divisionResultado = 0;
            var integer = 0;
            var sumaPar = 0, sumaImpar = 0;







                //La funcionalidad proviene de que tenemos el numero desde el prompt, y progresivamente lo vamos dividiendo ese numero entre 10
                //Mientras que contador va aumentando mediante las divisiones dichas se van haciendo
                //Entonces el resultado final, como se ha puesto que debe de ser mayor a 1 el resultado para seguir iterando 
                //si excede con limite a más bajo de lo dicho es decir menor a 1, entonces se finaliza el bucle, y 
                //con el resultado final que se obtuvo de parte del contador entonces ese es el numero de cifras que tiene el numero
                
                //La mecanica de esto funciona que como se diivide entre 10, el numero va adquieriendo el punto decimal, y ese punto decimal
                //va correindo hacia la izquierda, a tal punto que se este se queda a cero con el numero de las divisiones que se han hecho 
                //Para dividir este numero-
                
                
                while(numero>=1){
                    contador = contador + 1;
                    numero = numero /10; 
                    divisionResultado = numero *10 %10/10;
                    integer = numero - divisionResultado;
                    
                    if(integer % 2 == 0){
                        contadorPar = contadorPar + 1;
                        document.write("Numeros pares: " + integer);
                        //sumaPar += integer;
                    }else{
                        contadorImpar = contadorImpar + 1;
                        document.write("Numeros Impares: " + integer);
                        //sumaImpar += integer;
                    }                    
                }   
                
                document.write("Cantidad de números impares: "+ contadorImpar + "<br>");
                document.write("Cantidad de números pares: "+ contadorPar + "<br>");
                document.write("Suma de pares: " + sumaPar);
                document.write("Suma de Impares: " + sumaImpar);
                
                if(contador == 1){
                    document.write("El numero tiene: " + contador + " dígito.");
                }else{
                    document.write("El numero tiene: " + contador + " dígitos.");
                }
        while(numero >=1 ){
            divisionResultado = numero/10; 
            var fract = divisionResultado * 10 % 10 /10; //0.2
            var integr = divisionResultado - fract; //3 
            document.write(integr + " ");
            for(i = 0; i<numero.length; i++){
                almacen[i] = integr;
            }    
            contadorImpar= contadorImpar +1;
        }

        for(x = 0; x < almacen.length; x++){
            document.write(almacen[x] + " ");
        }
           
}

    
window.onload = init();
*/





