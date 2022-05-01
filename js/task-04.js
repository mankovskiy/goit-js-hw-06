// Создай переменную counterValue в
// которой будет храниться текущее
// значение счетчика и инициализируй её
// значением 0.
// Добавь слушатели кликов на кнопки,
//     внутри которых увеличивай или
//     уменьшай значение счтетчика.
// Обновляй интерфейс новым значением
// переменной counterValue.

let counterValue = 0;

let value = document.querySelector("#value");

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

decrementButton.addEventListener("click", onDecremBtnClick);

incrementButton.addEventListener("click", onIncremBtnClick);

function onDecremBtnClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function onIncremBtnClick() {
  counterValue += 1;
  value.textContent = counterValue;
}
