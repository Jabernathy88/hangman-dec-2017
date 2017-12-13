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

const createNewGameBoard = () => {
  $('h2.puzzle-text').text(' ')
  const createOneHiddenBlank = (item, index) => {
    let hiddenLetterValue = item
    let hiddenLetterIndex = index.toString()
    $('h2.puzzle-text').append(` <span class="hidden-blank${hiddenLetterIndex} letter-${item}"> _ </span> `)
  } 
  hiddenWord.letters.forEach(createOneHiddenBlank)
}

createNewGameBoard()

/* GOING BACK TO OLD EXAMPLE CODE 
    const newHomes = [
        {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
        {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
        {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
        {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
    ];

    newHomes.forEach((newHome) => {
        const homeListing = `<tr>
    <td>${newHome.address}</td>
    <td>${newHome.sf}</td>
     <td>${newHome.bedrooms}</td>
    <td>${newHome.baths}</td>
     <td>${newHome.price}</td>
     <td><button class="btn btn-xs btn-danger">Remove</button></td></tr>`

   $('tbody').append(homeListing);
    })
})
*/

//__

/*
const revealCorrectLetters = (correctLetter) => {
  //  $('h2.puzzle-text').text(`_ ${correctLetter} _ _ _`)
} 

let mistakenLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 'u', 'v', 'w', 'x', 'y', 'z']
let correctLetters = hiddenWord.letters

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

let currentCount = 0

const hangmanCounterUp = () => {
  currentCount++
  console.log(currentCount)
}

const checkForCorrectLetters = (guessedLetter) => {
  for (let i = 0; i < correctLetters.length; i++) {
    if (correctLetters[i] === guessedLetter) {
      console.log(`Nice! Your letter ${guessedLetter} is correct!`)
      // revealCorrectLetters(guessedLetter)
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
// __end--

const firstTest = 'g'
const secondTest = 'h'
const thirdTest = 'o'
checkForCorrectLetters(firstTest)
checkForCorrectLetters(secondTest)
checkForCorrectLetters(thirdTest)
*/

// ________PSEUDOCODE:
// create function that checks if all letters are shown correctly
// if all correct, display alert saying youWin
/*__ save Button function for later
$('span').click(function() {
  checkForCorrectLetters('o')
  console.log('You clicked alphabet button.')
})
// change style of button to reflect alreadyGuessedRight
*/
// test for h

console.log('JS running okay.')
})