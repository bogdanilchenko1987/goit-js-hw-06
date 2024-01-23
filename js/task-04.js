
const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')
const resultEl = document.querySelector('#value')

let counterValue = 0;

btnDecrement.addEventListener('click', onDecrement)
btnIncrement.addEventListener('click', onIncrement)

function onDecrement() {
counterValue -=1;
resultEl.textContent = `${counterValue}`;
}

function onIncrement() {
    counterValue +=1;
    resultEl.textContent = `${counterValue}`;
    }
    