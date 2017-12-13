$(document).ready (() => {



// __Story: Begin Game__
let hiddenWord = 'ghost'

const createNewGameBoard = () => {
  $('div.puzzle-box'>'h1').text('_ _ _ _ _')
}

createNewGameBoard()

let mistakenLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 'u', 'v', 'w', 'x', 'y', 'z']
let correctLetters = ['g', 'h', 'o', 's', 't']

// __Story: Click Correct Letter__
const newAlphabetButtons = `<h3 class="alphabetButtons"><span>a</span> <span>b</span> <span>c</span> <span>d</span> <span>e</span> 
  <span>f</span> <span>g</span> <span>h</span> <span>i</span> <span>j</span> 
  <span>k</span> <span>l</span> <span>m</span> <span>n</span> <span>o </span>  
  <span>p</span> <span>q</span> <span>r</span> <span>s</span> <span>t</span> 
  <span>u</span> <span>v</span> <span>w</span> <span>x</span> <span>y</span> 
  <span>z</span></div>`

const createNewAlphabetButtons = () => {
  $('div.alphabet-box'>'h3').html(newAlphabetButtons)
  }
createNewAlphabetButtons()

const revealCorrectLetters = (correctLetter) => {
  $('div.puzzle-box'>'h1').text(`_ ${correctLetter} _ _ _`)
}

let currentCount = 0

const hangmanCounterUp = () => {
  currentCount++
  console.log(currentCount)
}

const checkForCorrectLetters = (guessedLetter) => {
  for (let i = 0; i < correctLetters.length; i++) {
    if (correctLetters[i] === guessedLetter) {
      console.log(`Nice! Your letter ${guessedLetter} is correct!`)
      revealCorrectLetters(guessedLetter)
    }
  }
  for (let i = 0; i < mistakenLetters.length; i++) {
    if (mistakenLetters[i] === guessedLetter) {   
      console.log(`Oops. This word contains no letter ${guessedLetter}. :-(`)
      hangmanCounterUp()
      $('div.hangman-counter'>'h3').text(`${currentCount}`)
    }
  }
}

// test for h
const firstTest = 'z'
const secondTest = 'h'
const thirdTest = 'x'
checkForCorrectLetters(firstTest)
checkForCorrectLetters(secondTest)
checkForCorrectLetters(thirdTest)

/* save Button function for later
$('span').click(function() {
  checkForCorrectLetters('o')
  console.log('You clicked alphabet button.')
})
// change style of button to reflect alreadyGuessedRight
*/


console.log('JS running okay.')
})