window.addEventListener('load', () => {

    $('#header').load('/parts/header.html'); //muestro dinamicamente el header
    $('#footer').load('/parts/footer.html'); //muestro dinamicamente el footer

    var form = document.getElementById('formContacto');

    var nombres     = document.getElementById('nombres')
    var apellidos   = document.getElementById('apellidos')
    var edad        = document.getElementById('edad')
    var correo      = document.getElementById('correo')
    var sexo        = document.getElementById('sexo')
    var motivo      = document.getElementById('motivo')

    form.addEventListener('submit', e => {
        e.preventDefault();
        
        checkInputs();
    });

});

function checkInputs() {
	
    //tomamos los datos de cada input
    const nombresVal = nombres.value;
    const apellidosVal = apellidos.value;
    const edadVal = edad.value;
    const correoVal = correo.value;
    const sexoVal = sexo.value;
    const motivoVal = motivo.value;


	if(nombresVal === '') {
		setErrorFor(nombres, 'El campo está vacío');
	} else {
		setSuccessFor(nombres);
	}

    if(apellidosVal === '') {
		setErrorFor(apellidos, 'El campo está vacío');
	} else {
		setSuccessFor(apellidos);
	}

    if(edadVal === '') {
		setErrorFor(edad, 'El campo está vacío');
	} else {
		setSuccessFor(edad);
	}

    if(sexoVal === '') {
		setErrorFor(sexo, 'El campo está vacío');
	} else {
		setSuccessFor(sexo);
	}

    if(motivoVal === '') {
		setErrorFor(motivo, 'El campo está vacío');
	} else {
		setSuccessFor(motivo);
	}
	
	if(correoVal === '') {
		setErrorFor(correo, 'El campo está vacío');
	} else if (!isEmail(correoVal)) {
		setErrorFor(correo, 'El correo es inválido');
	} else {
		setSuccessFor(correo);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'formControl error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'formControl success';
}

function isEmail(correo) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);
}