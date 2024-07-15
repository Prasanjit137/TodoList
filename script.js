const todoList  = document.getElementById('todoList');
const newTodoInput = document.getElementById('newTodo');
const addBtn = document.getElementById('addBtn');

function addTodo() {
    const newTodoText = newTodoInput.value;
    newTodoInput.value = '';

    const completeCheckbox = document.createElement('input');
    completeCheckbox.type = 'checkbox';
    completeCheckbox.classList.add('mr-2');

    const todoText = document.createElement('span');
    todoText.textContent = newTodoText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'ml-2');

    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'd-flex', 'align-items-center');
    listItem.appendChild(completeCheckbox);
    listItem.appendChild(todoText);
    listItem.appendChild(deleteBtn);

    todoList.append(listItem);

    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });

    completeCheckbox.addEventListener('change', function() {
        if (completeCheckbox.checked) {
            listItem.classList.add('completed', 'text-muted');
            todoText.style.textDecoration = 'line-through';
        } else {
            listItem.classList.remove('completed', 'text-muted');
            todoText.style.textDecoration = 'none';
        }
    });

    newTodoInput.focus();
}

addBtn.addEventListener('click', addTodo);
