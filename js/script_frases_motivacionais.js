function gera_nova_frase(){
	let frases = ["Eu não pago por ternos. Meus ternos são por conta da casa, ou a casa pega fogo", "A convicção traz emoção, a inimiga da oratória", "Se você fizer a escolha errada, você não verá as 11h44", "Bom gosto é para pessoas que não podem pagar por safiras", "Quando o destino deixa algo valioso em seu colo, você não simplesmente joga no lixo", "Eu sou apenas um excelente exemplo do que um homem trabalhador pode conquistar", "Eu penso para que você não precise pensar", "Não é uma boa ideia olhar para Tommy Shelby da forma errada", "Eu fiz acordos com homens em quem eu confio. Se eu morrer, você vai morrer", "Você não negocia quando está na pior"]
	let aleatorio = Math.random()
	let arredonda = aleatorio.toFixed(1)
	let indice = parseInt(arredonda[2])
	document.getElementById("frase").innerHTML = frases[indice]
}