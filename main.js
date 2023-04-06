
function aoClicar () {
let randomNumber = Math.round(Math.random() * 7)

switch (randomNumber) {
  case 0:
    document.querySelector(".pageOne").classList.add("hide")
    document.querySelector(".pageTwo").classList.remove("hide")
    document.querySelector(".pageTwo p").innerText = `“Até que ser forte seja a sua única opção, você não saberá o quão forte você é”.`
    console.log(randomNumber)
  break
  case 1:
    document.querySelector(".pageOne").classList.add("hide")
    document.querySelector(".pageTwo").classList.remove("hide")
    document.querySelector(".pageTwo p").innerText = `“É em meio a dificuldade que se encontra a oportunidade”.`
    console.log(randomNumber)
  break
  case 2:
    document.querySelector(".pageOne").classList.add("hide")
    document.querySelector(".pageTwo").classList.remove("hide")
    document.querySelector(".pageTwo p").innerText = `“A vida é um eterno recomeço”.`
    console.log(randomNumber)
  break
  case 3:
    document.querySelector(".pageOne").classList.add("hide")
    document.querySelector(".pageTwo").classList.remove("hide")
    document.querySelector(".pageTwo p").innerText = `“O fruto do que você escolher hoje, é o que você viverá amanhã”.`
    console.log(randomNumber)
  break
  case 4:
    document.querySelector(".pageOne").classList.add("hide")
    document.querySelector(".pageTwo").classList.remove("hide")
    document.querySelector(".pageTwo p").innerText = `“Você nunca irá fazer nada, se ficar esperando pelas situações perfeitas”.`
    console.log(randomNumber)
  break
  case 5:
    document.querySelector(".pageOne").classList.add("hide")
    document.querySelector(".pageTwo").classList.remove("hide")
    document.querySelector(".pageTwo p").innerText = `“A diferença entre os dias ruins e bons, é que um ensina e o outro marca”.`
    console.log(randomNumber)
  break
  case 6:
    document.querySelector(".pageOne").classList.add("hide")
    document.querySelector(".pageTwo").classList.remove("hide")
    document.querySelector(".pageTwo p").innerText = `“Você só será vencedor se lutar hoje e sempre, que os fracassos da vida não sejam motivo para tristeza”.`
    console.log(randomNumber)
  break
  case 7:
    document.querySelector(".pageOne").classList.add("hide")
    document.querySelector(".pageTwo").classList.remove("hide")
    document.querySelector(".pageTwo p").innerText = `“Não há outra forma de crescer, senão superar os desafios e os medos. Deixe-os vir”.`
    console.log(randomNumber)
  break
}
}

function voltaClique () {
  document.querySelector(".pageOne").classList.remove("hide")
  document.querySelector(".pageTwo").classList.add("hide") 
}

