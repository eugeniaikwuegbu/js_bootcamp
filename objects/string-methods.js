// let isValidPassword = function(string){
//     if(string.length > 8 && !string.includes('password')){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(isValidPassword('dsje'))
// console.log(isValidPassword('dsje@#%^&&*'))
// console.log(isValidPassword('abc123password'))

//Method 2
let isValidPassword = function (string){
    return string.length > 8 && !string.includes('password')
}

console.log(isValidPassword('dsje'))
console.log(isValidPassword('dsje@#%^&&*'))
console.log(isValidPassword('abc123password'))