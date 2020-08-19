const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let todoCount = 0
let uncheckedCount = 0

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  //alert('New TODO button clicked!')
  let toDoName = prompt("Enter name of the ToDo")
  toDoElement = createElement(toDoName)
  list.appendChild(toDoElement)

  todoCount = increment(todoCount)
  uncheckedCount = increment(uncheckedCount)

  itemCountSpan.innerHTML = todoCount
  uncheckedCountSpan.innerHTML = uncheckedCount

  toDoElement.addEventListener("click",function(event){
    if(event.target.type.toLowerCase() === 'checkbox'){
      if(event.target.checked){
        uncheckedCount = decrement(uncheckedCount)
        uncheckedCountSpan.innerHTML = uncheckedCount
      }
      else {
        uncheckedCount = increment(uncheckedCount)
        uncheckedCountSpan.innerHTML = uncheckedCount
      }
    }
    else if(event.target.type.toLowerCase() === 'submit'){
      const toDoListItem = document.getElementById(toDoName)
      toDoListItem.remove()
      todoCount = decrement(todoCount)
      uncheckedCount = decrement(uncheckedCount)

      uncheckedCountSpan.innerHTML = uncheckedCount
      itemCountSpan.innerHTML = todoCount
    }
  })
}

function createElement(name){
  const toDoList = document.createElement('li')
  toDoList.setAttribute('id',name)
  toDoList.className = classNames.TODO_ITEM

  const toDoText = document.createElement("span")
  toDoText.setAttribute('id',name)
  toDoText.className = classNames.TODO_TEXT
  toDoText.textContent = name

  const toDoCheckbox = document.createElement("input")
  toDoCheckbox.setAttribute('type','checkbox')
  toDoCheckbox.setAttribute('id',name)
  toDoCheckbox.className = classNames.TODO_CHECKBOX

  toDoText.appendChild(toDoCheckbox)

  toDoDelete = addDeleteButton(name)
  toDoText.appendChild(toDoDelete)

  toDoList.appendChild(toDoText)

  return toDoList
}

function countUnchecked(name, uncheckedCountSpan){
  //uncheckedCount += 1
  //uncheckedCountSpan.innerHTML = todoCount - uncheckedCount
  console.log('coming here ??')
  let checkbox = document.getElementsByName(name)
  if(checkbox.checked){
    console.log('coming here successfully')
  }

}

function addDeleteButton(name){
  const toDoDelete = document.createElement('input')
  toDoDelete.setAttribute('type','submit')
  toDoDelete.setAttribute('name',name)
  toDoDelete.setAttribute('value','Delete')
  toDoDelete.setAttribute('class',classNames.TODO_DELETE)

  return toDoDelete

}

function increment(count){
  return count + 1
}

function decrement(count){
  return count - 1
}
