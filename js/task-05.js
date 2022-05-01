//Напиши скрипт который, при наборе текста
//в инпуте input#name - input(событие input),
//подставляет его текущее значение в span#name
//- output.Если инпут пустой, в спане
//должна отображаться строка "Anonymous"

const textInput = document.querySelector("#name-input");

const string = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
  string.textContent = textInput.value;
  if (textInput.value === "") {
    string.textContent = "Anonymous";
  }
});
