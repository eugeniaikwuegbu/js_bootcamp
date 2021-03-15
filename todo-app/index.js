'use strict'

const todos = getSavedTodos()

//Creating a filters Object
const filters = {
    searchText : '',
    hideCompleted : false
}

//Rendering todos
renderTodos(todos,filters)

//Setting up event handlers for searching a todo
document.querySelector('#searchTodos').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})


//Submitting a todo and rendering a new todo to the todos array
document.querySelector('#submit-todos').addEventListener('submit', (e) => {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        title : e.target.elements.inputTodo.value,
        completed : false
    })
    saveToLocal(todos)
    renderTodos(todos, filters)
    e.target.elements.inputTodo.value = ''
})


document.querySelector('#checkbox').addEventListener('change', (e) =>{
   filters.hideCompleted = e.target.checked
   renderTodos(todos, filters)
})

// document.querySelector('#label').addEventListener('click', function(e){
//   const label = document.querySelector('#label')
//   const input = document.createElement('input')
//   input.setAttribute('type', 'checkbox')
//   label.appendChild(input)
//   label.innerText = 'show completed'

// })













//Experimenting event listeners
// const button = document.querySelector('button')
// button.addEventListener('click', (e) =>{
//     e.target.textContent = 'I am a button'
// })


// const paragraph = document.querySelectorAll('p')
// console.log(paragraph)

// paragraph.forEach(function (p){
//     if(p.textContent.includes('the')){
//         p.remove()
//     }
// })
