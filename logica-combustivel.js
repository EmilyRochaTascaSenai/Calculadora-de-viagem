const precoCombustivel = 3.80;
const KmporLitros = 12;
const distancia_km = 100;

const litrosConsumido = distancia_km / KmporLitros;
const custoViagem = litrosConsumido * precoCombustivel;

console.log(`Consumo de Combustivel: ${litrosConsumido.toFixed(2)} litros.`);
console.log(`Custo Viagem: R$ ${custoViagem.toFixed(2)}`);
console.log(`Preço do Combustivel: R$ ${precoCombustivel.toFixed(2)}`);
console.log(`Consumo médio do veículo: ${KmporLitros} km/l`);
console.log(`Distância percorrida: ${distancia_km} km`);








//const  precoCombustivel= 3.80;
//const KmporLitros =12;//
//const distanciakm = 100;

//const litrosConsumido=distancia_km/KmporLitros;
//const custoViagem =litrosConsumido * precoCombustivel;

//console.log('Consumo de Combustivel: ${litrosConsumido.toFixed(2)} litros.');
//console.log('Custo Viagem :R$ ${custoViagem.toFixed(2)}');
//console.log('Preço do Combustivel R${precoCombustivel.toFixed(2)}');
//console.log('consumo medio do veiculo: ${KmporLitros - km/l}');
//console.log('Distancia percorrida ${distanciakm} km');






