let display = document.getElementById('display');

function addToDisplay(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function operation(operator) {
  display.innerText += operator;
}

function calculate() {
  let expression = display.innerText;
  let result = eval(expression);
  display.innerText = result;
}