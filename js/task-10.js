const inputEl = document.querySelector('input')
const btnCreateEl = document.querySelector('[data-create]')
const btnDescroyEl = document.querySelector('[data-destroy]')
const divEl = document.querySelector('#boxes')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function createBoxes() {
  let newArray = []
  let inputValues = inputEl.value
  let widthHeight = 30
 
  for (let i = 0; i < inputValues;i+=1) {
    let divCreate =document.createElement('div')
    divCreate.style.width = `${widthHeight}px`
    divCreate.style.height = `${widthHeight}px`
    divCreate.style.backgroundColor = getRandomHexColor()
    widthHeight+=10
    newArray.push(divCreate)
  }
  divEl.append(...newArray)
 
  
}

function destroyBoxes() {
divEl.innerHTML = ''
}



btnCreateEl.addEventListener('click', createBoxes)
btnDescroyEl.addEventListener('click', destroyBoxes)


