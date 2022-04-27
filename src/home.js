
const content = document.querySelector("#content")

const home = () => {

    content.textContent = ""

    const mainContainer = document.createElement("div")
    mainContainer.classList.add("main")
    const imgDiv = document.createElement("div")
    imgDiv.classList.add("img")
    const image = document.createElement("img")
    image.classList.add("welcome")
    const headline = document.createElement("h2")
    headline.classList.add("headline")
    const about = document.createElement("p")
    about.classList.add("about")
    const overlay = document.createElement("div")
    overlay.classList.add("overlay")
    const name = document.createElement("h1")
    


    

    image.src = "../assets/chef1.jpg"
    imgDiv.appendChild(image)
    mainContainer.appendChild(imgDiv)

    headline.textContent = "The best Sushi in the 'ALL BLUE'"
    mainContainer.appendChild(headline)

    about.textContent = "If you're hungry? Come, EAT! Have your fill! We serve everyone equally, at our low prices"
    mainContainer.appendChild(about)

    name.textContent = "Baratie"
    mainContainer.prepend(name)
    
    content.appendChild(mainContainer)
    content.appendChild(overlay)

}

export {home} 
