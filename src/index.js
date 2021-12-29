import { pageload } from "./pageload";
import {homepageload} from "./homepage"
import {contactpageload} from "./contactpage"
import {menupageload} from "./menupage"
pageload()

const homeButton = document.getElementById("home")
const contactButton = document.getElementById("contact")
const menuButton = document.getElementById("menu")

const removeFunction = () => {
    let content = document.getElementById("content")
    let header = document.querySelector("header")
    let contentArray = Array.from(content.children)
    contentArray.forEach(element => {
        if (element === header) {
            return
        }
        else element.remove()
    })
}
homeButton.addEventListener("click", () => {
    removeFunction()
    homepageload()
})

contactButton.addEventListener("click", () => {
    removeFunction()
    contactpageload()
})

menuButton.addEventListener("click", () => {
    removeFunction()
    menupageload()
})