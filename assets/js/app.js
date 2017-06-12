var cargarPagina = function (){
  cargarPersonajes();
};


var cargarPersonajes = function () {
    //Qué hace el metodo JQUERY --> AJAX ??
    //Realiza una peticion http asincrona.
    // $.ajax(url,[settings]);
    // Los settings son opcionales, son opcionales
    $.ajax('https://swapi.co/api/people/',{
      // url: 'http://swapi.co/api/people/',
      method: 'GET',
      dataType: 'json',
      success: function (response) {
        // console.log("respuesta",response);
        var personajes = response.results;
        var total = response.count;
        mostrarPersonajes(personajes);
        mostrarTotalPersonajes(total);
      },
      error: function (error) {
        console.log("error",error);
      }
    });
};
var mostrarTotalPersonajes = function (total){
  $("#totalPersonajes").text("total de personajes:"+total);
}
var mostrarPersonajes = function(personajes) {
  var $ul = $("#personajes");
  personajes.forEach(function(personaje) {
    console.log(personaje);
    console.log(personaje.name);
    console.log(personaje.height);

    var $li = $("<li />");
    $li.text(personaje.name +" "+personaje.height);
    $ul.append($li);

  });
}
$(document).ready(cargarPagina);
