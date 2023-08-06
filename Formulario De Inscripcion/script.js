function enviarDatos() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var dni = document.getElementById("dni").value;

  var datos = {
    nombre: nombre,
    apellido: apellido,
    dni: dni
  };

  var datosJSON = JSON.stringify(datos);

  localStorage.setItem("datosInscripcion", datosJSON);
}

function mostrarDatos() {
  var datosJSON = localStorage.getItem("datosInscripcion");

  if (datosJSON) {
    var datos = JSON.parse(datosJSON);

    var datosMostrados = document.getElementById("datosMostrados");
    datosMostrados.innerHTML = "Nombre: " + datos.nombre + "<br>" +
                               "Apellido: " + datos.apellido + "<br>" +
                               "DNI: " + datos.dni;
  } else {
    var datosMostrados = document.getElementById("datosMostrados");
    datosMostrados.innerHTML = "No se encontraron datos almacenados.";
  }
}