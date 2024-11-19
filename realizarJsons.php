<?php

$partidosPoliticos= ['FA','PN','PC','CA','PI','PERI','AP','IS','PCN','PCA','AR'];
$votos= [1071826,655426,392592,60549,41618,9281,10102,65796,3183,11865,1909];
$porcentaje=[43.8,26.8,16.1,2.5,1.7,0.4,0.4,2.7,0.1,0.5,0.1];

$respuestaVotos= [
    "partidos"=> $partidosPoliticos,
    "votos"=>$votos,
    "porcentaje"=>$porcentaje
];

$respuesta= json_encode($respuestaVotos);

echo $respuesta;
?>