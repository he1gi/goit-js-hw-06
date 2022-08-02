const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const handlerInputValue = () => {
  textEl.style.fontSize = inputEl.value + "px";
};

inputEl.addEventListener("input", handlerInputValue);
