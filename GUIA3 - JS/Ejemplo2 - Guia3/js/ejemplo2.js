//Iniciando el maneajdor para los enlaces de la pagina
window.onload = confirmAllLinks;

//Contrlador de eventos para elementos de enlace y area en mapas
//Utiliza la palabra clve this para hacer referencia al elemento
//del documento y puede devolver false para evitar que
//el navegador vaya al vinculo
function confirmLink(){
    return confirm("¿Está seguro que quiere visitar el sitio:" + this.href + " ? ");
}
//Recorrer todo los enlaces (hipervinculos) del documento y asignar
//la funcion confirmLink a cada uno como controlador de evento.
function confirmAllLinks(){
    for(var i = 0; i < document.links.length; i++){
        document.links[i].onclick = confirmLink;
    }
}