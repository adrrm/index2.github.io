function sumar(valor1 , valor2){
    var resultado= valor1 + valor2;
    return resultado;
}
    document.getElementById('resultado1').innerHTML="Resultado de la suma es:"+sumar(50,20);

function restar(valor3 , valor4){
    var resultado= valor3 - valor4;
    return resultado;
}
    document.getElementById('resultado2').innerHTML="Resultado de la resta es:"+restar(10,5);


function multiplicar(valor5 , valor6){
    var resultado= valor5 * valor6;
    return resultado;
}
    document.getElementById('resultado3').innerHTML="Resultado de la multiplicacion es:"+multiplicar(60,4);

function dividir(valor7 , valor8){
    var resultado= valor8/valor7;
    return resultado;
}
    document.getElementById('resultado4').innerHTML="Resultado de la division es:"+dividir(80,40);
