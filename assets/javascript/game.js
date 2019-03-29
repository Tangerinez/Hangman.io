/***********/
/* GLOBALS
/***********/
const words = ["nasty", "basketball", "immolate", "crib", "competition", "queen", "lawyer", "brash", "flavor", "crack", "top", "drum", "easy", "hat", "bitter",
"filthy", "imbibe", "breezy", "book", "habitual", "compel", "sand", "petite", "boot", "vanish", "earsplitting", "science", "apathetic", "dispensable", "hair",
"rat", "pump", "renounce", "sort", "earn", "dashing", "resist", "harmony", "invincible", "inspire", "utopian", "astonishing", "macho", "banish", "overconfident",
"functional", "gusty", "omit", "leather", "interesting", "converse", "bit", "occur", "breakfast", "key", "aboriginal", "terrific", "vigorous", "mailbox", "flee"];

// Number of guesses left
let guessesLeft = 8;
const guessesLeft_div = document.querySelector(".numberGuesses");

// Array to keep track of current word
const wordArray = [];

/***********/
/* GAME LOGIC
/***********/
// Set initial number of guesses
guessesLeft_div.innerHTML = guessesLeft

// Returns a string as an array
const randomWordArray = words[Math.floor(Math.random() * words.length) + 1].split('');

// Selectors
const startButton = document.querySelector('.start')
const activeWord = document.querySelector('.active-word')
const keyboard = document.querySelector('.keyboard')

startButton.addEventListener('click', () => {
  for (let i = 0; i < randomWordArray.length; i++) {
    wordArray.push('_');
  };
  startButton.classList.add('hide')
  activeWord.innerText = wordArray.join(' ');
  displayLetters();
})

const displayLetters = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const html = []

  alphabet.forEach(letter => {
    html.push(`<button data-letter=${letter}>${letter}</button>`)
  })

  keyboard.innerHTML = html.join(' ')
}

keyboard.addEventListener('click', (event) => {
  // Check if we clicked a button and a button that is a letter
  if (event.target.nodeName === 'BUTTON' && event.target.dataset.hasOwnProperty('letter')) {
    event.target.classList.add('hide')
    const clickedLetter = event.target.dataset.letter

    wordArray.forEach((letter, index) => {
      if (letter === clickedLetter) {
        wordArray[index] = clickedLetter
        activeWord.innerText = wordArray.join(' ')

        if (guessesLeft <= 8) {
          guessesLeft++;    //Adds a +1 first before -1 after clicking the right letter
        }

        guessWrong() // Right now this decreases EVERY GUESS BY 1 -> Need to change for only incorrect guesses
      }
    })
  }
})

const guessWrong = () => {
  guessesLeft--;
  guessesLeft_div.textContent = guessesLeft;
  if (guessesLeft === 0) {
    alert('You have lost. Please refresh the browser to try again or the game will break.')
  }
}
