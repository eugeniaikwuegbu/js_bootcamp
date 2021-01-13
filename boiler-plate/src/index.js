import uuidv4 from 'uuid/v4'
import validator from 'validator'
import myFunc, {name, school } from './tryOut'


class Hangman {
    myFunc() {
        return 'My name is Chinenye Ik'
    }
}

const hangman = new Hangman()
console.log(hangman.myFunc())

console.log(validator.isAlphanumeric('Eugenia1234'))  //checks if a string contains alphabets or numbers, returns true if it contains either of them and false if (empty string, symbols, space only)
console.log(uuidv4())
console.log(myFunc('Hello there'))
console.log(name)
console.log('hell0')