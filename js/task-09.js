const refs = {
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
};

refs.btn.addEventListener("click", handleBtnClick);

function handleBtnClick() {
  const { body, span } = refs;

  const generatedColor = getRandomHexColor();
  body.style.backgroundColor = generatedColor;
  span.textContent = generatedColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
