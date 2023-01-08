const loginFormEl = document.querySelector('.login-form')


const submitHandler = (event) => {
    
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Fill in all the fields!");
    }
      console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}


loginFormEl.addEventListener('submit',submitHandler)