console.log("Start script link test !");
let messageElement = document.getElementById("message");
let resultElement = document.getElementById("result");
let userChoice = document.getElementById("user-choice");
let startButton = document.getElementById("start-button");
let resetButton = document.getElementById("reset-button");

messageElement.innerText = "..........";
resultElement.innerText = "............";

startButton.addEventListener("click", fizzBuzz);
resetButton.addEventListener( "click", resetApp );

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    fizzBuzz();
  }
});


let count = 1;
let output = [];
let maxValue;
let iteration = 0;

function fizzBuzz() {
  maxValue = parseFloat(userChoice.value);
  console.log(`userChoice value is: ${userChoice.value}`);
  console.log(`userChoice length is: ${userChoice.value.length}`);
  console.log(`User choice is : ${maxValue}`);
  console.log(`Current item checked is : ${count}`);
  console.log(typeof maxValue);

  const specialCharsRegex = /[&$+,;=?@#|'<>.^*()%]/;
  const lettersRegex = /[a-zA-Z]/;

  if (userChoice.value.length < 1) {
    console.log(
      "Entering a value is mandatory! (maxValue is empty)" + maxValue
    );
    messageElement.textContent = "Entering a value is mandatory!";
    setTimeout(() => {
      messageElement.textContent = "..........";
    }, 2000);
    setTimeout(() => {
      resetApp();
    }, 2000);
  } else if (specialCharsRegex.test(userChoice.value)) {
    messageElement.textContent = "Special characters are not accepted! ";
    setTimeout(() => {
      messageElement.textContent = "..........";
    }, 2000);
    setTimeout(() => {
      resetApp();
    }, 2000);
  } else if (maxValue < 0) {
    messageElement.textContent = "Please enter a pozitiv number!";
    setTimeout(() => {
      messageElement.textContent = "..........";
    }, 2000);
    setTimeout(() => {
      resetApp();
    }, 2000);
  } else if (lettersRegex.test(userChoice.value)) {
    messageElement.textContent = "Letters are not accepted!";
    setTimeout(() => {
      messageElement.textContent = "..........";
    }, 2000);
    setTimeout(() => {
      resetApp();
    }, 2000);
  } else {
    while (count <= maxValue && count <= 100) {
      if (count % 3 === 0 && count % 5 === 0) {
        output.push("Fizz-Buzz");
      } else if (count % 3 === 0) {
        output.push("Fizz");
      } else if (count % 5 === 0) {
        output.push("Buzz");
      } else {
        output.push(count);
      }
      console.log(`current iteration is : ${iteration}`);
      count++;
      iteration++;
    }
    if (maxValue >= 100) {
      console.log(
        `Maximum tested value: 100, reached! Checks have been stopped!`
      );
    }
    console.log(`Current output value is 
    : ${output}`);
    messageElement.innerText = `User choice is :  ${userChoice.value}`;
    // resultElement.innerText = output.join( " " + "," ) + ".";
    resultElement.innerText = "";

    output.forEach((element) => {
      const span = document.createElement("span");
      span.textContent = element + ", ";

      if (element === "Fizz") {
        span.classList.add("yellow-mark");
      } else if (element === "Buzz") {
        span.classList.add("orange-mark");
      } else if (element === "Fizz-Buzz") {
        span.classList.add("red-mark");
      } else {
        span.classList.add("green-mark");
      }

      resultElement.appendChild(span);
    });
  }
}

function resetApp() {
  userChoice.value = "";
  count = 1;
  output = [];
  messageElement.innerText = "..........";
  resultElement.innerText = "..........";
  console.log(`The app has been reset !`);
}

