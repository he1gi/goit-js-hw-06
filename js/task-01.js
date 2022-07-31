const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);

const itemssEl = document.querySelector("ul");

// first element
const firstEl = itemssEl.children[0];
const firstTitleEl = firstEl.firstElementChild.textContent;
console.log(`Categoty: ${firstTitleEl}`);

const firstLiEl = firstEl.lastElementChild.children.length;
console.log(`Elements: ${firstLiEl}`);

// second element
const secondEl = itemssEl.children[1];
const secondTitleEl = secondEl.firstElementChild.textContent;
console.log(`Categoty: ${secondTitleEl}`);

const secondLiEl = secondEl.lastElementChild.children.length;
console.log(`Elements: ${secondLiEl}`);

// third element
const thirdEl = itemssEl.children[2];
const thirdTitleEl = thirdEl.firstElementChild.textContent;
console.log(`Categoty: ${thirdTitleEl}`);

const thirdLiEl = thirdEl.lastElementChild.children.length;
console.log(`Elements: ${thirdLiEl}`);
