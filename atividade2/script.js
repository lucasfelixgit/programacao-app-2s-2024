let botao = document.querySelector('.start')
botao.addEventListener('click', converterTemperaturas)

function converterTemperaturas() {
  let op1 = Number(prompt(`Qual escala de temperatura você irá informar?
1 - Celsius
2 - Fahrenheit
3 - Kelvin`))

  if (op1 == 1) {
    let temperatura1 = Number(prompt('Digite a temperatura em Celsius:'))
    celsius(temperatura1)
  }
  else if (op1 == 2) {
    let temperatura1 = Number(prompt('Digite a temperatura em Fahrenheit:'))
    fahrenheit(temperatura1)
  }
  else if (op1 == 3){
    let temperatura1 = Number(prompt('Digite a temperatura em Kelvin:'))
    kelvin(temperatura1)
  }

  function celsius(temperatura1){
    let op2 = Number(prompt(`Para qual escala quer converter?
    1 - Fahrenheit
    2 - Kelvin`))

    if(op2 == 1){
      let celsiustoFahrenheit = (temperatura1 * 9/5) + 32
      alert(`A temperatura em Fahrenheit é: ${celsiustoFahrenheit.toFixed(2)}`)
    }
    else if(op2 == 2){
      let celsiustoKelvin = temperatura1 + 273.15
      alert(`A temperatura em Kelvin é ${celsiustoKelvin.toFixed(2)}`)
    }
  }

  function fahrenheit(temperatura1){
    let op2 = Number(prompt(`Para qual escala quer converter?
    1 - Celsius
    2 - Kelvin`))

    if(op2 == 1){
      let fahrenheittoCelsius = (temperatura1 - 32) * 5/9
      alert(`A temperatura em Celsius é: ${fahrenheittoCelsius.toFixed(2)}`)
    }
    else if(op2 == 2){
      let fahrenheittoKelvin = (temperatura1 - 32) * 5/9 + 273.15
      alert(`A temperatura em Kelvin é ${fahrenheittoKelvin.toFixed(2)}`)
    }
  }

  function kelvin(temperatura1){
    let op2 = Number(prompt(`Para qual escala quer converter?
    1 - Celsius
    2 - Fahrenheit`))

    if(op2 == 1){
      let kelvintoCelsius = temperatura1 - 273.15
      alert(`A temperatura em Celsius é: ${kelvintoCelsius.toFixed(2)}`)
    }
    else if(op2 == 2){
      let kelvintoFahrenheit = (temperatura1 - 273.15) * 9/5 + 32
      alert(`A temperatura em Kelvin é ${kelvintoFahrenheit.toFixed(2)}`)
    }
  }
}

