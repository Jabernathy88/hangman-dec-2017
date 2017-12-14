$(document).ready (() => {

let hiddenWord = {
  name: 'ghost',
  letters: ['g', 'h', 'o', 's', 't'],
  hint: 'White, spooky. Like the things in Pacman.'
}

let hiddenWordDracula = {
  name: 'dracula',
  letters: ['d', 'r', 'a', 'c', 'u', 'l', 'a'],
  hint: 'The lord of all vampires. His grave is in Memphis, TN.'
}

let hiddenLetters = hiddenWord.name.split("")

const createNewGameBoard = () => {
  $('h2.puzzle-text').text(' ')
  let hiddenLetterArray = hiddenWord.letters
  function createOneHiddenBlank(item, index) {
    let hiddenLetterValue = item
    let hiddenLetterIndex = index.toString()
    $('h2.puzzle-text').append(` <span class="hidden-blank${hiddenLetterIndex} letter-${item}"> _ </span> `)
  }
  hiddenLetterArray.forEach(createOneHiddenBlank)
}

createNewGameBoard()

let mistakenLetters = // ['a', 'b', 'c', 'd', 'e', 'f', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 'u', 'v', 'w', 'x', 'y', 'z']
['z', 'z', 'z']
let correctLetters = hiddenWord.letters

/* const newAlphabetButtons = `<span>a</span> <span>b</span> <span>c</span> <span>d</span> <span>e</span> 
  <span>f</span> <span>g</span> <span>h</span> <span>i</span> <span>j</span> 
  <span>k</span> <span>l</span> <span>m</span> <span>n</span> <span>o </span>  
  <span>p</span> <span>q</span> <span>r</span> <span>s</span> <span>t</span> 
  <span>u</span> <span>v</span> <span>w</span> <span>x</span> <span>y</span> 
  <span>z</span></h2>` */

const theTwentySixLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const createNewAlphabetButtons = () => {
  $('h2.alphabet-text').text(' ')
  
  function createSingleButton(item) {
    let newClassSelector = `<span class="alphabet-button" id="${item}"> ${item} </span>`
    $('h2.alphabet-text').append(newClassSelector)
  }
  theTwentySixLetters.forEach(createSingleButton)
}

createNewAlphabetButtons()

let currentCount = 0

const hangmanCounterUp = () => {
  currentCount++
  console.log(currentCount)
}

const revealCorrectLetters = (classSelector) => {
  $(`span.letter-${classSelector}`).text(`${classSelector}`)
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

const firstTest = 'g'
const secondTest = 'h'
const thirdTest = 'o'
checkForCorrectLetters(firstTest)
checkForCorrectLetters(secondTest)
checkForCorrectLetters(thirdTest)


$('span.alphabet-button').click(function(event) {
  let guessedLetter = event.target
  // checkForCorrectLetters('o')
  console.log(`You clicked the ${guessedLetter} button.`)
})
// you'll need to create another object. 


console.log('JS running okay.')
})