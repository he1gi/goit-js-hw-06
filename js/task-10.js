const refs = {
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  input: document.querySelector("input"),
  box: document.querySelector("#boxes"),
};

let incrementForDimensions = 0;
let numeration = 1;

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

    markUp += `<div style="display: flex; justify-content: center; align-items: center; width: ${
      20 + incrementForDimensions
    }px; height:${
      20 + incrementForDimensions
    }px; background-color: ${getRandomHexColor()};"><span style="display:inline-block; font-size: ${incrementForDimensions}px; color: ${getRandomHexColor()}">${numeration}</span></div>`;
    numeration += 1;
  }

  refs.box.insertAdjacentHTML("beforeend", markUp);
}

function destroyBoxes() {
  const { input, box } = refs;

  input.value = "";
  box.innerHTML = "";
  incrementForDimensions = 0;
  numeration = 1;
}
