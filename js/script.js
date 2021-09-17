// nome do aluno
// ter nota 1/2/3/4
// fazer media das notas com resultado
// se a nota for > 7 aprovado
// se a nota for < 6 esta de rec
// se a nota for < 5 reprovado

// depois testar <input id="clickMe" type="button" value="Calcular Media" onclick="doFunction();" />

var nome = "Gabriel Holanda";
var nota1 = 7;
var nota2 = 8.5;
var nota3 = 7.5;
var nota4 = 6;
var media = (nota1 + nota2 + nota3 + nota4) / 4;

var MediaF = media.toFixed(2)


console.log ("Olá, " + nome)
if (media >= 7 ) {
    alert ("Sua media é = " + MediaF + "\n VOCÊ ESTÁ APROVADO")
    console.log ("Sua media é = " + MediaF)
    console.log ("VOCÊ ESTÁ APROVADO")

}

else if (media > 6 && media < 7 ) {
    alert ("Sua media é = " + MediaF + "\n Você está de Recuperação")
    console.log ("Sua media é = " + MediaF)
    console.log ("Você está de Recuperação")

}

else {
    alert ("Sua media é = " + MediaF + "\n VOCÊ ESTÁ REPROVADO")
    console.log ("Sua media é = " + MediaF)
    console.log ("VOCÊ ESTÁ REPROVADO")
}

    