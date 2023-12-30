let date = new Date()

// My age

const ageHTML = document.querySelector("#age")
let currentYear = date.getFullYear()
const birthday = 2005
let myAge = currentYear - birthday

ageHTML.textContent = myAge

// Greeting
const greetingHTML = document.querySelector("#greeting")
let currentHour = date.getHours()

if (currentHour >= 5 && currentHour < 12) {
    greetingHTML.textContent = "Bom dia"
} else if (currentHour >= 12 && currentHour < 18) {
    greetingHTML.textContent = "Boa tarde"
} else if (currentHour >= 18 || currentHour < 5) {
    greetingHTML.textContent = "Boa noite"
}