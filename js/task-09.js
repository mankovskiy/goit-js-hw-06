// Напиши скрипт, который изменяет цвета
// фона элемента < body > через инлайн стиль
// при клике на button.change - color и выводит
// значение цвета в span.color.

const changeColorBtn = document.querySelector(".change-color");
const colorBody = document.querySelector("body");
const currentColorName = document.querySelector(".color");

changeColorBtn.addEventListener("click", onChangeColorBody);

function onChangeColorBody() {
  const color = getRandomHexColor();
  colorBody.style.backgroundColor = color;
  currentColorName.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
