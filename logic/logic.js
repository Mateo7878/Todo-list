const buttonAdd = document.querySelector("[data-form-btn]");

const addTodo = (event) =>
{
    event.preventDefault();
    const Input = document.querySelector("[data-form-input]");
    const value = Input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    Input.value = '';
    const content = ` <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;

    list.appendChild(task);


}


buttonAdd.addEventListener('click', addTodo)