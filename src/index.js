import { pageload } from "./pageload";
import {homepageload} from "./homepage"
import {contactpageload} from "./contactpage"
import {menupageload} from "./menupage"
pageload()

const homeButton = document.getElementById("home")
const contactButton = document.getElementById("contact")
const menuButton = document.getElementById("menu")

homeButton.addEventListener("click", () => {
    document.querySelector("h1").remove()
    document.querySelector("img").remove()
    document.querySelector("p").remove()
    homepageload()
})

contactButton.addEventListener("click", () => {
    document.querySelector("h1").remove()
    document.querySelector("img").remove()
    document.querySelector("p").remove()
    contactpageload()
})

menuButton.addEventListener("click", () => {
    document.querySelector("h1").remove()
    document.querySelector("img").remove()
    document.querySelector("p").remove()
    menupageload()
})