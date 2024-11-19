var ctx = document.getElementById('grafico-resultados');
    
var myChart = new Chart(ctx,{ 
    type: 'bar',
    data: data,
    options: {...}
});