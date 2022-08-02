const btnEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomBackgroundColor() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  textEl.textContent = randomColor;
}

btnEl.addEventListener("click", getRandomBackgroundColor);
