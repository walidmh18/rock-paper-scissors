const game = document.querySelector('.game')
const result = document.querySelector('.result')
const youpicked = document.querySelector('.youPicked')
const theHousePicked = document.querySelector('.theHousePicked')
const resultStats = document.getElementById('resultStat')
const scorerev = document.getElementById('score')
const resultShow = document.querySelector('.resultShow')

let score = {
    wins: 0,
    winner,
    played :0,
}

let random = {
    pick:'',
}
function choose(id) {
    game.style.display = 'none'

    result.style.display = 'flex'

    
    youpicked.appendChild(makeButton(id))
    
    // theHousePicked.removeChild(theHousePicked.lastChild)
    setTimeout(() => {
        theHousePicked.appendChild(generateRandomBtn())
        winner(id, random.pick)
        scorerev.innerText = score.wins
        resultShow.style.visibility = 'visible'
    }, 1000);

    score.played ++
}



function makeButton(id) {
    let button = document.createElement('div')
    button.innerHTML = `<img src="images/icon-${id}.svg" >`
    button.id = id
    button.classList.add(id, 'buttons')
    return button
}

let btns = ['rock', 'paper' , 'scissors']  
function generateRandomBtn() {
  let randomNum = Math.floor(Math.random() * btns.length)

  
  let btn = btns[randomNum]
    console.log(Math.random());
  let button2 = document.createElement('div')
  button2.innerHTML = `<img src="images/icon-${btn}.svg" >`
  button2.id = btn
  button2.classList.add(btn, 'buttons', 'houseBtn')
  random.pick = btn
  return button2
}
 let backCircles = document.createElement('div')
        backCircles.classList.add('before')
        backCircles.innerHTML = `
        <div></div>
        <div></div>
        <div></div>
      `
function winner(you , house) {
    if (you == 'scissors' && house == 'paper' || you == 'paper' && house == 'rock' || you == 'rock' && house == 'scissors') {
        score.winner = 'you'
        score.wins ++
       
        youpicked.appendChild(backCircles)
        resultStat('YOU WIN')
    } else if (you == 'paper' && house == 'scissors' || you == 'rock' && house == 'paper' || you == 'scissors' && house == 'rock') {
        score.winner = 'house'
        score.wins --
        theHousePicked.appendChild(backCircles)
        resultStat('YOU LOSE')
    } else if(you == house){
        score.winner = 'tie'
        resultStat('TIE')
    }
    
}

let thehousepickedPlaceHolder = document.createElement('div')
thehousepickedPlaceHolder.classList.add('button')
function reset() {
    game.style.display = 'flex'

    result.style.display = 'none'

    score.winner = ''

    let before = document.querySelector('.before')
    resultShow.style.visibility = 'hidden'
    if (before != '') {
        theHousePicked.removeChild(theHousePicked.lastChild)
        theHousePicked.removeChild(theHousePicked.lastChild)
        before.remove()
    } else{
        theHousePicked.removeChild(theHousePicked.lastChild)
    }
    theHousePicked.appendChild(thehousepickedPlaceHolder)


}
function resultStat(text){
    resultStats.innerText = text
}


function openRules() {
    let rules = document.getElementById('rulesContainer')
    rules.style.display = 'block'
}

function closeRules() {
    let rules = document.getElementById('rulesContainer')
    rules.style.display = 'none'
}