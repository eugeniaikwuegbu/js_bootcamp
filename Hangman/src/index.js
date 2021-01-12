import Hangman from './hangman-functions'
import getPuzzle from './request'


//Creating and assigning DOM elements
const puzzleEl = document.querySelector('#puzzle')
const h2 = document.querySelector('#remainingGuesses')
const statusEl = document.querySelector('#status')
const resetButton = document.querySelector('#reset')
// document.querySelector('body').append(puzzleEl, h2, statusEl,resetButton, span)



//assigning the hangman function
let hangman1


// implementing the window event listener
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    h2.textContent = hangman1.makeAGuess(guess)
    render()
})


//render puzzle to the screen
const render = () =>{
  puzzleEl.innerHTML = ''
  hangman1.puzzle.split('').forEach((character)=>{
    const span = document.createElement('span')
    span.textContent = character
    puzzleEl.appendChild(span)
  })
  statusEl.textContent = hangman1.statusMessage
}

//start a game
const startGame = async() =>{
  const puzzle = await getPuzzle('2')
  hangman1 = new Hangman(puzzle, 5)
  render()
}

resetButton.addEventListener('click', startGame)

startGame()


export{hangman1}


// getPuzzle('2').then((data)=>{
//   console.log(data)
// }).catch((error)=>{
//   console.log(error)
// })