const inputEl = document.querySelector("#validation-input");
const lengthEl = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onInput);

function onInput(evt) {
  const currLength = evt.currentTarget.value.length;

  inputEl.classList.remove("invalid");
  inputEl.classList.add("valid");

  if (currLength !== lengthEl) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
