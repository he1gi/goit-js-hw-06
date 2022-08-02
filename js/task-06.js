const inputEl = document.querySelector("#validation-input");
const inputValidLength = inputEl.getAttribute("data-length");

function validateInputEntries() {
  const inputLength = inputEl.value.length;

  if (inputLength == inputValidLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}

inputEl.addEventListener("blur", validateInputEntries);
