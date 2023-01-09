const bodyEl = document.querySelector('body')
const buttonEl = document.querySelector('.change-color')
const spanEl = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeBkgColotHandler = () => {
  bodyEl.style.backgroundColor = getRandomHexColor()
spanEl.innerHTML = getRandomHexColor()
}

buttonEl.addEventListener('click', changeBkgColotHandler)




