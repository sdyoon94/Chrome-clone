function clear(text) {
  text.innerText = "";
}

function handleButtonClick(e) {
  e.preventDefault();
  const max = document.querySelector("#max").valueAsNumber;
  const guess = document.querySelector("#guess").valueAsNumber;
  const machine = Math.floor(Math.random() * (max + 1));
  const number = document.querySelector("#numbers");
  const result = document.querySelector("#result");

  if (max < 0 || guess < 0 || guess > max) {
    alert("You input wrong number!");
    clear(number);
    clear(result);
    return;
  }
  number.innerText = "You choose: " + guess + ", the machine choose: " + machine + ".";
  result.style.fontWeight = "800";
  if (guess === machine) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}

document.querySelector("button").addEventListener("click", handleButtonClick);
