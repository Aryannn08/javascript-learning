
const todoList = [{
  name: 'make dinner',
  dueDate: '2025-05-24'},
  {
  name: 'wash dishes',
  dueDate: '2025-05-24'
  }];

renderTodoList();

function renderTodoList() {       
  let todoListHTML = '';
  todoList.forEach(function(todoObject, index){
    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div> 
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${index},1);
      renderTodoList();
    " class = "delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });
  //the above and belore forEach and for loop are used for the same purpose but forEach is more preferred
  // for(let i=0;i<todoList.length;i++){
  //   const todoObject = todoList[i];
  //   // const name = todoObject.name; //const {name} =  todoObject; this can be used too and called destructuring
  //   // const dueDate = todoObject.dueDate;
  //   const {name, dueDate} = todoObject;
  //   const html = `
  //   <div>${name}</div> 
  //   <div>${dueDate}</div>
  //   <button onclick="
  //     todoList.splice(${i},1);
  //     renderTodoList();
  //   " class = "delete-todo-button">Delete</button>
  //   `;
  //   todoListHTML += html;
  // }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name: name, //name (only this will work too - shorthand property)
    dueDate: dueDate //dueDate (only this will work too)
  });
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}