import {pageLoad} from "./home"

const header = document.querySelector("#header")
const navBar = document.createElement("ul")

const home = document.createElement("li")
const homeLink = document.createElement("a")
homeLink.setAttribute("href", "#home")
homeLink.textContent = "Home"
home.appendChild(homeLink)

const menu = document.createElement("li")
const menuLink = document.createElement("a")
menuLink.setAttribute("href", "#menu")
menuLink.textContent = "Menu"
menu.appendChild(menuLink)

const contact = document.createElement("li")
const contactLink = document.createElement("a")
contactLink.setAttribute("href", "#contact")
contactLink.textContent = "Contact"
contact.appendChild(contactLink)

navBar.appendChild(home)
navBar.appendChild(menu)
navBar.appendChild(contact)
header.appendChild(navBar)

pageLoad()

console.log("Hello World!")