const homepageload = () => {
    let h1 = document.createElement("h1")
    h1.textContent = "Alex's Mint Plaza"
    let img = document.createElement("img")
    img.src = "beauty-in-leaves-4-1057701.jpg"
    img.alt = "Lorem Ipsum Image."
    img.width = "850"
    img.height = "500"
    let p = document.createElement("p")
    p.classList.add("copy")
    p.textContent = "Alex's Mint Plaza aims to introduce you to all things mint, delectable delights with one thing in common. From icecream to brownies, we have you covered. All of our products are minty fresh, both in time and in flavour."
    let content = document.getElementById("content")
    content.appendChild(h1)
    content.appendChild(img)
    content.appendChild(p)
    document.getElementById("menu").style.backgroundColor = ""
    document.getElementById("contact").style.backgroundColor = ""
    document.getElementById("home").style.backgroundColor = "#ACFCCC"
}

export {homepageload}