const refs = {
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  input: document.querySelector("input"),
  box: document.querySelector("#boxes"),
};

let incrementForDimensions = 0;

/*
Events
*/
refs.create.addEventListener("click", () => {
  const inputValue = refs.input.value;

  createBoxes(inputValue);
});

refs.destroy.addEventListener("click", () => {
  destroyBoxes();
});

/*
Functions
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let markUp = "";

  for (let i = 1; i <= amount; i += 1) {
    incrementForDimensions += 10;

    markUp += `<div style="width: ${20 + incrementForDimensions}px; height:${
      20 + incrementForDimensions
    }px; background-color: ${getRandomHexColor()};"></div>`;
  }
  refs.box.insertAdjacentHTML("beforeend", markUp);
}

function destroyBoxes() {
  const { input, box } = refs;

  input.value = "";
  box.innerHTML = "";
  incrementForDimensions = 0;
}
