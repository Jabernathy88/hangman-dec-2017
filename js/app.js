$(document).ready (() => {

let hiddenWord = {
  name: 'ghost',
  hint: 'White, spooky. Like the things in Pacman.'
}

let hiddenWordDracula = {
  name: 'dracula',
  hint: 'The lord of all vampires. His grave is in Memphis, TN.'
}

const hiddenLetters = hiddenWord.name.split("")

const createNewGameBoard = () => {
  $('h2.puzzle-text').text(' ')
  let hiddenLetterArray = hiddenLetters
  function createOneHiddenBlank(item, index) {
    let hiddenLetterValue = item
    let hiddenLetterIndex = index.toString()
    $('h2.puzzle-text').append(`<span class="hidden-blank letter-${item}">_</span>`)
  }
  hiddenLetterArray.forEach(createOneHiddenBlank)
}

createNewGameBoard()

const theTwentySixLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

mistakenLetters = ['z', 'z', 'z']

/*
const mistakenLetters = () => {
  let hiddenLetterArray = hiddenLetters
  const negateHiddenWord = (item, index) => {
    let result = []
    let hiddenLetterValue = item
    for (let i = 0; i < theTwentySixLetters.length; i++) {
      if (theTwentySixLetters[i] !== hiddenLetterValue) {
        result.push(hiddenLetterValue)
      }
    return result
    }
  }    
  theTwentySixLetters.forEach(negateHiddenWord)
}

console.log(mistakenLetters())
*/

const createNewAlphabetButtons = () => {
  $('h2.alphabet-text').text(' ')
  
  function createSingleButton(item) {
    let newClassSelector = `<span class="alphabet-button" id="test ${item}">${item}</span>`
    $('h2.alphabet-text').append(newClassSelector)
  }
  theTwentySixLetters.forEach(createSingleButton)
}

createNewAlphabetButtons()

let currentWinCount = 0
let winCountNeeded = hiddenLetters.length

console.log('You need ' + winCountNeeded + ' to win.')
console.log('You have ' + currentWinCount + ' words correct so far.')

const winCounterUp = () => {
  currentWinCount++
  $('h2.win-counter-text').text(`${currentWinCount}`)
  console.log('You need ' + winCountNeeded + ' to win.')
  console.log('You have ' + currentWinCount + ' words correct so far.')
  if (currentWinCount === winCountNeeded) {
    setTimeout(function(){ alert('... so now you win!') }, 250)
  }   
}

let currentHangCount = 0

const hangmanCounterUp = () => {
  currentHangCount++
  console.log(currentHangCount)
  $('h2.hangman-text').text(`${currentHangCount}`)  
}

const revealCorrectLetters = (classSelector) => {
  $(`span.letter-${classSelector}`).text(`${classSelector}`)
} 

const checkForCorrectLetters = (guessedLetter) => {
  for (let i = 0; i < hiddenLetters.length; i++) {
    if (hiddenLetters[i] === guessedLetter) {
      console.log(`Nice! Your letter ${guessedLetter} is correct!`)
      winCounterUp()
      revealCorrectLetters(guessedLetter)
    }
  }
  for (let i = 0; i < mistakenLetters.length; i++) {
    if (mistakenLetters[i] === guessedLetter) {   
      console.log(`Oops. This word contains no letter ${guessedLetter}. :-(`)
      hangmanCounterUp()
    }
  }
}



$('span.alphabet-button').click(function(event) {
  console.log($(event.target).text())
  let guessedLetter = ($(event.target).text())
  checkForCorrectLetters(guessedLetter)
})

console.log('JS running okay.')
})