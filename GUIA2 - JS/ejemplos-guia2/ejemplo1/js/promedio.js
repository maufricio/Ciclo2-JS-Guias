//Declaracion de variable s a utilizar
//Variable i declarada gloablamente porque su valor se utilizara proximaemnte, es decir 
//El valor que le queda para calcularlo despues para su respectivo promedio
var i, num, nota, notaactual, promedio;

//Captura de la cantidad de notas que se ingresarán
num = parseInt(prompt("¿Cuántas notas va a ingresar?", ""));

//Definiendo un valor de inicializcion para la variualber que se almacenara el promedio 
nota = 0;
header = "<header class=\"masked\">";
header += "<h1>Selectable Text</h1>";
header += "</header>";
document.write(header);

//Ciclo o lazo que permitrira ingresar cada nota
document.write("<section>");
document.write("<article>");
for(i = 1; i<=num; i++){
    notaactual = parseFloat(prompt("Ingrese la nota " + i + ": ", ""));
    document.write("<h3>La nota " +i + ": " + Math.round(notaactual * Math.pow(10,2)) / Math.pow(10, 2) + "</h3>");
    nota += notaactual;
}

//Obteniendo el calculo del promedio
promedio = nota /(i-1);

//imprimir el valor redondeado a dos decimales del promedio
document.write("<h3> El promedio de las notas es: " + Math.round(promedio * Math.pow(10, 2)) / Math.pow(10,2) + "</h3>");
document.write("</article>");
document.writge("</section>");
