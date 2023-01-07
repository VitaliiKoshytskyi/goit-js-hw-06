const inputEl = document.querySelector("input");
console.log(inputEl);

const checkingCorrectInputHandler = (event) => {
  if (
    Number(event.currentTarget.value.length) ===
    Number(inputEl.getAttribute("data-length"))
  ) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.add("valid");
  }
};

inputEl.addEventListener("blur", checkingCorrectInputHandler);
