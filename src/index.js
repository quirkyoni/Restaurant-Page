import './style.css';
import { home } from './home.js'

const content = document.getElementById("content")

const navBar = document.createElement("div")
navBar.className = "navBar"

const nav = document.createElement("nav")


const homePage = document.createElement("div")
homePage.className = "home"
homePage.textContent = "Home"
nav.appendChild(homePage)
const contactPage = document.createElement("div")
contactPage.className = "contact"
contactPage.textContent = "Contact"
nav.appendChild(contactPage)
const menuPage = document.createElement("div")
menuPage.className = "menu"
menuPage.textContent = "Menu"
nav.appendChild(menuPage)

navBar.appendChild(nav)

content.appendChild(navBar)

home();
