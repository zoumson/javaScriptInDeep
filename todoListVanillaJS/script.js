const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};
let count = 0;
let checked = 0;
const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {
  /* New todo creation */
  count++;
  /* Update the un check and count */
  itemCountSpan.innerHTML = `${count}`;
  uncheckedCountSpan.innerHTML = `${count - checked}`;
  let todo = document.createElement('li');
  /* Creating checkbox */
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'name';
  checkbox.checked = false;
  checkbox.id = `id${count}`;
  checkbox.onclick = (e) => {
    if (e.target.checked == true) {
      checked++;
    } else {
      checked--;
    }
    /* Update the un check count */
    uncheckedCountSpan.innerHTML = `${count - checked}`;
  };
  checkbox.classList.add(classNames.TODO_CHECKBOX);
  /* Creating todo label */
  let label = document.createElement('label');
  label.htmlFor = `id${count}`;
  label.appendChild(document.createTextNode(`Todo ${count}`));
  label.classList.add(classNames.TODO_TEXT);
  /* Todo delete button */
  let button = document.createElement('button');
  button.innerHTML = 'Delete';
  button.style.float = 'right';
  button.onclick = (e) => {
    e.preventDefault();
    if (!e.target.previousSibling.classList.contains(classNames.TODO_DELETE)) {
      count--;
      if (e.target.previousSibling.previousSibling.checked == true) {
        uncheckedCountSpan.innerHTML = `${count - checked + 1}`;
        checked--;
      } else {
        uncheckedCountSpan.innerHTML = `${count - checked}`;
      }
      /* Update the un check and count */
      itemCountSpan.innerHTML = `${count}`;
      //uncheckedCountSpan.innerHTML = `${count - checked}`;
      e.target.previousSibling.classList.add(classNames.TODO_DELETE);
    }
  };
  todo.appendChild(checkbox);
  todo.appendChild(label);
  todo.appendChild(button);
  todo.classList.add(classNames.TODO_ITEM);
  list.appendChild(todo);
}
