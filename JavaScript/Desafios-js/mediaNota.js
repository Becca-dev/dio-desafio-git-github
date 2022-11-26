/*
    Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcular e imprpir sua média, e sua classificação conforme a tabela abaixa.

    media = (nota 1 + nota 2 + nota 3 ) / 3;

    classificação:
    - Média menor que 5, reprovado;
    - Média entre 5 e 7, recuperaçãoç
    - Média acima DE 7, passou de semestre 

*/

const nota1 = 5;
const nota2 = 3;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;

console.log(media);

if (media < 5){
    console.log("Reprovado");
} else if ( media >= 5 && media <=7 ) {
    console.log("Recuperação");
} else {
    console.log("Parabens, você Passou.")
}
    