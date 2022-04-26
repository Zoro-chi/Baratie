
const content = document.querySelector("#content")

const home = () => {

    const mainContainer = document.createElement("div")
    mainContainer.classList.add("main")
    const imgDiv = document.createElement("div")
    imgDiv.classList.add("img")
    const image = document.createElement("img")
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

    about.textContent = "If you are hungry come! Eat! Have your fill! We serve everyone equally, at our low affordable prices"
    mainContainer.appendChild(about)

    name.textContent = "Baratie"
    mainContainer.prepend(name)
    
    content.appendChild(mainContainer)
    content.appendChild(overlay)

}

export {home} 
