
let convert = function (fahrenheit){
    return {
        fahrenheit : fahrenheit,
        celcius : (fahrenheit - 32) * (5/9),
        kelvin : (fahrenheit + 459.67) * (5/9),
    }
}

// let convertToCelsius = convert(36);
// let convertToKelvin = convert(2);
// let convertToFahrenheit = convert(32)

// console.log(convertToCelsius.celcius);
// console.log(convertToKelvin.kelvin)
// console.log(convertToFahrenheit.fahrenheit)

//OR
let convertTemps =convert(70);
console.log(convertTemps)