const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients')


ingredients.forEach(elem => {
  const list = document.createElement('li')
  list.textContent = elem
  list.classList.add('item')
  ingredientsListEl.append(list)

})
