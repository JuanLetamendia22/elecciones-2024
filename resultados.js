(async () => {
    // Llamar a nuestra API. Puedes usar cualquier librería para la llamada, yo uso fetch, que viene nativamente en JS
    const respuestaRaw = await fetch("realizarJsons.php");
    // Decodificar como JSON
    const respuesta = await respuestaRaw.json();
    // Ahora ya tenemos las etiquetas y datos dentro de "respuesta"
    // Obtener una referencia al elemento canvas del DOM
    const $grafica = document.querySelector("#grafico-resultados");
    const $pie =document.querySelector("#pie-resultados");
    const partidos = respuesta.partidos; // <- Aquí estamos pasando el valor traído usando AJAX
    
    const pieColors = ["red", "blue", "green", "yellow", "orange", "brown", "cyan", "magenta", "lime","purple", "pink"];
    
    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const datosVotos = {
        label: "Votos",
        // Pasar los datos igualmente desde PHP
        data: respuesta.votos, // <- Aquí estamos pasando el valor traído usando AJAX
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 1, // Ancho del borde
    };

    const porcentajeVotos ={
        label:"Porcentaje",
        data: respuesta.porcentaje,
        backgroundColor: pieColors}
        
    new Chart($grafica, {
        type: 'bar', // Tipo de gráfica
        data: {
            labels: partidos,
            datasets: [
                datosVotos
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });

    new Chart($pie, {
        type: 'pie', // Tipo de gráfica
        data: {
            labels: partidos,
            datasets: [{
                data: porcentajeVotos,
                backgroundColor: pieColors  
            }]
        },
        options: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Porcentaje de votos'
              }
            
        }
    });
})();
