var cargarPagina = function (){
  cargarPersonajes();
  $(document).on('click','.personaje',mostrarDetallePersonaje);

};

var cargarPersonajes = function () {
  var url = 'http://swapi.co/api/people/';
  $.getJSON(url, function (response) {
    console.log(response);
    // La diferencia con .get es que siempre se obtiene data, usualmente se utiliza para cuando no sabemos que tipo de informacion vamos a obtener.
     // $.getJSON, solamente esperamos informacion tipo JSON.

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
    $li.attr("data-home",personaje.homeworld);
    $li.text(personaje.name +"-"+personaje.height+"cm");
    $li.addClass("personaje");
    $ul.append($li);


  });
}
var plantillaPlaneta = '<p>nombre:<strong>__nombrePlaneta__</strong></p>'+
'<p>clima:<strong>__clima__</strong></p>';

var mostrarDetallePersonaje = function () {
    console.log($(this).data('home'));
    var homePersonaje = $(this).data('home');
    var $planetaContenedor = $('#planeta');
     $.getJSON(homePersonaje,function(response){
       console.log(response);
       $planetaContenedor.html( plantillaPlaneta.replace('__nombrePlaneta__', response.name)
       .replace('__clima__', response.climate)
     );
     });
};

$(document).ready(cargarPagina);
