window.addEventListener('load', (event) => {

    $('#header').load('/parts/header.html');
    $('#footer').load('/parts/footer.html');

    var form = document.getElementById('formContacto');
    var nombres = document.getElementById('nombres').value
    var apellidos = document.getElementById('apellidos').value
    var edad = document.getElementById('edad').value
    var correo = document.getElementById('correo').value
    var sexo = document.getElementById('sexo').value
    var motivo = document.getElementById('motivo').value

    form.addEventListener('click', function tomaDeDatos(e) {
        e.preventDefault();

        nombres.addEventListener('keyup', function(){
            if(nombres == ''){
                var alertaNombre = document.getElementById('alertaNombre');

                alert.innerText('hola');
            }
        })
    });

});