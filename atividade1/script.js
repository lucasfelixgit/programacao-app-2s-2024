let botao = document.querySelector('.start')

botao.addEventListener('click', sortearNumerosLoteria)

function sortearNumerosLoteria() {
    
    let totalNumeros = Number(prompt("Digite a quantidade de números que deseja sortear (5, 6 ou 15):"))
    
    if (totalNumeros != 5 && totalNumeros != 6 && totalNumeros != 15) {
      alert("Quantidade inválida. Escolha 5, 6 ou 15.")
      return
    }
    
    let numerosSorteados = []
    
    
    while (numerosSorteados.length < totalNumeros) {

      let random = Math.floor(Math.random() * 60) + 1
      
      if (!numerosSorteados.includes(random)) {
        numerosSorteados.push(random)
      }
    }
    
    alert("Números sorteados: " + numerosSorteados.join(", "));
  }
  