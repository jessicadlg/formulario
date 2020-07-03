
/*CONTACTO*/

const nombreYapellido = document.getElementById('nombreYapellido');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');

//Agregamos un evento al submit:

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

//Metodo para chequear inputs:

function checkInputs() {
	const nombreYapellidoValue = nombreYapellido.value.trim();
	const emailValue = email.value.trim();
	const telefonoValue = telefono.value.trim();
	
//Evaluamos las condiciones:

	if(nombreYapellidoValue === '') {
		setErrorFor(nombreYapellido, 'No puede dejar el campo vacío');
	} else {
		setSuccessFor(nombreYapellido, 'Nombre y Apellido válidos');
	}
	if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingresó un email válido');
	} else {
		setSuccessFor(email, 'Email válido');
	}
	if(telefonoValue===''){
	} else if (!isTelefono(telefonoValue)){
		setErrorFor(telefono, 'No ingresó un teléfono válido');
	} else  {
		setSuccessFor(telefono, 'Teléfono válido');
	}
}

//Cambia el estilo del input si marca error
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
//Cambia el estilo del input si marca success
function setSuccessFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control success';
	small.innerText = message;
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isTelefono(telefono){
	return /^([0-9]{4})+(-)+([0-9]{4})$/.test(telefono);
}

//Textarea:

function contarcaracteres(){
		
	var total=1000;
	//setTimeOut = después de un tiempo determinado se hace el llamado de la función
	
	setTimeout(function(){
	var contador=document.getElementById('contador');
	var texto=document.getElementById('texto-caracteres');
	var cantidad=contador.value.length;
	document.getElementById('texto-caracteres').innerHTML = 'Cantidad de caracteres : ' + cantidad + '<br>Te quedan : ' + (total - cantidad) ;
	if(cantidad>total){
		//le cambia el color al texto
		texto.style.color = "red";
	}},100);

}