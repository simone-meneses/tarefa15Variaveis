window.onload = function() {
    alert("A página acabou de ser carregada!");

    var primeiraVariavel = 2;
    var segundaVariavel = 3;

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Primeira Variável: " + primeiraVariavel + "Segunda Variável: " + segundaVariavel;

    var soma = primeiraVariavel + segundaVariavel;
    var sub = primeiraVariavel - segundaVariavel;
    var mult = primeiraVariavel * segundaVariavel;
    var div = primeiraVariavel / segundaVariavel;

    resultadoElement.innerHTML += "<br><br>Soma: " + soma + "<br>Subtração: " + sub + "<br>Multiplicação: " + mult + "<br>Divisão: " + div;

};