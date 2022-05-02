// Напиши скрипт, который реагирует
// на изменение значения
// input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text
// обновляя свойство font - size.В
// результате при перетаскивании ползунка
// будет меняться размер текста.

const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  textContentSize: document.querySelector("#text"),
};

refs.fontSizeControl.addEventListener("input", onCurrentSize);

function onCurrentSize(event) {
  const textSize = event.currentTarget.value;
  refs.textContentSize.style.fontSize = `${textSize}px`;
  console.log(`${textSize}"px"`);
}
