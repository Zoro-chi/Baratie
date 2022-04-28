
const content = document.querySelector("#content")

const menu = () =>{
    content.textContent = ""

    const menuOverlay = document.createElement("div")
    menuOverlay.classList.add("menuOverlay")
    const menuDiv = document.createElement("div")
    menuDiv.classList.add("menuDiv")

    // ----- SET A
    const setA = document.createElement("div")
    setA.classList.add("card")
    const setAImg = document.createElement("img")
    setAImg.src = "../assets/menu/setG.jpg"
    setAImg. classList.add("setAImg")
    const setAText = document.createElement("h2")
    setAText.classList.add("setAText")
    setAText.innerHTML = "SET A"
    setA.appendChild(setAImg)
    setA.appendChild(setAText)
    menuDiv.appendChild(setA)

    // -------SET B
    const setB = document.createElement("div")
    setB.classList.add("card")
    const setBImg = document.createElement("img")
    setBImg.src = "../assets/menu/setB.jpg"
    setBImg. classList.add("setBImg")
    const setBText = document.createElement("h2")
    setBText.classList.add("setBText")
    setBText.innerHTML = "SET B"
    setB.appendChild(setBImg)
    setB.appendChild(setBText)
    menuDiv.appendChild(setB)

    // ------SET C
    const setC = document.createElement("div")
    setC.classList.add("card")
    const setCImg = document.createElement("img")
    setCImg.src = "../assets/menu/setC.jpg"
    setCImg. classList.add("setCImg")
    const setCText = document.createElement("h2")
    setCText.classList.add("setCText")
    setCText.innerHTML = "SET C"
    setC.appendChild(setCImg)
    setC.appendChild(setCText)
    menuDiv.appendChild(setC)

    // -----SET D
    const setD = document.createElement("div")
    setD.classList.add("card")
    const setDImg = document.createElement("img")
    setDImg.src = "../assets/menu/setD.jpg"
    setDImg. classList.add("setDImg")
    const setDText = document.createElement("h2")
    setDText.classList.add("setDText")
    setDText.innerHTML = "SET D"
    setD.appendChild(setDImg)
    setD.appendChild(setDText)
    menuDiv.appendChild(setD)

    // ----SET E
    const setE = document.createElement("div")
    setE.classList.add("card")
    const setEImg = document.createElement("img")
    setEImg.src = "../assets/menu/setE.jpg"
    setEImg. classList.add("setEImg")
    const setEText = document.createElement("h2")
    setEText.classList.add("setEText")
    setEText.innerHTML = "SET E"
    setE.appendChild(setEImg)
    setE.appendChild(setEText)
    menuDiv.appendChild(setE)

    // -----SET F
    const setF = document.createElement("div")
    setF.classList.add("card")
    const setFImg = document.createElement("img")
    setFImg.src = "../assets/menu/setF.jpg"
    setFImg. classList.add("setFImg")
    const setFText = document.createElement("h2")
    setFText.classList.add("setFText")
    setFText.innerHTML = "SET F"
    setF.appendChild(setFImg)
    setF.appendChild(setFText)
    menuDiv.appendChild(setF)

    // -----SOJU
    const soju = document.createElement("div")
    soju.classList.add("card")
    const sojuImg = document.createElement("img")
    sojuImg.src = "../assets/menu/soju2.jpg"
    sojuImg. classList.add("sojuImg")
    const sojuText = document.createElement("h2")
    sojuText.classList.add("sojuText")
    sojuText.innerHTML = "SOJU"
    soju.appendChild(sojuImg)
    soju.appendChild(sojuText)
    menuDiv.appendChild(soju)

    // ----COLA
    const cola = document.createElement("div")
    cola.classList.add("card")
    const colaImg = document.createElement("img")
    colaImg.src = "../assets/menu/cola.jpg"
    colaImg. classList.add("colaImg")
    const colaText = document.createElement("h2")
    colaText.classList.add("colaText")
    colaText.innerHTML = "COLA"
    cola.appendChild(colaImg)
    cola.appendChild(colaText)
    menuDiv.appendChild(cola)

    // ----SAKE
    const sake = document.createElement("div")
    sake.classList.add("card")
    const sakeImg = document.createElement("img")
    sakeImg.src = "../assets/menu/sake.jpg"
    sakeImg. classList.add("sakeImg")
    const sakeText = document.createElement("h2")
    sakeText.classList.add("sakeText")
    sakeText.innerHTML = "SAKE"
    sake.appendChild(sakeImg)
    sake.appendChild(sakeText)
    menuDiv.appendChild(sake)
    

    menuOverlay.appendChild(menuDiv)
    content.appendChild(menuOverlay)
    
}

export {menu}