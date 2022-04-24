// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const findItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${findItemEl.length}`);

const quantityElements = document.querySelectorAll(".item");
// console.log(quantityElements);
quantityElements.forEach((element) => {
  console.log(`Category:${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
