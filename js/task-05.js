const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput(evt) {
    spanEl.textContent = 'Anonimus';

    if(evt.currentTarget.value) {
        spanEl.textContent = `${evt.currentTarget.value}`;        
    }

}