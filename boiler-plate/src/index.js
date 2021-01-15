import uuidv4 from 'uuid/v4'
import validator from 'validator'
import myFunc, {name, school } from './tryOut'


//Destructure.js
const todo = {
    id : 'jdhvawnwskwekj',
    title : 'Software Dev',
    completed : true
}


const {title : todoText, id : myId, info : details = {text : 'I am a software dev', name : 'Chi'}} = todo

console.log(todoText, myId, details.name )

const myAge = [30, 45, 90, 333]
const [myAge1, ...otherAges] = myAge
console.log(myAge1, ...otherAges )


const printName = ({title, id}) =>{
    console.log(`I am a ${title}. id : ${id}`)
}

printName(todo)

// class Hangman {
//     myFunc() {
//         return 'My name is Chinenye Ik'
//     }
// }

// const hangman = new Hangman()
// console.log(hangman.myFunc())

// console.log(validator.isAlphanumeric('Eugenia1234'))  //checks if a string contains alphabets or numbers, returns true if it contains either of them and false if (empty string, symbols, space only)
// console.log(uuidv4())
// console.log(myFunc('Hello there'))
// console.log(name)
// console.log('hell0')

