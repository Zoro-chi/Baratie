import {home} from "./home"
import {contact} from "./contact"


const header = document.querySelector("#header")
const navBar = document.createElement("ul")

const homeTab = document.createElement("li")
const homeLink = document.createElement("a")
homeLink.setAttribute("href", "#home")
homeLink.textContent = "Home"
homeTab.appendChild(homeLink)

const menuTab = document.createElement("li")
const menuLink = document.createElement("a")
menuLink.setAttribute("href", "#menu")
menuLink.textContent = "Menu"
menuTab.appendChild(menuLink)

const contactTab = document.createElement("li")
const contactLink = document.createElement("a")
contactLink.setAttribute("href", "#contact")
contactLink.textContent = "Contact"
contactTab.appendChild(contactLink)

navBar.appendChild(homeTab)
navBar.appendChild(menuTab)
navBar.appendChild(contactTab)
header.appendChild(navBar)



const changePage = (() => {

    homeTab.addEventListener("click", ()=>{
        home()
    })

    menuTab.addEventListener("click", ()=>{
        menu()
    })

    contactTab.addEventListener("click", ()=>{
        contact()
    })

})()

home()

console.log("Hello World!")