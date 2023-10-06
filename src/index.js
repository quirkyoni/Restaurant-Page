import './style.css';
import { home } from './home.js'
import { menu } from './menu.js'
import { contact } from './contact'

const body = document.querySelector("body")
const content = document.getElementById("content")

// Navigation Bar
const navBar = document.createElement("div")
navBar.className = "navBar"

const nav = document.createElement("nav")

const homePage = document.createElement("div")
homePage.className = "home"
homePage.textContent = "Home"
nav.appendChild(homePage)
const menuPage = document.createElement("div")
menuPage.className = "menu"
menuPage.textContent = "Menu"
nav.appendChild(menuPage)
const contactPage = document.createElement("div")
contactPage.className = "contact"
contactPage.textContent = "Contact"
nav.appendChild(contactPage)

navBar.appendChild(nav)

body.insertBefore(navBar, body.firstChild)

home()

// Tab-switching Logic
nav.addEventListener("click", (e) => {
    console.log(e.target.className)
    if (e.target.className == "home") {
        content.textContent = ""
        home()
    }
    if (e.target.className == "menu") {
        content.textContent = ""
        menu()
    }
    if (e.target.className == "contact") {
        content.textContent = ""
        contact()
    }
})