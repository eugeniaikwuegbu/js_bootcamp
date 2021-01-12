let todos = [{
    title : 'Learn JS',
    completed : true
}, {
    title : 'Make meals',
    completed : false
}, {
    title : 'Wash car',
    completed : true
},  {
    title : 'Clean Kitchen',
    completed : false
}]



//function to delete a todo
const deleteTodo = function (todos, deleteItem){
    const findTodo = todos.findIndex(function(todo){
       return todo.title.toLowerCase() === deleteItem.toLowerCase()
    })
    if(findTodo > -1){
        todos.splice(findTodo,1)
    }
}
// console.log(deleteTodo(todos,'wash car'))
// console.log(todos)


//function to show uncompleted todos

const getThingsToDo = function (todos){
    return todos.filter(function (todos){
        return !todos.completed
        // return todos.completed === false
    })
}
// console.log(getThingsToDo(todos))


//function to sort todos
const sortTodos = function (todos){
   return todos.sort(function (a, b){
     if(!a.completed && b.completed){
         //where a is for not completed and b is for completed
         return -1
     } else if (!b.completed && a.completed){
         return 1
     }else{
         return 0
     }
    })
}

console.log(sortTodos(todos))


