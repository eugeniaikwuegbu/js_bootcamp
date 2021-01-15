// Adding necessary imports
import {getFilters,setFilters} from './filters'
import{ createTodo,getTodos, loadTodos, saveTodos} from './todos.js'
import {renderTodos} from './views'


// Render initial todos
renderTodos()

const filters = getFilters()

//Setting up event handlers for searching a todo
document.querySelector('#searchTodos').addEventListener('input', (e) => {
    setFilters({searchText : e.target.value})
    renderTodos()
})


// Set up checkbox handler
document.querySelector('#checkbox').addEventListener('change', (e) =>{
    setFilters({hideCompleted : e.target.checked})
    renderTodos()
 })

// Set up form submission handler
document.querySelector('#submit-todos').addEventListener('submit', (e) => {
    e.preventDefault()
    const title = e.target.elements.inputTodo.value.trim()
    if(title.length > 0){
        createTodo(title)
        renderTodos()
        e.target.elements.inputTodo.value = ''
    }else{
        return
    }
})


//Adding a watcher for local storage 1000183329
window.addEventListener('storage', (e) =>{
    if(e.key === 'todos'){
        getTodos() //using loadTodos func instead makes the code to malfunction cos the loadTodos is not the arr gotten from local storage
        renderTodos()
    }
})
