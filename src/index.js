import {home} from "./home"
import {contact} from "./contact"
import {menu} from "./menu"


let page = "home"


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
        if (page !== "home"){
            home()
            page = "home"
            pageMarker()
        }
    })

    menuTab.addEventListener("click", ()=>{
        if (page !== "menu"){
            menu()
            page = "menu"
            pageMarker()
        }
    })

    contactTab.addEventListener("click", ()=>{
        if (page !== "contact"){
            contact()
            page = "contact"
            pageMarker()
        }
    })

})()

const pageMarker = () =>{
    if (page === "home"){
        homeLink.classList.add("page-marker")
        menuLink.classList.remove("page-marker")
        contactLink.classList.remove("page-marker")
    }
    if (page === "menu"){
        menuLink.classList.add("page-marker")
        homeLink.classList.remove("page-marker")
        contactLink.classList.remove("page-marker")
    }
    if (page === "contact"){
        contactLink.classList.add("page-marker")
        homeLink.classList.remove("page-marker")
        menuLink.classList.remove("page-marker")
    }
}

pageMarker()
home()
