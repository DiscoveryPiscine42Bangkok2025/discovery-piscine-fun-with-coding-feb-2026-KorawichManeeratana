const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new');

function addTodo(text) {
  const div = document.createElement('div');
  div.setAttribute('id', 'todoitem');
  div.innerText = text;


  div.onclick = () => {
    if (confirm('Are you sure you want to delete this TO DO?')) {
      div.remove();
      saveTodos();
    }
  }
  ftList.prepend(div);
}

newBtn.onclick = () => {
  const text = prompt('Enter a new TO DO:');
  if (text) {
    addTodo(text);
    saveTodos()
  }
};



function setCookie(name, value) {
  document.cookie = name + "=" + encodeURIComponent(value);
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');


  for (let c of cookies) {

    const [key, value] = c.split('=');

    if (key === name) return decodeURIComponent(value);
  }
  return null;
}

function saveTodos() {
  const todos = [];

  ftList.querySelectorAll('div').forEach(d => {
    todos.push(d.innerText);
  });

  setCookie('todos', JSON.stringify(todos));
}

function loadTodos() {
  const data = getCookie('todos');
  if (!data) return;

  const todos = JSON.parse(data);
  todos.reverse().forEach(t => addTodo(t));
}
loadTodos();
