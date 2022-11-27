const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const createIngrediantsMarkUp = (list) => {
  return list.map((ingredient) => {
    const ingredientEl = document.createElement("li");

    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add("item");

    return ingredientEl;
  });
};

const itemsEl = createIngrediantsMarkUp(ingredients);

listEl.append(...itemsEl);
