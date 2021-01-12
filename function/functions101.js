
let convertFahrenheitToCelsius = function (fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9
    return celsius
}

let value = convertFahrenheitToCelsius(32)
let otherValue = convertFahrenheitToCelsius(68)

console.log(value);
console.log(otherValue)