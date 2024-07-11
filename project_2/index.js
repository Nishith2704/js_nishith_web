let randomNumber = parseInt(Math.random()*100+1)

const submit =  document.querySelector('#subt');
const userInput =  document.querySelector('#guessField') //here we all take all the selector
const guessSlot =  document.querySelector('.guesses') 
const remaining =  document.querySelector('.lastResult')
const lowOrHi =document.querySelector('.lowOrHi')
const startOver =document.querySelector('.resultParas')

const p =document.createElement('p')

//statergy

let  prevGuess = []
let numGuess = 1

let playGame  = true // this is imp for the game dev
// acutally a value or not,valid num for a, b, c less than 1 game for 100 only
if(playGame = true) {
  submit.addEventListener('click',function(e){
    e.preventDefault() //for avoid goes to server
    let guess=parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}
function validateGuess(guess){ // imp in login
    if (isNaN(guess)){
      alert(`please enter a valid number`)
    }
    else if(guess<1){
      alert(`enter a number greater than 1`)
    }
    else if(guess>100){
      alert(`enter a number lesser than 100`)
    }
    else{
      prevGuess.push(guess)// for element for push
      // warning if the user is at 10 attempt we need to 
      if(numGuess === 11)
        {
            displayGuess(guess)
            displayMessage(`Game-Over Random_Number was ${randomNumber}`)
            endGame()
        }
        else{
          displayGuess(guess)
          checkGuess(guess)
        }
    }
    
}


// for message print you guess value is low or high , it is similar to validate guess, random number is equal !
function checkGuess(guess){
  if (guess === randomNumber)
    {
        displayMessage(`you guessed it right`)
        endGame()
    }
  else if ( guess <randomNumber)
    {
       displayMessage(` the number is tooo low`)
    }
  else if (guess >randomNumber)
    {
      displayMessage(`the number is too high`)
    }

}
//low or high message , paragaph target that we are created
function displayMessage(message){
  lowOrHi.innerHTML =`<h2>${message}</h2>`
  
}
// it interact with dom , user i/p value empty , innerhtml guess add  and number is to less in guesses remaining, cleaning  array update

function displayGuess(guess){// it is like a cleanup method
  userInput.value=' '
  guessSlot.innerHTML += `${guess}   `
  numGuess++;
  remaining.innerHTML =`${11-numGuess}`
}

function endGame(){
 userInput.value = ''
 userInput.setAttribute('disabled','')
 p.classList.add('button')
 p.innerHTML=`<h2 id="newGame" >Start new Game</h2>`
 startOver.appendChild(p)
 playGame=false
 newGame()
}

function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
  randomNumber = parseInt(Math.random()*100+1)
  prevGuess=[]
  numGuess=1
  guessSlot.innerHTML=''
  remaining.innerHTML =`${11-numGuess}`
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)
  playGame=true;// in last finally

})
}