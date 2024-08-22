let botao = document.querySelector('.start')
botao.addEventListener('click', calculoIMC)


function calculoIMC(){
  let peso = Number(prompt('Digite seu peso (em kg):'))

  let altura = Number(prompt('Digite sua altura (em metros):'))

  let IMC = peso / (altura * altura)
  escolher(IMC)


  function escolher(IMC){
    if (IMC < 17){ 
      alert(`Seu IMC é ${IMC.toFixed(2)}. Você está muito abaixo do peso.`)
    } 
    else if (IMC >= 17 && IMC <= 18.49){ 
      alert(`Seu IMC é ${IMC.toFixed(2)}. Você está abaixo do peso.`)
    } 
    else if (IMC >= 18.50 && IMC <= 24.99){ 
      alert(`Seu IMC é ${IMC.toFixed(2)}. Você está com o peso normal.`)
    } 
    else if(IMC >= 25 && IMC <= 29.99){ 
      alert(`Seu IMC é ${IMC.toFixed(2)}. Você está acima do peso.`)
    } 
    else { 
      alert(`Seu IMC é ${IMC.toFixed(2)}. Obesidade.`)
    }  
  }
}


