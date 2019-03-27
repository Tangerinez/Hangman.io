/* LOTS of random words */
var words = ["nasty", "basketball", "immolate", "crib", "competition", "queen", "lawyer", "brash", "flavor", "crack", "top", "drum", "easy", "hat", "bitter", 
"filthy", "imbibe", "breezy", "book", "habitual", "compel", "sand", "petite", "boot", "vanish", "earsplitting", "science", "apathetic", "dispensable", "hair",
"rat", "pump", "renounce", "sort", "earn", "dashing", "resist", "harmony", "invincible", "inspire", "utopian", "astonishing", "macho", "banish", "overconfident",
"functional", "gusty", "omit", "leather", "interesting", "converse", "bit", "occur", "breakfast", "key", "aboriginal", "terrific", "vigorous", "mailbox", "flee"];

/* Choose random word */
var randomWord = words[Math.floor(Math.random() * words.length)];


let randomWord_div = document.getElementById("randomWord");

/* Creating an array for the answers */





var answers = [];
for (var i = 0; i< randomWord.length; i++) {
    answers[i] = "_";
}

var remainingLetters = randomWord.length; /* This value gets -1 every time player guesses a correct letter */

while (remainingLetters > 0) {      /* Will keep looping until this condition is NOT met */
    
}

