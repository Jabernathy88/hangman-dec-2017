$(document).ready(() => {

  let hiddenWord = {
    name: 'ghost',
    hint: 'White, spooky. Like the things in Pacman.'
  }

  let hiddenWordDracula = {
    name: 'dracula',
  }

  const hiddenLetters = hiddenWord.name.split("")
  console.log(hiddenLetters)

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

  let theTwentySixLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

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
      setTimeout(function () { alert('YOU WIN!') }, 250)
    }
  }

  let currentHangCount = 6
  let losingCount = 0

  const hangmanCounterDown = () => {
    currentHangCount--
    console.log(currentHangCount)
    $('h2.hangman-text').text(`${currentHangCount}`)
    console.log('You have ' + currentHangCount + ' guesses remaining.')
    if (currentHangCount <= losingCount) {
      setTimeout(function () { alert('Sorry. You lose.') }, 250)
    }
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
    if (hiddenLetters.indexOf(guessedLetter) < 0) {
      console.log(`Oops. This word contains no letter ${guessedLetter}.`)
      hangmanCounterDown()
    }
  }

  $('span.alphabet-button').click(function (event) {
    console.log($(event.target).text())
    let guessedLetter = ($(event.target).text())
    checkForCorrectLetters(guessedLetter)
  })

  console.log('JS running okay.')
})