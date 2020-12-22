
// Script de la página responderchecklist.html que valida campos llenos.


function selecciona() {
    var checkboxes = document.getElementById("formulario").checkbox; 

    var cont = 0; 

    for (var x = 0; x < checkboxes.length; x++) {
        if (checkboxes[x].checked) {
            cont = cont + 1;
        }
    }
if (cont==0) { alert("no selecciono ninguno")

}

    if (document.getElementById('chk1').checked == true) {

        e= document.getElementById("nombre1").innerHTML;
        document.getElementById('nom1').innerHTML= e;
    }else{ document.getElementById('nom1').innerHTML =""}

    if (document.getElementById('chk2').checked == true) {

        f= document.getElementById("nombre2").innerHTML;
        document.getElementById('nom2').innerHTML = f;
    } else { document.getElementById('nom2').innerHTML = "" }

}


//Script de la página reportes.html el cual despliega gráficos utilizando el plugin chart.js

var grafico1 = document.getElementById("grafico");
grafico1.height = 18;
grafico1.witdth = 1;

window.onload = function () {
    var grafico1 = document.getElementById("grafico").getContext("2d");
    var myChart = new Chart(grafico1, {
        type: 'bar',
        data: {
            labels: ['Recoleta', 'Santiago', 'Ñuñoa', 'Villa Alemana'],
            datasets: [{
                label: "Cantidad de Clientes por Comuna",
                data: [6, 20, 15, 10],
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'black',


                data: [6, 20, 15, 10, ]
            }],

        },
        options: {
            legend: {
                labels: {
                    fontColor: "white",
                    fontSize: 18
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "white",
                        fontSize: 18,
                        stepSize: 5,
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: "white",
                        fontSize: 18,
                        stepSize: 5,
                        beginAtZero: true
                    }
                }]
            }

        }
    });

    var grafico2 = document.getElementById("grafico2");


    grafico2.height = 18;
    grafico2.witdth = 1;

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = "white";

    var datos1 = {
        label: "Cantidad de Accidentes",
        data: [10, 6, 18, 21, 32, 23, 28, 16, 25, 14, 17, 22],
        lineTension: 0,
        fill: false,
        borderColor: 'red'
    };

    var datos2 = {
        label: "Cantidad de Visitas",
        data: [5, 3, 12, 18, 32, 12, 17, 7, 20, 14, 8, 14],
        lineTension: 0,
        fill: false,
        borderColor: 'green'
    };

    var meses = {
        labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        datasets: [datos1, datos2]
    };

    var chartOptions = {
        legend: {
            display: true,
            position: 'top',
            labels: {
                boxWidth: 80,
                fontColor: 'white',

            }
        }
    };

    var lineChart = new Chart(grafico2, {
        type: 'line',
        data: meses,
        options: chartOptions,


    });


    var grafico3 = document.getElementById("grafico3");
    grafico3.height = 30;
    grafico3.witdth = 1;

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;

    var oilData = {
        labels: [
            "Cumple",
            "No Cumple",
            "Cumple con Observaciones",
            
        ],
        datasets: [{
            data: [30,12,58],
            backgroundColor: [
                "#00ff80",
                "#f7d358",
                "#fe2e64",
               
            ]
        }]
    };

    var pieChart = new Chart(grafico3, {
        type: 'pie',
        data: oilData
    });

}


// Script de crearpago.html, el cual devuelve la fecha actual y espera un valor correcto, si no, cambia de color.

function fecha() {

    var f = new Date();
    document.getElementById("fecha").innerHTML = (f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());

}

function aceptar() {

    m = document.getElementById("monto").value;
   y= document.getElementById("rut").value;

    if (m < 0 || m > 1000000) {

        document.getElementById("monto").style.backgroundColor = "red";
        document.getElementById("monto").style.borderColor = "green";
    } else {
        document.getElementById("monto").style.backgroundColor = "white";
        document.getElementById("monto").style.borderColor = "white";
    }
    d = document.querySelector('input[type="month"]').value;

    if (d < '2010-01' || d > '2050-12') {


        document.getElementById("fecha2").style.backgroundColor = "red";
        document.getElementById("fecha2").style.borderColor = "green";

    } else {
        document.getElementById("fecha2").style.backgroundColor = "white";
        document.getElementById("fecha2").style.borderColor = "white"; }

    if ((m > 0 && m < 1000000) && (d > '2010-01' && d < '2050-12') && (y !="")) {
        alert("Datos Ingresados Correctamente");
        document.getElementById("fecha2").style.backgroundColor = "white";
        document.getElementById("fecha2").style.borderColor = "white";
        document.getElementById("monto").style.backgroundColor = "white";
        document.getElementById("monto").style.borderColor = "white";
    }
    z = document.getElementById("monto").value;
    if (z == "") {
        document.getElementById("monto").style.backgroundColor = "red";
        document.getElementById("monto").style.borderColor = "green";
    }

    if (y == "") {
        document.getElementById("rut").style.backgroundColor = "red";
        document.getElementById("rut").style.borderColor = "green";
    } else {
        document.getElementById("rut").style.backgroundColor = "white";
        document.getElementById("rut").style.borderColor = "white";      }

}


$(function() { 
   
 

// Script listadovisitas.html, envia mensaje de confirmación redireccionando posteriomente.
function funcion() {
        
    var mensaje = confirm("¿Desea validar y modificar los chequeos de esta visita?");
    
    if (mensaje) {
        alert("sera redireccionado");
        window.location.href = "responderchecklist.html";
    }
    
    
}

// Script login.html valida al usuario según su rut y después redirecciona

document.addEventListener(
    'DOMContentLoaded',
    function(evt) {
        var btnValidar = document.getElementById('validar');
        btnValidar.addEventListener( 
            'click',
            validarCedula
        );
    }
);

function validarCedula(evt) {
    var numCedula = document.getElementById('cedula').value,
        resultado = document.getElementById('resultado'),
        cedulaValida = /[0-9]{8}-[0123456789kK]{1}/;
  
    if (cedulaValida.test(numCedula)) {

        alert(innerText = 'RUN VÁLIDO: ' + numCedula);

        window.location = "listadousuarios.html"
    } else {
        alert(innerText = 'RUN INVÁLIDO: ' + numCedula);
        return;


    }
}

});