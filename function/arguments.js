// Method 1


//let getTip = function (total = 0, tipPercent = 0.2){
//     let totalTip = total * tipPercent
//     return `Your Total tip is : ${totalTip}`
// }

// let tipAmount = getTip(500, .01)
// console.log(tipAmount)

//Method 2

// let getTip = function (total = 0, tipPercent = 0.2){
//     let totalTip = total * tipPercent
//     let percent = tipPercent * 100
//     return `A ${percent}% tip on $${total} would be $${totalTip}`
// }

// let tipAmount = getTip(200)
// console.log(tipAmount)

//Method 3
let getTip = function (total = 0, tipPercent = 0.2){
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
}

let tipAmount = getTip(200)

console.log(tipAmount)