//Define Constants (All upper-case identifiers)

//No constants identified.


//Define Application-wide variables (State)

let result, start;

//Identify Cached DOM Element Variables

const countEl = document.getElementById('counter');
const inputEl = document.getElementById('box');

//Identify Event Listeners
document.getElementById('add').addEventListener('click', addBtn);
document.getElementById('subtract').addEventListener('click', subBtn);

//Functions (init function to initialize/reset; render function for state variables to DOM)

init(); 

function init() {
  start = {
    count: 0,
    input: 1,
    result: 0
  } 
  render();
}

function render() {
  countEl.textContent = start.count;
  console.log(start.count);
  inputEl.defaultValue = start.input;
  console.log(start.input);
}

function addBtn() {
  result = start.count += Number(document.getElementById('box').value);
  countEl.textContent = result;
}

function subBtn() {
  result = start.count -= Number(document.getElementById('box').value);
  countEl.textContent = result;
}

