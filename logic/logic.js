( () => {
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
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);


    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.appendChild(taskContent);
    list.appendChild(task);
}

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", 'fa-check-square', "icon" );
    i.addEventListener('click', compleTask);
    return i;
}


const compleTask = (event) =>
{
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");

}

buttonAdd.addEventListener('click', addTodo)
})();