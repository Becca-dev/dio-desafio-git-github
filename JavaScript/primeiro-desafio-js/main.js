/*
Faça um programa para calcular o valor de uma viagem

Terá 3 variaveis, sendo elas:
- Preço do combustível;
- Gasto médio de combustivel do carro por KM;
- Distancia em KM da viagem;

*/

const precoCombustivel = 5.79;
const KmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / KmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));