
const content = document.querySelector("#content")

const pageLoad = () => {

    const mainContainer = document.createElement("div")
    mainContainer.classList.add("main")
    const imgDiv = document.createElement("div")
    imgDiv.classList.add("img")
    const image = document.createElement("img")
    const headline = document.createElement("h2")
    headline.classList.add("headline")
    const about = document.createElement("p")
    about.classList.add("about")

    image.src = "../assets/sushi.jpg"
    imgDiv.appendChild(image)
    mainContainer.appendChild(imgDiv)

    headline.textContent = "The best Sushi in the 'New World' "
    mainContainer.appendChild(headline)

    about.textContent = "If you are hungry come! Eat! Have your fill! We serve everyone equally, at our low affordable prices"
    mainContainer.appendChild(about)

    content.appendChild(mainContainer)

}

export {pageLoad} 
