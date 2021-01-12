// let max = 20
// let min = 10;
// let randomNum = Math.floor(Math.random() * (max -min + 1)) + min

// console.log(randomNum)

let makeGuess = function (guess){
    let max = 5;
    let min = 1;
    let randomNum = Math.floor(Math.random() * (max -min + 1)) + min;
    return guess === randomNum;
}

console.log(makeGuess(5))
