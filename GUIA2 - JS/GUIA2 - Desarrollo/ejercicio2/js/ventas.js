const form = document.getElementById("formulario-datos");
var counter = 0;
function initialize(){ 
    var btnBorrar = document.getElementById("btnBorrar");
    form.onsubmit = function(){
        viewElements(document.formulario.nombreVendedor.value, document.formulario.txtProducto.value, document.formulario.txtPrecio.value);
       // pressedTimes(document.formulario.btnEnviar.value);
    }
    
}
    function viewElements(nombreVendedor, nombreProducto, precio){
        if((nombreVendedor.length > 0) && (nombreProducto.length > 0) && (precio.length > 0)){
            if(parseInt(precio) && precio !== undefined){
              
                viewSpace = document.getElementById("view");
                var nombre = new Array();
                var productos = new Array();
                var precioProducto = new Array();
                var htmlContent;
                
                nombre = [nombreVendedor];
                productos = [nombreProducto];
                precioProducto = [precio];

                htmlContent = document.getElementById("view");
                htmlContent.innerHTML = "";
                    htmlContent.insertAdjacentHTML('afterbegin', '<h2>HISTORIAL</h2>');
                    htmlContent.insertAdjacentHTML('beforeend','<fieldset>');
                    htmlContent.insertAdjacentHTML('beforeend','<legend><span class=\"number\"> Vendedor y producto </legend>');
                        for(let j = 0; j < productos.length; j++){
                            htmlContent.insertAdjacentHTML('beforeend', '<div class=\"pieces\"> <p> Nombre Vendedor: "'+ nombre[j] +'" </p></div> \n');
                            htmlContent.insertAdjacentHTML('beforeend', '<div class=\"pieces\"> <p> Nombre Vendedor: "'+ productos[j] +'" </p></div> \n');
                            htmlContent.insertAdjacentHTML('beforeend', '<div class=\"pieces\"> <p> Nombre Vendedor: "'+ precioProducto[j] +'" </p></div> \n');
                        }
                        htmlContent.insertAdjacentHTML('beforeend', '</fieldset>');
                   

            }else{
                window.alert("El precio de tu producto debe ser un número.");
            }
        }else{
            window.alert("Ingresa los datos primero que están en el formulario.");
        }
    }

    function cleanElements(){
        document.getElementById("nombreVendedor").value="";
        document.getElementById("txtProducto").value="";
        document.getElementById("txtPrecio").value="";  
    }
    function contador(){
        counter = counter  + 1;
        var btn = document.getElementById("btnEnviar");
        btn.value = "Presiona Aqui ("+counter+")";
    }
    /*]function pressedTimes(){
        counter++;
        return counter;
    }*/
window.onload = initialize();
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

 /*const unicos = [];
            for(var t = 0; t < productos.length; t++){
                
                const elemento = numeros[i];
                if (!unicos.includes(numeros[i])) {
                    unicos.push(elemento);
                }
            }
            console.log(unicos);*/
            //document.write("[ " + productos[j] + " ] ");
            /*htmlContent += "<div class=\"pieces\"> <p> Nombre Vendedor: '"+ productos[j] +"' </p></div> \n";
            htmlContent += "<div class=\"pieces\"> <p> Nombre Producto: '"+ productos[j] +"' </p></div> \n";
            htmlContent += "<div class=\"pieces\"> <p> Precio de Producto: $'"+ productos[j] +"' </p></div> \n";*/
            //htmlContent += "<div class=\"pieces\"> <p> Veces presionadas: $'"+ pressedTimes(button) +"' </p></div> \n";