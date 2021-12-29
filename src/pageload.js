import { homepageload } from "./homepage"
const pageload = () => {
    let tabs = document.createElement("tabs")
    let home = document.createElement("button")
    home.id = "home"
    home.textContent = "Home"
    let contact = document.createElement("button")
    contact.id = "contact"
    contact.textContent = "Contact"
    let menu = document.createElement("button")
    menu.id = "menu"
    menu.textContent = "Menu"
    let content = document.getElementById("content")
    let header = document.createElement("header")
    content.appendChild(header)
    header.appendChild(tabs)
    tabs.append(home,menu,contact)
    home.style.backgroundColor = "#ACFCCC"
    homepageload()
}

export {pageload}
