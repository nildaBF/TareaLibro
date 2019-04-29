let plantilla = $(" .row") .html();


 $(" .row") .html('');



 $.get("https://3a8i3.github.io/libros/", function( datos ){
 	mostrarDatos( datos );
 	
 });


  function mostrarDatos( d ){


 	for (let i = 0; i < d.length; i++) {
 	  	let plantillatJQ = $(plantilla);

	 	plantillatJQ.find(".titulo").text(d[i].titulo);
	 	plantillatJQ.find(".Nombe-autor").text(d[i].autor.nombre);
	 	plantillatJQ.find(".fecha-autor").text(d[i].autor.nacimiento.fecha);
	 	plantillatJQ.find(".ciudad-autor").text(d[i].autor.nacimiento.ciudad);
	 	plantillatJQ.find(".pais-autor").text(d[i].autor.nacimiento.pais);
	 	plantillatJQ.find(".biografia").text(d[i].autor.biografia);
	 	plantillatJQ.find(".anho").text(d[i].anho);
	 	plantillatJQ.find(".editorial").text(d[i].editorial);
	 	plantillatJQ.find(".temas").text(d[i].temas);
	 	plantillatJQ.find(".resumen").text(d[i].resumen);


	    plantillatJQ.find(".portada").attr( "src",d[i].portada);
	    plantillatJQ.find(".foto").attr( "src",d[i].autor.foto);



	 	$(" .row") .append(plantillatJQ);
 	}
 }