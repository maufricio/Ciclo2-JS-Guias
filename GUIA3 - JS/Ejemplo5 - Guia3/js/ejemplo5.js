var aleatorios;
var min, max, cantidad;
var disparador,listado;
function init(){
//Declaración del arreglo o matriz de forma literal
//que contendrá los números aleatorios
aleatorios = [];
//Declaración y asignación de los límites entre
//los cuales estarán comprendidos los números aleatorios
min = parseInt(prompt("Ingrese el límite inferior", ""));
max = parseInt(prompt("Ingrese el límite superior", ""));
cantidad = parseInt(prompt("Indique la cantidad de numeros aleatorios a generar", ""));
disparador = document.getElementById("generador");
listado = document.getElementById("listanumeros");
//Estos if() dependen del tipo de navegador que sea
//POr ejemplo si el navegador admite addEventListener
//entonces ese ejecutará, sino ejecutará el evento
//attachEvent
if(disparador.addEventListener){
    disparador.addEventListener('click', function(evt){
        aleatorio(min, max, cantidad);
        listado.innerHTML = "Los numeros aleatorios son: " + aleatorios.toString();
    }, false);
  }else if(disparador.attachEvent){
      disparador.attachEvent('onclick', function(evt){
        aleatorios(min, max, cantidad);
        listado.innerHTML = "Los numeros aleatorios son: " + aleatorios.toString();
      });
  }
}


function aleatorio(minimo, maximo, cantidad){
    //Generando un número aleatorio teniendo el cuidado
    //que esté comprendido entre los valores mínimo y máximo
    var numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    //Verificar que no se haya llegado a la cantidad 
    //de numeros aleatorios máximo establecidos
    if(aleatorios.length < cantidad){
        //Agregar el número aleatorio al arreglo o matriz
        //utilizando el metodo push()
        aleatorios.push(numero);
        //Invocar recursivamente a la funcion aleatorio
        aleatorio(minimo, maximo, cantidad);
    }
}

window.onload = init;