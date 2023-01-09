const inputEl = document.querySelector('#name-input')
const spanEl = document.querySelector('#name-output')



const inputHandler = (event) => {
    if (event.currentTarget.value === '') {
        spanEl.textContent = "Anonymous"
        
    }
    else { spanEl.textContent = event.currentTarget.value }
    
}
inputEl.addEventListener('input',inputHandler)