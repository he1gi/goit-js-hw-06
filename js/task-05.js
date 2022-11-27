const refs = {
  input: document.querySelector("#name-input"),
  label: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(evt) {
  if (evt.target.value === "") {
    refs.label.textContent = "Anonymous";
  } else {
    refs.label.textContent = evt.target.value;
  }
}
