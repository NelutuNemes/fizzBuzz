let resultElementInfo = document.getElementById("result-info");
let resultElement = document.getElementById("result");
let userInput = document.getElementById("user-input");
let startFizzButton = document.getElementById("start-fizz");
let resetButton = document.getElementById("reset");

startFizzButton.addEventListener("click", fizzBuzz);
document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    fizzBuzz();
  }
});

resetButton.addEventListener("click", reset);

resultElement.innerText = "..........";
resultElementInfo.innerText = "..........";

let output = [];
let count = 1;
let maxValue;

function fizzBuzz() {
  if (userInput.value === "") {
    resultElement.classList.add("red-text");
    resultElement.textContent = "Entering a value is mandatory!";
    setTimeout(() => {
      resultElement.textContent = "..........";
      resultElement.classList.remove("red-text");
    }, 2000);
    userInput.classList.add("red-mark-input");
    setTimeout(() => {
      userInput.classList.remove("red-mark-input");
      reset();
    }, 2000);
  } else if (isNaN(userInput.value)) {
    resultElement.classList.add("red-text");
    resultElement.textContent = "Please enter a valid number!";
    setTimeout(() => {
      resultElement.textContent = "..........";
      resultElement.classList.remove("red-text");
    }, 2000);
    userInput.classList.add("red-mark-input");
    setTimeout(() => {
      userInput.classList.remove("red-mark-input");
      reset();
    }, 2000);
  } else if (userInput.value < 1 || userInput.value > 100) {
    resultElement.classList.add("red-text");
    resultElement.textContent = "Please enter a number between 1 and 100!";
    setTimeout(() => {
      resultElement.textContent = "..........";
      resultElement.classList.remove("red-text");
    }, 2000);
    userInput.classList.add("red-mark-input");
    setTimeout(() => {
      userInput.classList.remove("red-mark-input");
      reset();
    }, 2000);
  } else {
    maxValue = userInput.value;
    console.log(`Max value is:  ${maxValue}`);

    // Disable input
    userInput.setAttribute("disabled", true);

    while (count <= maxValue) {
      console.log(`Current item checked is :${count}`);
      if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
      } else if (count % 3 === 0) {
        output.push("Fizz");
      } else if (count % 5 === 0) {
        output.push("Buzz");
      } else {
        output.push(count);
      }
      console.log(
        `${count} / 3 =(${count / 3}), the remainder is :  ${count % 3}`
      );
      console.log(
        `${count} / 5 =(${count / 5}), the remainder is :  ${count % 5}`
      );
      count++;
    }
    console.log(output);
    resultElementInfo.innerText = `User choice : ${userInput.value}`;
    resultElement.innerText = output.join(" " + " , ") + ".";
    userInput.value = "";

    // Enable input after displaying results
    // userInput.removeAttribute("disabled");
  }
}
function reset() {
  userInput.value = "";
  count = 1;
  output = [];
  resultElementInfo.innerText = "..........";
  resultElement.innerText = "..........";

  //Enable input after displaying results
  userInput.removeAttribute("disabled");
}
