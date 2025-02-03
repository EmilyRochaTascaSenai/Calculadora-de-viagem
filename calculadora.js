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


    let valorTotal;

    if(combustivel ==='Etanol'){
        valorTotal=distancia *precoEtanol/gastoMedio
    }
    else{
        valorTotal=distancia*precoGasolina/gastoMedio
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML =`
            <h2>Resumo da Viagem</h2>
                <ul>
                   
                    <li>Combustivel:${combustivel}  </li>
                    <li>Gasto Médio ${gastoMedio.toFixed(2)} KM/L </li>       
                    <li>Distancia ${distancia} KM/L </li>
                    <li>Valor Total ${valorTotal} </li>
                </ul> 
    `
    
}


function limpar(){
    document.getElementById('preco-etanol').value ='';
    document.getElementById('preco-gasolina').value ='';
    document.getElementById('combustivel').value = '';
    document.getElementById('gasto-medio').value = '';
    document.getElementById('distancia').value = '';
    document.getElementById('resultado').innerHTML = '';

}