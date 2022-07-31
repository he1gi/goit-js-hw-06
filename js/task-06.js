const inputEl = document.querySelector("#validation-input");
const inputValidLength = inputEl.getAttribute("data-length");

function validateInput() {
  const inputLength = inputEl.value.length;

  if (inputLength === inputValidLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}

inputEl.addEventListener("blur", validateInput);
