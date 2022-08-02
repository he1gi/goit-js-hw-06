const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach((element) => {
  const titleEl = element.querySelector("h2");
  console.log(`Categoty: ${titleEl.textContent}`);

  const liEl = element.querySelectorAll("li");
  console.log(`Elements: ${liEl.length}`);
});
