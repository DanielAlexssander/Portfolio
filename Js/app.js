const ageHTML = document.querySelector("#age")
let date = new Date()
let currentYear = date.getFullYear()
const birthday = 2005
let myAge = currentYear - birthday

ageHTML.textContent = myAge