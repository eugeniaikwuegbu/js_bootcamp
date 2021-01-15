import uuidv4 from 'uuid/v4'

let todos = []

// saveTodos
const saveTodos = () => {
    localStorage.setItem('todos',JSON.stringify(todos))
}

// getTodos
const getTodos = () => {
const todoJSON = localStorage.getItem('todos')
    try{
        todos = todoJSON ? JSON.parse(todoJSON) : []
    }catch(e){
       todos = []
    }
}


//load todos
const loadTodos = () => todos

// createTodo
const createTodo = (title) => {
    const uuid = uuidv4()
    todos.push({
        id: uuid,
        title, //inherited the value from the title variable above
        completed : false
    })
    saveTodos()
}

// removeTodo
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if(todoIndex > -1){
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

// toggleTodo
const toggleTodo = (id) =>{
    const todo = todos.find((todo) =>todo.id === id)
    if(todo){
        todo.completed = !todo.completed
        saveTodos()
    }
}

// todos = getTodos() //sets the todos arr to equal the getTodos function
getTodos()

//seting up the exports
export{ loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo}