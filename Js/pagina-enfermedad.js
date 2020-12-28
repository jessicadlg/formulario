/*FORMULARIO*/
//funcion para validar los campos 
function validar() {
    var expDni = /^([0-9]{8})$/
    var expTelefono = /^([0-9]{4})+(-)+([0-9]{4})$/
    var error = false;
    var mensajesError = "";
    contador = 0;
    // VALIDO NOMBRE Y APELLIDO
    if (document.getElementById("nombreYapellido").value == "") {
        error = true;
        mensajesError += "<p>El campo nombre y apellido es obligatorio</p>";
        document.getElementById("nombreYapellido").style.borderColor = "red";
    } else if (document.getElementById("nombreYapellido").value.length < 5) {
        error = true;
        mensajesError += "<p>Por favor el campo nombre y apellido debe tener un minimo de 5 caracteres!</p>";
        document.getElementById("nombreYapellido").style.borderColor = "red";
    } else {
        document.getElementById("nombreYapellido").style.borderColor = "green";
    }
    // VALIDO DNI
    if (document.getElementById("dni").value ==
        "") {
        error = true;
        mensajesError += "<p>Por favor complete el número de dni es obligatorio!</p>";
        document.getElementById("dni").style.borderColor = "red";
    } else if (!(expDni.test(document.getElementById("dni").value))) {
        error = true;
        mensajesError += "<p>Por favor ingrese el campo dni debe tener  8 caracteres numericos!</p>";
    } else {
        document.getElementById("dni").style.borderColor = "green";
    }
    // VALIDO TELEFONO
    if (document.getElementById("telefono").value ==
        "") {
        error = true;
        mensajesError += "<p>Por favor complete el número de telefono es obligatorio!</p>";
        document.getElementById("telefono").style.borderColor = "red";
    } else if (!(expTelefono.test(document.getElementById("telefono").value))) {
        error = true;
        mensajesError += "<p> El número de teléfono debe tener formato xxxx-xxxx con 8 caracteres numericos y un guion medio al centro!</p>";
    } else {
        document.getElementById("telefono").style.borderColor = "green";
    }
    // Valido radio button de viaje
    var viajo = document.getElementsByName("ext");
    var seleccionadoV = false;
    for (i in viajo) {
        if (viajo[i].checked) {
            seleccionadoV = true;
            if (viajo[i].value == "SI") {
                if (document.getElementById("pais").value == 0) {
                    error = true;
                    mensajesError += "<p>Por favor seleccione una opcion de paises visitados es obligatorio</p>";
                }
            }
        }
    }
    if (!seleccionadoV) {
        error = true;
        mensajesError += "<p>Por favor,debe selecccionar si ha viajado al exterior</p>";
    }
    //validacion radio buton:
    var fiebre = document.getElementsByName("campo8");
    var seleccionado = false;
    for (i in fiebre) {
        if (fiebre[i].checked) {
            seleccionado = true;
            if (fiebre[i].value == "SI") {
                contador++;
            }
        }
    }
    if (!seleccionado) {
        error = true;
        mensajesError += "<p>Por favor,debe selecccionar si tuvo fiebre</p>";
    }

    var dolor = document.getElementsByName("campo9");
    var seleccionado = false;
    for (i in dolor) {
        if (dolor[i].checked) {
            seleccionado = true;
            if (dolor[i].value == "SI")
                contador++;
        }
    }
    if (!seleccionado) {
        error = true;
        mensajesError += "<p>Por favor,debe selecccionar si tuvo dolor de cabeza</p>";
    }

    var tos = document.getElementsByName("campo10");
    var seleccionado = false;
    for (i in tos) {
        if (tos[i].checked) {
            seleccionado = true;
            if (tos[i].value == "SI")
                contador++;
        }
    }
    if (!seleccionado) {
        error = true;
        mensajesError += "<p>Por favor,debe selecccionar si tuvo tos</p>";
    }

    var garganta = document.getElementsByName("campo11");
    var seleccionado = false;
    for (i in garganta) {
        if (garganta[i].checked) {
            seleccionado = true;
            if (garganta[i].value == "SI") {
                contador++;
            }
        }
    }
    if (!seleccionado) {
        error = true;
        mensajesError += "<p>Por favor,debe selecccionar si tuvo dolor de garganta</p>";
    }

    var respiracion = document.getElementsByName("campo12");
    var seleccionado = false;
    for (i in respiracion) {
        if (respiracion[i].checked) {
            seleccionado = true;
            if (respiracion[i].value == "SI") {
                contador++;
                // aqui valide campos ocultos
                if (document.getElementById("dir").value == "") {
                    error = true;
                    mensajesError += "<p>Por favor complete el campo direccion es obligatorio!</p>";
                }
                if (document.getElementById("ciu").value == "") {
                    error = true;
                    mensajesError += "<p>Por favor complete el campo ciudad es obligatorio!</p>";
                }
            }
        }
    }
    if (!seleccionado) {
        error = true;
        mensajesError += "<p>Por favor,debe selecccionar si tuvo dificultad para respirar</p>";
    }
    //error muestro msj
    if (error == 0) {
        alert("Formulario enviado exitosamente!!  Fueron registrados los siguientes síntomas de COVID-19: " + contador);
        return true;
    } else {
        document.getElementById("mensaje").innerHTML = mensajesError;
        return false;
    }
}

function cambiar() {
    //codigo para el campo de PAISES VISITADOS:
    var select = document.getElementsByName("ext");
    for (i in select) {
        if (select[i].value == "SI" && select[i].checked) {

            document.getElementById("paisesV").style.display = "block";
        }

        if (select[i].value == "NO" && select[i].checked) {

            document.getElementById("paisesV").style.display = "none";
        }
    }
    //para respira con dificultad abre nuevos input:
    var opciones = document.getElementsByName("campo12");
    for (i in opciones) {
        if (opciones[i].value == "SI" && opciones[i].checked) {

            document.getElementById("dire").style.display = "block";
        }
        if (opciones[i].value == "NO" && opciones[i].checked) {

            document.getElementById("dire").style.display = "none";
        }

    }

}

