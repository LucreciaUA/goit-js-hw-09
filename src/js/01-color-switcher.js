const start = document.querySelector('[data-start]');
const stopBTN = document.querySelector('[data-stop]');
const body = document.querySelector('body');
console.log(body)
let bodyColor = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

stopBTN.setAttribute('disabled', '')

function setColor() {
    start.setAttribute('disabled', '')
    stopBTN.removeAttribute('disabled')
     bodyColor = setInterval(() => {
        const color = getRandomHexColor();
        body.style.backgroundColor = `${color}`;
      }, 1000) 
}

function clear() {
    clearInterval(bodyColor);
    start.removeAttribute('disabled')
    stopBTN.setAttribute('disabled', '')
}

start.addEventListener('click', setColor);

stopBTN.addEventListener('click', clear);

