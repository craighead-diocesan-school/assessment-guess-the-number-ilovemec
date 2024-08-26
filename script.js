function guessNumber() {
  alert("Hello, let's play guess the number")
  let playersName = prompt("What is your name?")
  alert("Hi " + playersName + " Im thinking of a number between 1 and 20, inclusive")

  let randomNumber = Math.floor(Math.random() * (20 - 0) + 0)
  alert(randomNumber)

  let playersGuess = ""
  while (randomNumber != playersGuess) {
    playersGuess = prompt("What's your guess?")
    alert(playersGuess)
  }
  if (playersGuess == randomNumber) {
    alert("Correct!!!")
    //   } else if (playersGuess != randomNumber) {
  } else {
    alert("Wrong")
  }
}
