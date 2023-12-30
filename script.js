// Declare randomNumberFunction first
const randomNumberFunction = (event) => {
  const selectNumberHigher =
    numbers[Math.floor(Math.random() * numbers.length)];
  const selectNumberLower = numbers[Math.floor(Math.random() * numbers.length)];

  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  const ArrayWinMessage = [
    "Well done! Correct answer! +1 point.",
    "Great job! You nailed it! +1 point.",
    "Fantastic! You're on fire! +1 point.",
    "Excellent work! Right on target! +1 point.",
    "Awesome! You're crushing it! +1 point.",
    "Perfect! You're acing this! +1 point.",
    "Outstanding! Spot-on! +1 point.",
    "Impressive! You're really shining! +1 point.",
    "Bravo! That's how it's done! +1 point.",
    "Superb! Keep it up! +1 point.",
  ];

  const randomWinMessage = () => {
    const D = Math.floor(Math.random() * ArrayWinMessage.length);
    textBox1.innerHTML = ArrayWinMessage[D];
  };

  setTimeout(() => {
    chosenNumberContainer.innerHTML = `Higher or lower than  ${randomNumber}`;

    if (
      (event.target == higherButton && selectNumberHigher >= randomNumber) ||
      (event.target == lowerButton && selectNumberLower <= randomNumber)
    ) {
      score++;
      randomWinMessage();
    } else {
      gameOver();
    }

    scoreBoard.innerHTML = `Score: ${score}`;
  }, 1);
};

// Pull to the DOM
const randomNumberContainer = document.querySelector(".random-number-box");
const chosenNumberContainer = document.querySelector(".master--number__box");
const textBox = document.querySelector(".text-box");
const textBox1 = document.querySelector(".text-box-1");

let scoreBoard = document.querySelector(".score-board");

let higherButton = document.querySelector(".higher");
let lowerButton = document.querySelector(".lower");
const restartButton = document.querySelector(".restart");
const buttonContainer = document.querySelector(".button-container");

higherButton.addEventListener("click", (event) => randomNumberFunction(event));
lowerButton.addEventListener("click", (event) => randomNumberFunction(event));

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let score = 0;
let scoreboard = score.length;
scoreBoard.innerHTML.indexOf(score);

const startingMessage = () => {
  const startingNumber = numbers[Math.floor(Math.random() * numbers.length)];

  randomNumberContainer.innerHTML = `Your starting number is  ${startingNumber} do you want to go Higher or Lower?`;

  buttonContainer.addEventListener("click", (event) => activateHidden());
};

const activateHidden = () => {
  // Apply hidden class to randomNumberContainer when any button is clicked in the container
  randomNumberContainer.classList.add("hidden");
};
// Add an event listener to start the initial message
document.addEventListener("DOMContentLoaded", startingMessage);

//for loop. maybe or switch

// per round counter in corner gets updated each time the for loop is run.

//use hyperplexed number random effect with setTimeOut() (see my code pen)

// random number function *length can reference a array with 10 numbers and 1 bomb and 1 one powerup.

//add event listenr for number click which will genrate a new random number

//conditainal to check answer vs number genrated (maybe switch statemtnet)

// a wrong answer will trigger the end of the function
// get https://rickandmortyapi.com/api
// {
//   "characters": "https://rickandmortyapi.com/api/character",
//   "locations": "https://rickandmortyapi.com/api/location",
//   "episodes": "https://rickandmortyapi.com/api/episode"
// }

//   // Get the image from the DOM

//apened the src= for the image with the gif url

// Create the function
const search = document.querySelector("#search-bar");
const apiKey = "ayRyEk5inI02Czc0bR8apVw4AeDfreFY";

// Get the data from the API (in JSON)
const image = document.querySelector("img");
const changeBackground = async () => {
  try {
    const searchQuery = "loser"; // You can modify this as needed
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${apiKey}`,
      { mode: "cors" }
    );

    const data = await response.json();

    if (data.data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.data.length);
      const imageUrl = data.data[randomIndex].images.original.url;

      // Set the background image style on the gameplay screen
      const gameplayScreen = document.querySelector(".gameplay-screen");
      document.body.style.backgroundImage = `url('${imageUrl}')`;
      document.body.style.backgroundSize = "contain";
      document.body.style.backgroundPosition = "center center";
      document.body.style.backgroundRepeat = "no-repeat";
    }
  } catch (error) {
    console.log("error changing background", error);
  }
};

// Usage in your gameOver function
const gameOver = () => {
  textBox.innerHTML = `Game over! Your final score is ${score} ................ Ctrl+R to restart game`;
  changeBackground();
};

// Add an event listener to the input element

// Run the function initially
