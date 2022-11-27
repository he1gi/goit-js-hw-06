const refs = {
  decrenemt: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

refs.decrenemt.addEventListener("click", () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
});

refs.increment.addEventListener("click", () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
});
