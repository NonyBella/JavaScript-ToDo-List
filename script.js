const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list")
let counter = 0;

function onAddTodo(){
    if(!todoInput.value) return;
    counter++;
    const span = document.createElement("span");
    const li  = document.createElement("li");
    const img = document.createElement("img");

    li.setAttribute("id","item-" + counter);

    img.setAttribute("src", "delete.png");

    img.setAttribute("onclick", "onDeleteTodo('item-" + counter + "')");

    span.innerText = todoInput.value;

    li.append(span,img);

    todoList.prepend(li);

    todoInput.value = null;
}

function onDeleteTodo(elementId){
    document.getElementById(elementId).remove();
}