
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    const number = Number(document.getElementById("number-el").value)
    
    calculateLength(number)
    calculateVolume(number)
    calculateMass(number)
})

function calculateLength(value) {
    const length = document.getElementById("length")
    let feet = value * 3.281
    let meter = value / 3.281
    // 20 meters = 65.616 feet | 20 feet = 6.096 meters
    length.innerHTML += `<p> ${value} meters = ${feet.toFixed(3)} feet | ${value} feet = ${meter.toFixed(3)} meters`
}

function calculateVolume(value) {
    const volume = document.getElementById("volume")
    let gallons = value * 0.264
    let liters = value / 0.264
    // 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
    volume.innerHTML += `<p> ${value} liters = ${gallons.toFixed(3)} gallons | ${value} gallons = ${liters.toFixed(3)} liters`
}

function calculateMass(value) {
    const mass = document.getElementById("mass")
    let pounds = value * 2.204
    let kilos = value / 2.204
    // 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
    mass.innerHTML += `<p> ${value} kilos = ${pounds.toFixed(3)} pounds | ${value} pounds = ${kilos.toFixed(3)} kilos`
}