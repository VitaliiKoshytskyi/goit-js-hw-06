const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");


const inputHandler = (event) =>
  (spanEl.style.fontSize = `${Number(event.currentTarget.value)}px`);

inputEl.addEventListener("input", inputHandler);
