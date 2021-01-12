let notes = [{
    title : 'Things to learn',
    body : 'Modern JS Bootcamp'
}, {
    title : 'Meals to make',
    body : 'Egusi Soup'
}, {
    title : 'Cars to wash',
    body : 'Lexus'
}]

const findNote = function (notes, noteTitle){
    return notes = notes.find(function (note){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}
// const index = function (notes, noteTitle){
//     const findNote = notes.findIndex(function (note){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[findNote]
// }

console.log(findNote(notes, 'cars to wash'))