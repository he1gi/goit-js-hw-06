const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach((el) => {
  const titleEl = el.querySelector("h2");
  const liEl = el.querySelectorAll("li");

  console.log(`Categoty: ${titleEl.textContent}`);
  console.log(`Elements: ${liEl.length}`);
});
