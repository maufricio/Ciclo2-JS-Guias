function iniciar(){
    var textFieldFocus = document.frmEjemplo.txtfoco;
    textFieldFocus.onfocus = foco;
    //Segunda caja de texto
    var textFieldKey = document.frmEjemplo.txttecla;
    textFieldKey.onkeypress = tecla;

    //Campo select
    //Se hace de esta manera cuando queremos tomar un elemento html por su name, caso diferente 
    //a cuando se toma por id o class
    var selectField = document.frmEjemplo.selopciones;
    selectField.onchange = function(){
        cambioOpcion(this.options[this.selectedIndex].value);
    };

    //Primer campo checkbox
    var checkbox1 = document.getElementById("chkbox1");
    checkbox1.addEventListener("click", function(){
        activarCasilla(checkbox1, checkbox1.value);
    }, false);

    //Segundo campo checkbox
    var checkbox2 = document.getElementById("chkbox2");
    checkbox2.addEventListener("click", function(){
        activarCasilla(checkbox2, checkbox2.value);
    }, false);

    //Tercer campo checkbox
    var checkbox3 = document.getElementById("chkbox3");
    checkbox3.addEventListener("click", function(){
        activarCasilla(checkbox3, checkbox3.value);
    }, false);
    
    //Boton de envio de formulario
    var submitButton = document.getElementById("submitbutton");
    submitButton.addEventListener("click", function(){
        alert(pulsa());
        return false;
    }, false);
}


function foco(){
    alert("Foco en la primera caja");
    this.focus();
}

function tecla(){
    alert("Pulsaste una tecla");
    this.focus();
}

function cambioOpcion(nuevaOpcion){
    alert("Has cambiado a la opción " + nuevaOpcion);
}

function activarCasilla(casilla, valorCasilla){
    var accion;
    (casilla.checked) ? accion = " activado" : accion = " desactivado";
    alert("Se ha" + accion + " la casilla " + casilla.id + " con la opción" + valorCasilla);
}
function pulsa(){
    return "Materia: Desarrollo de aplicaciones web con software interpretado en el cliente";
}
window.onload = iniciar;