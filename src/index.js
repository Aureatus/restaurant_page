import { pageload } from "./pageload";
import {homepageload} from "./homepage"
import {contactpageload} from "./contactpage"
import {menupageload} from "./menupage"
pageload()

const homeButton = document.getElementById("home")
const contactButton = document.getElementById("contact")
const menuButton = document.getElementById("menu")

homeButton.addEventListener("click", () => {
    homepageload()
})

contactButton.addEventListener("click", () => {
    contactpageload()
})

menuButton.addEventListener("click", () => {
    menupageload()
})