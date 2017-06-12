var cargarPagina = function (){
  cargarPersonajes();

};


var cargarPersonajes = function () {

var url = 'http://swapi.co/api/people/';
$.get (url, function (response) {
  console.log(response);

  var personajes = response.results;
  var total = response.count;

  mostrarTotalPersonajes(total);
  mostrarPersonajes(personajes);
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
