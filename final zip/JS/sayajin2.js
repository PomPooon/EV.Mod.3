//  script de listadoasesorias.html el cual cambia de color el estilo según el botón seleccionado.




$(".boton1").click(function (estilo1) {
                    
    $("table").css({ 'color': 'red', 'font-size': '1.3em', 'background': 'yellow' ,'border-color': 'blue', 'border-width': '0.3em' });
});

$(".boton2").click(function (estilo2) {

     $("table").css({ 'color': 'white', 'font-size': '1.5em', 'background': 'orange', 'border-color': 'brown', 'border-width': '0.5em' });
});

 $(".boton3").click(function (estilo3) {

    $("table").css({ 'color': 'yellow', 'font-size': '0.5em', 'background': 'pink', 'border-color': 'green', 'border-width': '3.5em' });
});

// Script crearasesoria.html, cuenta cantidad de caracteres y valida los datos.

$(document).ready(function () {
    $("#enviar").click(function () {
            if ($("#fecha").val() == 0) {
                alert('Este campo no puede estar vacío')
            }
            if ($("#codigo").val() == 0) {
                alert('Este campo no puede estar vacío '
                    )
                }
                if ($("#motivo").val() == "") {
                    alert('Este campo no puede estar vacío')
                }

                if ($("#motivo").val() == "") {
                    alert('Debe Seleccionar un Campo')
                }
            });
        $("#motivo").keyup(function () {
            f = $("#motivo").val().length
            h = 250 - f
            $("#conta").val(h)
        });
        $("#motivo").keypress(function () {
            if (f > 250) return false;
        });



$("#enviar").click(function () {

    if ($("#idAccidente").val() == "") {
        alert("Complete Id")
        return false
    }
    else if ($("#fechaAccidente").val() == 0) {
        alert("Complete Fecha")
        return false
    }
    else if ($("#horaAccidente").val() == 0) {
        alert('Complete Hora')
        return false
    }

    else if ($("#lugarAccidente").val() == "") {
        alert('Complete Lugar de Accidente')
        return false
    }

    else if ($("#origenAccidente").val() == "") {
        alert('Complete Origen Accidente')
        return false
    }
    else {
        alert("Enviado!")
        return true
    }
});


    // Script de la página administrarasistentes.html, la cual realiza una tabla mediante plugin datatable y valida los datos con plugin validate.

    var t = $('#AdminAsist').DataTable({
        "paging": false,
        "ordering": false,
        "info": false,

        "language": {
            "search": "Buscar:",
            "zeroRecords": "No hay datos que correspondan"
        }


    });


    jQuery.extend(jQuery.validator.messages, {

        required: "Este campo es obligatorio.",
        max: jQuery.validator.format(
            "Por favor ingrese un numero menor a {0} ."),
        min: jQuery.validator.format(
            "Por favor ingrese un numero mayor o igual a  {0}."),

               minlength: jQuery.validator.format(
            "Por favor ingrese un numero de caracteres  igual a  {0}."),
            maxlength: jQuery.validator.format(
            "Por favor ingrese un numero de caracteres menor a  {0}."),

            email: "Por favor ingrese un correo válido."
    });


    $(function () {
        $("#form").validate({

           rules: {
                IDasist: {
                    required: true,
                    max: 10000,
                    min: 1
                },

                Nomcom: {
                    required: true,
                    minlength: 1,
                    maxlength: 100
                },
                edad: {
                    required: true,
                    min: 0,
                    max: 150
                },
                correo: {
                    required: true,

                },
                telef: {
                    required: true,
                    maxlength: 8,
                    minlength: 8,

                }, 


            },
            errorClass: "invalid"

        });

        $("#botonEnviar").click(function () {
            if ($("#form").valid()) {


                var asi = ($("#IDasist")).val();
                var cor = ($("#correo")).val();
                var tel = ($("#telef")).val();

            t.row.add([
                asi,
                cor, '+569'+ tel,
                 '<button>BORRAR</button>'


            ], ).draw(false);


            }



        });



    });

// Script editarcliente.html  el cual agrega datos a la tabla mediante datatable,después de validarlos mediant j.validate 


var table = $('#example').DataTable({
    "paging": false,
    "ordering": false,
    "info": false,

    "language": {
        "search": "Buscar:",
        "zeroRecords": "No hay datos que correspondan"
    }
});


$(addRow).click(function () {

    jQuery.extend(jQuery.validator.messages, {

        required: "Este campo es obligatorio.",

    });


    $("#formcli").validate({


        debug: true,


        rules: {

            runc: {

                required: true,

                minlength: 2

            },

            noms: {

                required: true,

                minlength: 2

            }, apes: {

                required: true,

                minlength: 2

            },

            tele: {

                required: true,

                minlength: 2

            },
            afp: {

                required: true,

                minlength: 2

            },
            sisa: {

                required: true,

                minlength: 2

            },
            direc: {

                required: true,

                minlength: 2

            },
            comu: {

                required: true,

                minlength: 2

            },

            edad: {

                required: true,

                minlength: 2

            },
        }

    });


    var runc = $('#runc').val();
    var noms = $('#noms').val();
    var apes = $('#apes').val();
    var tele = $('#tele').val();
    var afp = $('#afp').val();
    var sisa = $('#sisa').val();
    var direc = $('#direc').val();
    var comu = $('#comu').val();
    var edad = $('#edad').val();

    if (noms== "" || runc =="" || apes == "" || tele == "" || afp == "" || sisa == "" || direc =="" || comu =="" || edad=="" ) {
        return
    }
    var rowNode = table
        .row.add([runc, noms, apes, tele, afp, sisa, direc, comu, edad])
        .draw()
        .node();

    $(rowNode)
        .css('color', 'red')
        .animate({ color: 'black' });


});

       
    });