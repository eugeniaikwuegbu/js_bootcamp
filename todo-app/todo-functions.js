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
    const div = document.createElement('div')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')

    //checking a checkbox if todo is completed
    checkbox.checked = todo.completed
    checkbox.addEventListener('change', () => {
        checkTodos(todo.id)
        saveToLocal(todos)
        renderTodos(todos,filters)
    })

    const newEl = document.createElement('span')
   
    const button = document.createElement('button')
    button.textContent = 'x'
    
    // Removing a todo
    button.addEventListener('click', () => {
        removeTodo(todo.id)
        saveToLocal(todos)
        renderTodos(todos, filters)
})

    //appending elements 
    document.querySelector('#todo-list').appendChild(div)
    
    div.append(checkbox, newEl, button)
    
    newEl.textContent = `${index + 1}. ${todo.title}`
    if(todo.title.length === 0){
        newEl.textContent = `${index + 1}. Unnamed todo`
    }
    return newEl
}

//generating Summary
const getSummary = (incompleteTodos) => {
    const h2 = document.createElement('h2')
    h2.textContent = `You have ${incompleteTodos.length} incomplete todos`
    return h2
}


//The renderTodos function
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#h2').innerHTML = ''
    document.querySelector('#todo-list').innerHTML = ''

    const h2 = getSummary(incompleteTodos)
    document.querySelector('#h2').appendChild(h2)

    filteredTodos.forEach((todo,index)=> generateDOMElement(todo,index))
}

