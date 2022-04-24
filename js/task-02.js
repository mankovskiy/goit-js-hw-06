// Напиши скрипт, который для
// каждого элемента массива ingredients:

// Создаст отдельный элемент < li >.
// Обзательно используй метод
// document.createElement().
// Добавит название ингредиента как
//  его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за
// одну операцию в список ul.ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const createItemEl = ingredients.map((ingredient, index) => {
  const addNewItemEl = document.createElement("li");
  addNewItemEl.classList.add("item");
  addNewItemEl.textContent = ingredients[index];
  return addNewItemEl;
});

listEl.append(...createItemEl);
