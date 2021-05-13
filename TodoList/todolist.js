let todoPlaceholders = ["Walk the dog", "Pet the cat", "Do my homework", "Feed the parrot"]
let todoList;
let todoText;
let id = 0;

function createElement(tagName, className) {
    let todoItem = document.createElement(tagName)
    todoItem.className = className
    return todoItem
}

function createElementWithId(tagName, className, elementId) {
    return todoItem
}

function createButton(className, text, onClick) {
    let todoItem = createElement("button", className)
    todoItem.innerText = text
    todoItem.onclick = onClick
    return todoItem
}

function addTodoItem() {
    if(!todoText.value.trim()) {
        return;
    }
    for(let child of todoList.children) {
        if(child.getElementsByTagName("p")[0].innerText === todoText.value) {
            return;
        }
    }
    let todoItem = createElement("div", "todo-item")
    todoList.appendChild(todoItem)
    let todoItemText = createElement("p", "todo-item-name")
    todoItemText.innerText = todoText.value
    todoText.value = ""
    let oldPlaceholder = todoText.placeholder
    while(todoText.placeholder === oldPlaceholder) {
        todoText.placeholder = todoPlaceholders[Math.floor(Math.random() * todoPlaceholders.length)]
    }
    todoItem.appendChild(todoItemText)
    todoItem.appendChild(createButton("todo-item-delete", "✕", () => todoList.removeChild(todoItem)))
    todoItem.appendChild(createButton("todo-item-move-up", "▲", () => {
        if(todoItem.previousElementSibling != null) {
            todoList.insertBefore(todoItem, todoItem.previousElementSibling)
        }
    }))
    todoItem.appendChild(createButton("todo-item-move-down", "▼", () => {
        if(todoItem.nextElementSibling != null) {
            if(todoItem.nextElementSibling.nextElementSibling != null) {
                todoList.insertBefore(todoItem, todoItem.nextElementSibling.nextElementSibling)
            } else {
                todoList.appendChild(todoItem)
            }
        }
    }))
}

function onReady() {
    todoList = $('#todo-list')[0]
    todoText = $('#todo-text')[0]
    todoText.placeholder = todoPlaceholders[Math.floor(Math.random() * todoPlaceholders.length)]
    $('#todo-submit')[0].onclick = addTodoItem
}

$(document).ready(onReady)
