//Creating and assigning DOM elements
const puzzleEl = document.querySelector('#puzzle')
const h2 = document.querySelector('#remainingGuesses')
const statusEl = document.querySelector('#status')
document.querySelector('body').append(puzzleEl, h2, statusEl)



//calling the hangman function
const hangman1 = new Hangman('come here', 4)
const hangman2 = new Hangman('New Jersey', 4)


//rendering the hangman output to the screen
puzzleEl.textContent = hangman1.puzzle
statusEl.textContent = hangman1.statusMessage


//implementing the window event listener
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    h2.textContent = hangman1.makeAGuess(guess)
    puzzleEl.textContent = hangman1.puzzle 
    statusEl.textContent = hangman1.statusMessage
})

const request = new XMLHttpRequest()
request.addEventListener('readystatechange', function (e){
  if(e.target.readyState === 4 && e.target.status === 200){
    const data = JSON.parse(e.target.responseText)
    const countryCode = 'US'
    const countryData = data.find( (country) => country.alpha2Code === countryCode)
    console.log(countryData.name)
    
  }else if(e.target.readyState === 4){
    console.log('An error Occurred')
  }
})

request.open('GET', 'http://restcountries.eu/rest/v2/all?name:Nigeria')
request.send()


// if(this.status !== 'playing'){
//   event.preventDefault()
//  }