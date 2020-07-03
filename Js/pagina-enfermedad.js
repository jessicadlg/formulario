/*FORMULARIO*/
//funcion para validar los campos 
function validar() {
    var expTelefono = /^([0-9]{4})+(-)+([0-9]{4})$/
    var error = false;
    var mensajesError = "";
    contador = 0;
    if (document.getElementById("nombreYapellido").value <= 3) {
        error = true;
        mensajesError += "<p>Por favor ingrese el campo nombre y apellido es obligatorio!</p>";
    }
    if (document.getElementById("dni").value <= 8) {
        error = true;
        mensajesError += "<p>Por favor complete el número de dni es obligatorio!</p>";
    }
    if (document.getElementById("telefono").value == "" && (!(expTelefono.test(telefono)))) {
        error = true;
        mensajesError += "<p>Por favor complete el número de teléfono es obligatorio</p>";
    }
    // Valido radio button de viaje
    var viajo = document.getElementsByName("ext");
    var seleccionadoV = false;
    for (i in viajo) {
        if (viajo[i].checked) {
            seleccionadoV = true;
            if (viajo[i].value == "SI") {

            }
        }
    }
    if (!seleccionadoV) {
        error = true;
        mensajesError += "<p>Por favor,debe selecccionar si ha viajado al exterior</p>";
    }
    else {
    // seleccionar paises
    if (document.getElementById("pais").value == 0) {
        error = true;
        mensajesError += "<p>Por favor seleccione una opcion de paises visitados es obligatorio</p>";
    }
    else{
        $("#pais").css("display","block");
    }
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
            if (garganta[i].value == "SI"){
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
            if (respiracion[i].value == "SI")
                contador++;
        }
    }
    if (!seleccionado) {
        error = true;
        mensajesError += "<p>Por favor,debe selecccionar si tuvo dificultad para respirar</p>";
    }

    // onchange


    if (document.getElementById("dir").value == "") {
        error = true;
        mensajesError += "<p>Por favor complete el campo direccion es obligatorio!</p>";
    }
    if (document.getElementById("ciu").value == "") {
        error = true;
        mensajesError += "<p>Por favor complete el campo ciudad es obligatorio!</p>";
    }
    //error muestro msj
    if (error == 0) {
        alert("Formulario enviado exitosamente!!  Fueron registrados los siguientes síntomas de COVID-19: "  + contador);
        return true;
    } else {
        document.getElementById("mensaje").innerHTML = mensajesError;
        return false;
    }

    //del cierre fc validar        
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
    // del cierre de uncion cambiar
}

