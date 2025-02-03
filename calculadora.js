function calcular(){
    //obter os elementos a extrair o valor digitado(parseFloat)
    const precoEtanol = parseFloat(document.getElementById('preco-etanol').value);
    const precoGasolina= parseFloat(document.getElementById('preco-gasolina').value);

    //Sem parseFloat, pois nã será utilizado cálculo
    const combustivel=document.getElementById('combustivel').value;

    const gastoMedio=parseFloat(document.getElementById('gasto-medio').value);
    const distancia = parseFloat(document.getElementById('distancia').value);
}


function limpar(){

}