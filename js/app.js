$(document).ready (() => {

let hiddenWord = 'ghost'

const createNewGameBoard = () => {
  $('h2.puzzle-text').text('_ _ _ _ _')
}

createNewGameBoard()

let mistakenLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 'u', 'v', 'w', 'x', 'y', 'z']
let correctLetters = ['g', 'h', 'o', 's', 't']

const newAlphabetButtons = `<span>a</span> <span>b</span> <span>c</span> <span>d</span> <span>e</span> 
  <span>f</span> <span>g</span> <span>h</span> <span>i</span> <span>j</span> 
  <span>k</span> <span>l</span> <span>m</span> <span>n</span> <span>o </span>  
  <span>p</span> <span>q</span> <span>r</span> <span>s</span> <span>t</span> 
  <span>u</span> <span>v</span> <span>w</span> <span>x</span> <span>y</span> 
  <span>z</span></h2>`

const createNewAlphabetButtons = () => {
  $('h2.alphabet-text').html(newAlphabetButtons)
  }
createNewAlphabetButtons()

const revealCorrectLetters = (correctLetter) => {
  $('h2.puzzle-text').text(`_ ${correctLetter} _ _ _`)
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
      $('h2.hangman-text').text(`${currentCount}`)
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

//__ starting back here
// PSEUDOCODE:
// create function that checks if all letters are revealed correctly
// if all correct, display alert saying youWin

/* save Button function for later
$('span').click(function() {
  checkForCorrectLetters('o')
  console.log('You clicked alphabet button.')
})
// change style of button to reflect alreadyGuessedRight
*/


console.log('JS running okay.')
})