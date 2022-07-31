const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const createIngrediantsOptions = (options) => {
  return options.map((ingredient) => {
    const ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add("item");
    return ingredientEl;
  });
};

const itemsEl = createIngrediantsOptions(ingredients);
listEl.append(...itemsEl);
