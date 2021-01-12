'use strict'

//Parsing from Local Storage
const getSavedTodos = () => {
const todoJSON = localStorage.getItem('todos')
    try{
        return todoJSON ? JSON.parse(todoJSON) : []
    }catch(e){
        return []
    }
}

//persisting to local Storage
const saveToLocal = (todos) => localStorage.setItem('todos',JSON.stringify(todos))

// Removing todo
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if(todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}

//checking/unchecking a todo
const checkTodos = (id) => {
    const todo = todos.find((todo) =>todo.id === id)
   if(todo){
       todo.completed = !todo.completed
   }
}

//generating DOM Elements
const generateDOMElement = (todo,index) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const newEl = document.createElement('span')
    const button = document.createElement('button')
    const checkbox = document.createElement('input')
    
    //appending label to the DOM
    document.querySelector('#todo-list').appendChild(todoEl)


    //checking a checkbox if todo is completed
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        checkTodos(todo.id)
        saveToLocal(todos)
        renderTodos(todos,filters)
    })
    
    
    //setting text content for the span element
    newEl.textContent = `${index + 1}. ${todo.title}`
    containerEl.appendChild(newEl)

    //setup container and appending container to the label
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Removing a todo
    button.textContent = 'Remove'
    button.classList.add('button', 'button--text')
    todoEl.appendChild(button)
    button.addEventListener('click', () => {
        removeTodo(todo.id)
        saveToLocal(todos)
        renderTodos(todos, filters)
}) 
    return todoEl
}

//generating Summary
const getSummary = (incompleteTodos) => {
    const h2 = document.createElement('h2')
    h2.classList.add('list-title')
    const todosLength = incompleteTodos.length === 1 ? '' : 's'
        h2.textContent = `You have ${incompleteTodos.length} incomplete Todo${todosLength}`
    return h2
}


//The renderTodos function
const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector('#todo-list')
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#h2').innerHTML = ''
    todoEl.innerHTML = ''

    const h2 = getSummary(incompleteTodos)
    document.querySelector('#h2').appendChild(h2)

    if(filteredTodos.length > 0){
        filteredTodos.forEach((todo,index)=> generateDOMElement(todo,index))
    }else{
        const paragraphEl = document.createElement('p')
        paragraphEl.classList.add('empty-message')
        paragraphEl.textContent = 'No Todos to show'
        todoEl.appendChild(paragraphEl)
    }
}

