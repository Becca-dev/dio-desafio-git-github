/*
Faça um programa para calcular o valor de uma viagem.


Terá 5 variaveis, sendo elas:
- Preço da gasolina;
- Preço do etanol;
- O tipo de combustivel que esta no seu carro
- Gasto médio de combustivel do carro por KM;
- Distancia em KM da viagem;

*/

const precoGasolina = 6.10;
const precoEtenal = 5.79
const KmPorLitros = 10;
const distanciaEmKm = 1000;
const tipoCombustivo = "Gasolina"; 

const litrosConsumidos = distanciaEmKm / KmPorLitros;

if (tipoCombustivo === "Etanol"){
    const valorGasto = litrosConsumidos * precoEtenal ;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina; 
    console.log(valorGasto.toFixed(2));

}

