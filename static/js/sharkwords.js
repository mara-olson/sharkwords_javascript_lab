const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

const WORDS = [
  "strawberry",
  "orange",
  "apple",
  "banana",
  "pineapple",
  "kiwi",
  "peach",
  "pecan",
  "eggplant",
  "durian",
  "peanut",
  "chocolate",
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
// The divs should be appended to the section with id="word-container".
const createDivsForChars = (word) => {
  for (const char of word) {
    const container = document.querySelector("#word-container");

    container.insertAdjacentHTML(
      "beforeend",
      `<div class='letter-box ${char}'></div>`
    );
  }
};

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons"
const generateLetterButtons = () => {
  // Replace this with your code
  for (const letter of ALPHABET) {
    const button = document.querySelector("#letter-buttons");

    button.insertAdjacentHTML("beforeend", `<button>${letter}</button>`);

    // button.setAttribute("name", `button-${letter}`);
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  // Replace this with your code
  buttonEl.disabled = "true";
};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter) => {
  // Replace this with your code

  return document.querySelector(`div.${letter}`) !== null;
};

const handleCorrectGuess = (letter) => {
  // Replace this with your code
  const lettersShown = document.querySelectorAll(`div.${letter}`);
  for (const letterShown of lettersShown) {
    letterShown.innerHTML = letter;
  }
};

//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.

const handleWrongGuess = () => {
  numWrong += 1;
  const sharkPhoto = document.querySelector("img");

  sharkPhoto.setAttribute("src", `/static/images/guess${numWrong}.png`);

  if (numWrong === 5) {
    for (letterButton of document.querySelectorAll("button")) {
      disableLetterButton(letterButton);
    }
    document.querySelector("#play-again").style.display = "block";
  }
};

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = "/sharkwords";
};

// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word

  // const word = WORDS[Math.floor(Math.random() * WORDS.length)];
  const word = "hello";

  // call the function that makes an empty line for each letter in the word
  createDivsForChars(word);

  // call the function that makes a button for each letter in the alphabet
  generateLetterButtons();

  // buttonEl = document.querySelector("#letter-buttons > button:nth-child(7)");

  document.querySelector("#letter-buttons").addEventListener("click", (evt) => {
    const clickedBtn = evt.target;

    disableLetterButton(clickedBtn);

    letterText = clickedBtn.innerHTML;
    if (isLetterInWord(letterText)) {
      handleCorrectGuess(letterText);
    } else {
      handleWrongGuess();
    }
  });

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
