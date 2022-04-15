var numero = Math.floor(Math.random() * 11); // número aleatório de 0 a 10
var chances = 3; // número de chances inicial
var numChances = document.getElementById("numero-chances"); // pega o id numero-chances para renderizar as chances no html
var resultado = document.getElementById("mensagem"); // pega o id mensagem para renderizar a mensagem no html
var btnChutar = document.getElementById("btnChutar"); // pega o id btnChutar do button para desativar caso não tenha mais chances

btnChutar.disabled = false; // inicialmente o botão Chutar aparece ativo (disabled = false)

function adivinhaNum() {
  var chute = document.getElementById("inputChute").value; // o valor digitado no input de id inputChute
  if (chute == "") { // se o valor digitado no input de id inputChute for vazio
    console.log("campo vazio"); // mensagem no console: campo vazio
    alert("Você precisa digitar um número primeiro!"); // alert
    return false;
  }
  if (chute == numero) { // se o valor digitado no input de id Chute for IGUAL ao número aleatório gerado na variável numero
    console.log("Acertou!"); // mensagem no console: acertou
    resultado.innerHTML = `<p class="text-focus-in">VOCÊ ACERTOU! EU PENSEI NO NÚMERO ${numero}!</p>`; // exibe no html o resultado na div de id mensagem
  }
  while (chances > 0) { // enquanto a váriável chances tiver valor maior que 0
  if (chute !== numero) { // se o valor digitado no input de id inputChute for DIFERENTE do número aleatório gerado na variável numero
	  console.log(`Você errou, não é o número ${chute}!`); // mensagem no console: errou
    resultado.innerHTML = `<p class="text-blur-out">VOCÊ ERROU! NÃO É O NÚMERO ${chute}! TENTE NOVAMENTE!</p>`; // exibe no html o resultado na div de id mensagem
    chances--; // subtrai 1 do valor das chances (inicialmente 3, então, a primeira vez que rodar, vai para 2, depois para 1...)
    numChances.innerHTML = chances; // renderiza as chances no html
    break; // parada
   }
  }

  if (chances == 0) { // se o valor da variável chances for igual a 0
    console.log(`Acabaram as suas chances! Eu pensei no número ${numero}!`);  // mensagem no console: acabaram as chances
    btnChutar.disabled = true; // botão Chutar aparece inativo (disabled = true) para não conseguir clicar mais
    resultado.innerHTML = `<p class="text-focus-in">ACABARAM SUAS CHANCES! EU PENSEI NO NÚMERO ${numero}!</p>`; // exibe no html o resultado na div de id mensagem
  }
} // fim function adivinhaNum()