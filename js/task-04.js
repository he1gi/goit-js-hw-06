const decrenemtBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrenemtBtn.addEventListener("click", () => {
  return (valueEl.textContent = counterValue -= 1);
});

incrementBtn.addEventListener("click", () => {
  return (valueEl.textContent = counterValue += 1);
});
