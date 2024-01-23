const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text')

inputEl.addEventListener('input', onInput)

function onInput(evt) {
    spanEl.style.fontSize = `${evt.currentTarget.value}px`;

}