const refs = {
  input: document.querySelector("#name-input"),
  label: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.label.textContent = event.currentTarget.value;
}
