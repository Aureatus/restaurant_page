const menupageload = () => {
    let h1 = document.createElement("h1")
    h1.textContent = "MENU"
    let milkshakeHeader = document.createElement("h2")
    milkshakeHeader.textContent = "Mint milkshake"
    let yoghurtHeader = document.createElement("h2")
    yoghurtHeader.textContent = "Mint yoghurt"
    let icecreamHeader = document.createElement("h2")
    icecreamHeader.textContent = "Mint icecream"
    let milkshakeImg = document.createElement("img")
    milkshakeImg.src = "https://images.unsplash.com/photo-1586985288206-3cdc4f67cd03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
    milkshakeImg.alt = "Image of a mint milkshake."
    milkshakeImg.width = "300"
    milkshakeImg.height = "400"
    let yoghurtImg = document.createElement("img")
    yoghurtImg.src = "https://images.unsplash.com/photo-1555791902-2bd22de5cd9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    yoghurtImg.alt = "Image of a mint yoghurt."
    yoghurtImg.width = "300"
    yoghurtImg.height = "400"
    let icecreamImg = document.createElement("img")
    icecreamImg.src = "https://images.unsplash.com/photo-1534706936160-d5ee67737249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    icecreamImg.alt = "Image of mint icecream."
    icecreamImg.width = "300"
    icecreamImg.height = "400"
    let imgCredit = document.createElement("p")
    imgCredit.textContent = "Images from unsplashed.com"
    let content = document.getElementById("content")
    let header = document.querySelector("header")
    content.appendChild(header)
    content.appendChild(h1)
    content.appendChild(milkshakeHeader)
    content.appendChild(milkshakeImg)
    content.appendChild(yoghurtHeader)
    content.appendChild(yoghurtImg)
    content.appendChild(icecreamHeader)
    content.appendChild(icecreamImg)
    content.appendChild(imgCredit)
    document.getElementById("home").style.backgroundColor = ""
    document.getElementById("contact").style.backgroundColor = ""
    document.getElementById("menu").style.backgroundColor = "#ACFCCC"
}

export {menupageload}