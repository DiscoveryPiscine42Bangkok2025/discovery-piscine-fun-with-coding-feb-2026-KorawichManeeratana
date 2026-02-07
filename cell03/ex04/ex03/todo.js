const $ftList = $('#ft_list'); 
const $newBtn = $('#new');

function addTodo(text) {

  const $div = $('<div></div>')
    .attr('id', 'todoitem')
    .text(text);

  $div.on('click', function() {
    if (confirm('Are you sure you want to delete this TO DO?')) {
      $(this).remove();
      saveTodos();
    }
  });

  $ftList.prepend($div);
}

$newBtn.on('click', function() {
  const text = prompt('Enter a new TO DO:');
  if (text && text.trim() !== "") {
    addTodo(text);
    saveTodos();
  }
});



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
  $ftList.find('div').each(function() {
    todos.push($(this).text());
  });
  setCookie('todos', JSON.stringify(todos));
}

function loadTodos() {
  const data = getCookie('todos');
  if (!data) return;
  const todos = JSON.parse(data);
  todos.reverse().forEach(t => addTodo(t));
}

$(function() {
  loadTodos();
});
