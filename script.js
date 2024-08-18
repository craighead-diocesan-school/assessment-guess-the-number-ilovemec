function guessNumber() {
  alert("Hello, let's play guess the number")
  let playersName = prompt("What is your name?")
  alert("Hi " + playersName + " Im thinking of a number between 1 and 20, inclusive")

  playersGuess = ""

  while (playersGuess == "") {
    let playersGuess = prompt("What's your guess?")
  }
  if (playersGuess == randomNumber) {
    alert("Correct!!!")
  } else {
    alert("Wrong")
    playersGuess = ""
  }
  let randomNumber = Math.floor(Math.random() * (20 - 0) + 0)
}
