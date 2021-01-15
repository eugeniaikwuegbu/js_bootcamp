import {getTodos, loadTodos,removeTodo, toggleTodo} from './todos'
import {getFilters} from './filters'


//The renderTodos function
const renderTodos = () => {
    const todoEl = document.querySelector('#todo-list')
    const todos = loadTodos()
    const {searchText, hideCompleted} = getFilters() //destructured
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.title.toLowerCase().includes(searchText.toLowerCase())
        const hideCompletedMatch = !hideCompleted || !todo.completed
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
        toggleTodo(todo.id)
        renderTodos()
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
        renderTodos()
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



// setting up the exports
export{renderTodos, generateDOMElement, getSummary}