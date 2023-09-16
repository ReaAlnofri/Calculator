'use strict';
let displayValue = '';


function appendToDisplay (number) {
  displayValue += number
  document.getElementById('display').value = displayValue;
};

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function backspace() {
  if (displayValue.length > 0) {
  displayValue =
  displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
  }
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result
    displayValue = result;
  } catch(error) {
    document.getElementById('display').value = 'Error'
  }
}
//22 length

/*let user = prompt('Input it!');
try {
  const result = eval(user)
  console.log(result)
} catch (error) {
  console.error(error)
}*/
