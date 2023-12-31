let date = new Date()

// My age

const ageHTML = document.querySelector("#age")
let currentDate = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

let currentYears = 0
if (currentMonth >= 8 && currentDate >= 16) {
    currentYear = date.getFullYear() + 1;
    currentYears = 2005;
} else {
    currentYear = date.getFullYear();
    currentYears = 2006;
}
let currentYearOld = date.getFullYear();
let myAge = currentYearOld - currentYears;

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
