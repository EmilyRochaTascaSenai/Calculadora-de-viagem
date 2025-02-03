function calcular(){
    //obter os elementos a extrair o valor digitado(parseFloat)
    const precoEtanol = parseFloat(document.getElementById('preco-etanol').value);
    console.log(precoEtanol)
    const precoGasolina= parseFloat(document.getElementById('preco-gasolina').value);
    console.log(precoGasolina)

    //Sem parseFloat, pois nã será utilizado cálculo
    const combustivel=document.getElementById('combustivel').value;
    console.log(combustivel)

    const gastoMedio=parseFloat(document.getElementById('gasto-medio').value);
    console.log(gastoMedio)
    const distancia = parseFloat(document.getElementById('distancia').value);
    console.log(distancia)
}


function limpar(){

}