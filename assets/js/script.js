let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
let displayFahrenheit = document.getElementById("fahrenheit");
let displayCelsius = document.getElementById("celsius");

let inputFahrenheit = document.getElementById("inputFahrenheit");
let outputCelsius = document.getElementById("outputCelsius")

console.log("Fahrenheit: " + fahrenheit);

// let celsius = fahrenheit.map(function(e){
//     return Math.round((e-32)/1.8)
// })

let celsius = fahrenheit.map(function(e){
    return ((e-32)/1.8).toFixed(2)
})
console.log("Celsius: " + celsius);

displayFahrenheit.innerHTML=`<li>${fahrenheit.join(" °F</li><li>")}°F</li>`
displayCelsius.innerHTML=`<li>${celsius.join(" °C</li><li>")}°C</li>`

function fahrenheitToCelsius() {
    outputCelsius.innerHTML=((inputFahrenheit.value-32)/1.8).toFixed(1)+" °C"
}