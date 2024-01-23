function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.querySelector('input')
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const divEl = document.querySelector('#boxes');

// inputEl.addEventListener('input', onInput)
btnCreate.addEventListener('click', onCreate)
btnDestroy.addEventListener('click', onDestroy)

// function onInput (evt) {
//   Number(evt.currentTarget.value);
  
//   }

function onCreate() {
  createBoxes(Number(inputEl.value));

}

function onDestroy() {
  divEl.innerHTML ='';
}

function createBoxes(amount) {
  let str = '';
for (let i = 0; i < amount; i++) {
str += `<div style ="background-color: ${getRandomHexColor()}; width: ${30 + 10*i}px; height: ${30 + 10*i}px"></div>`
}
divEl.insertAdjacentHTML('beforeend', str);
}




