
const content = document.querySelector("#content")

const contact = () => {
    content.textContent = ""
    
    const contactMainDiv = document.createElement("div")
    contactMainDiv.classList.add("contactMainDiv")

    const phoneDiv = document.createElement("div")
    phoneDiv.classList.add("phone")
    const phoneIcon = document.createElement("img")

    phoneIcon.src = "../assets/phone.png"
    const phoneSpan = document.createElement("span")
    const phone = document.createElement("h2")
    phone.textContent = "+234-567-8909-123"

    phoneSpan.appendChild(phoneIcon)
    phoneDiv.appendChild(phoneSpan)
    phoneDiv.appendChild(phone)
    contactMainDiv.appendChild(phoneDiv)
    content.appendChild(contactMainDiv)

    const addressDiv = document.createElement("div")
    addressDiv.classList.add("address")
    const addressIcon = document.createElement("img")
    addressIcon.src = "../assets/address.png"
    const addressSpan = document.createElement("span")
    const address = document.createElement("h2")
    address.textContent = "Sambas region, in East blue, close to the Grand line entrance."
    const addressMap = document.createElement("img")
    addressMap.src = "../assets/map.jpg"
    const addressMapDiv = document.createElement("div")
    addressMapDiv.classList.add("map")
    const addandicon = document.createElement("div")
    addandicon.classList.add("addandicon")

    addressSpan.appendChild(addressIcon)
    addandicon.appendChild(addressSpan)
    addandicon.appendChild(address)
    addressDiv.appendChild(addandicon)
    addressMapDiv.appendChild(addressMap)
    addressDiv.appendChild(addressMapDiv)
    contactMainDiv.appendChild(addressDiv)
}

export {contact}