let team = ['Eugenia', 'George', 'Andrew', 'Josh', 'Eugenia']
const message = team.length <= 4 ? `Team size: ${team.length}` :  `Too many people on your team`

// OR
const teamSize = () => {
    return `Team size: ${team.length}`
}
const tooMany = () =>{
    return `Too many people on your team`
}
const message1 = team.length <= 4 ? teamSize() : tooMany()
console.log(message)