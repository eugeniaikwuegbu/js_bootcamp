const people = [{
    name : 'Eugenia',
    age : 25
}, {
    name : 'Shantel',
    age : 22
}, {
    name : 'Andrew',
    age : 27
}]

// const age22 = people.filter( (person) => person.age === 22).map( (person) => person.name)
const age22 = people.find( (person) => person.age === 22)

console.log(age22.name)