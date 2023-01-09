let counterValue = 0;
const butttonDecrementEl = document.querySelector('[data-action="decrement"]')
const butttonIncrementEl = document.querySelector('[data-action="increment"]')
const counterValueEl = document.querySelector('#value')




const increaseNumberHandler = () => {
    console.log("click vie increase button")
    counterValue += 1
     counterValueEl.textContent = counterValue
    return counterValueEl
}
    


const decreaseNumberHandler = () => {
    console.log("click vie decrease button")
    counterValue -= 1
    counterValueEl.textContent = counterValue
    return counterValueEl
}
    

butttonDecrementEl.addEventListener('click',decreaseNumberHandler )
butttonIncrementEl.addEventListener('click',increaseNumberHandler )