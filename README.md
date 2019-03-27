# Word-Guess-Game-Hangman
Hangman!
 

Conditions and actions in the game

1. System generates a random word
2. System takes the player's request
    - From that request, system checks if the player's guess is a valid letter
    - From that request, system checks if that letter matches one of the letters in the random word
        - If the letter matches, it will fill in a blank for the random word generated. Also, since it will have been guessed, it can't be guessed again. Will decrease number of guesses left by 1.
        - If letter doesn't match, it won't fill in a blank for the random word generated. Will decrease number of guesses left by 1.
3. Show how many guesses the player has left
4. Finish when player has either guessed the word or when player has exhausted all of their guesses
    - Show a win screen and a lose screen
5. Allow the player to quit the game if he wants to




PSEUDOCODE

Pick random word

If word has not been guessed {
    Show player current progress
    Get the guess input from the player
}

If player wants to quit the game {
    Quit the game
}

If the guess is in the word { 
    Update the player's progress with the guess
}
Else if the guess is not in the word {
    Update the player's progress with the guess
}



GENERAL

1. Takes input from user
2. Updates the game state
3. Displays current state of game to user