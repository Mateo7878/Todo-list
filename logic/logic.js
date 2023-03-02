const buttonAdd = document.querySelector("[data-form-btn]");


const addTodo = (event) =>
{
    event.preventDefault();
    const buttonInput = document.querySelector("[data-form-input]");
    console.log(buttonInput.value);
}


buttonAdd.addEventListener('click', addTodo)