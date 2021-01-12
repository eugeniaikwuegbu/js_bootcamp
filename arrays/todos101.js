let todos = ['Shower', 'cook meal', 'eat breakfast', 'study', 'make my hair']

//Delete third item on list
todos.splice(2, 1)
//Add a new item to end
todos.push('Bath the dog')
//Remove first item from list
todos.shift()
//Removing the second to last item from list and replacing it
// console.log(todos.splice([todos.length-2], 1, 'Hello'))

// console.log(`You have ${todos.length} todos`)
// todos.forEach(function (item, index){
//     console.log(`${index + 1}. ${item}`)
// })

// for(let count =0; count < todos.length; count++){
//     let num = todos[count]
//     console.log(`${count + 1}. ${num}`)
// }

//counting backwards
// for(let count = todos.length; count >=0; count--){
//     console.log(todos[count])
// }

// console.log(`You have ${todos.length} todos for today`)
// console.log(`Todo: ${todos[0]}\nTodo: ${todos[todos.length-2]} `)

