const words = ["nasty", "basketball", "immolate", "crib", "competition", "queen", "lawyer", "brash", "flavor", "crack", "top", "drum", "easy", "hat", "bitter", 
"filthy", "imbibe", "breezy", "book", "habitual", "compel", "sand", "petite", "boot", "vanish", "earsplitting", "science", "apathetic", "dispensable", "hair",
"rat", "pump", "renounce", "sort", "earn", "dashing", "resist", "harmony", "invincible", "inspire", "utopian", "astonishing", "macho", "banish", "overconfident",
"functional", "gusty", "omit", "leather", "interesting", "converse", "bit", "occur", "breakfast", "key", "aboriginal", "terrific", "vigorous", "mailbox", "flee",
"wacky", "squealing", "implant", "discover", "breakable", "uttermost", "hideous", "jittery", "disgusted", "vacuous", "attraction", "husky", "puzzling", "workable"];

var visability = true;

//Audio Win and Lose
const audioWin = document.createElement("audio");
audioWin.setAttribute("src", "assets/images/WinningSong.mp3");

const audioLose = document.createElement("audio");
audioLose.setAttribute("src", "assets/images/LosingSong.mp3");

//Function for winning and losing song 

function winSong() {
    let winningSong = document.querySelector("audioYes");
    audioWin.play();
}

function loseSong() {
    let losingSong = document.querySelector("audioNo");
    audioLose.play();
}

// Number of guesses left
let guessesLeft = 8;
let guessesLeft_div = document.querySelector(".numberGuesses");

// Returns a string
const randomWord = words[Math.floor(Math.random() * words.length) + 1];
console.log(randomWord);

//Each letter of the random word as an index of an array
const wordChar = randomWord.split('');


// Returns "_" for every letter in the word
function blanks() {
    for (var i = 0; i< randomWord.length; i++) {
    answers[i] = "_";
    };
};

let wordArray = [];

// Adds "_" for each letter into an empty array, then joins that array together
const button = document.querySelector('.start')
function start(){    
    //button.addEventListener('click', function() {
    document.querySelector(".start").classList.add("start1");      //create non-functional button
    document.querySelector(".start").classList.remove("start");      //create functional button
    for (let i = 0; i < randomWord.length; i++) {
        wordArray.push('_');
    };

    button.innerText = wordArray.join(' ');
    displayLetters();
};
//};


function displayLetters() {
const keyboard = document.querySelector('.letters')
keyboard.onclick = (event) => {      //Every time you click a letter...
    var grabVisablity = event.target.getAttribute("Visablevalue");
    console.log(event.target.getAttribute("Visablevalue"));
    if(grabVisablity == 1){
        event.target.style.visibility = 'hidden';   //That element's opacity becomes 0
        event.target.setAttribute("Visablevalue","0");
        console.log("event: ", event.target.style.visibility);
    wordChar.forEach((letter, index) => {         
        if (letter === event.target.innerHTML.toLowerCase()) {    //If letter equals the letter in that index of the array
            wordArray[index] = letter;          //wordArray at the index of matched letter becomes that letter
            button.innerText = wordArray.join(' ');          //"_" gets replaced by the new matching letter
            if (button.innerText === wordChar.join(" ")) {
                winSong();
                setTimeout("alert('Congratulations, you have won! Please refresh the browser to play again or the game will break!')", 300);
                setTimeout(function(){ location.reload(); }, 2000);
            };
            if (guessesLeft <= 8) {
                guessesLeft++;    //Adds a +1 first before -1 after clicking the right letter
            };
        };
    });
    guessWrong();   // Right now this decreases EVERY GUESS BY 1 -> Need to change for only incorrect guesses
    }
};
};

function guessWrong() {     //If user guesses letter incorrectly
    guessesLeft--;
    guessesLeft_div.textContent = guessesLeft;
    if (guessesLeft === 0) {
        loseSong();
        setTimeout("alert('You have lost. Please refresh the browser to try again or the game will break.')", 300);
        setTimeout(function(){ location.reload(); }, 2000);
    };
};








