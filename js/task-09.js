const bodyEl = document.querySelector('body')
const buttonEl = document.querySelector('.change-color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeBkgColotHandler = () => {
  bodyEl.style.backgroundColor = getRandomHexColor()
}

buttonEl.addEventListener('click', changeBkgColotHandler)

console.log(getRandomHexColor())