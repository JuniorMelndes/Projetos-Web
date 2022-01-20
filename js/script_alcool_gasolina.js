function valida_entranda() {
	let preco_alcool = document.getElementById('alcool').value
	let preco_gasolina = document.getElementById('gasolina').value
	if (preco_alcool == "" || preco_gasolina == "") {
		alert("Insira valores válidos")
	}
	else{
		calcula_melhor_opcao(preco_alcool, preco_gasolina)
	}
	
}

function calcula_melhor_opcao(preco_alcool, preco_gasolina){
	preco_alcool = parseInt(preco_alcool);
	preco_gasolina = parseInt(preco_gasolina);
	let resultado = preco_alcool / preco_gasolina
	if (resultado >= 0.7) {
		document.getElementById('resultado').innerHTML = "Gasolina é a melhor opção"
	}
	else{
		document.getElementById('resultado').innerHTML = "Álcool é a melhor opção"
	}
}