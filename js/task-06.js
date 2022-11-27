const inputEl = document.querySelector("#validation-input");

const validLength = inputEl.dataset.length;

inputEl.addEventListener("blur", (evt) => {
  const inputValueLength = evt.target.value.length;

  if (inputValueLength == validLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
