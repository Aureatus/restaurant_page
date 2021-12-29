const contactpageload = () => {
    let h1 = document.createElement("h1")
    h1.textContent = "CONTACT US"
    let content = document.getElementById("content")
    content.appendChild(h1)
    let emailText = document.createElement("h3")
    emailText.textContent = "Email: placeholderemail@gmail.com"
    content.appendChild(emailText)
    let phoneText = document.createElement("h3")
    phoneText.textContent = "Phone number: 01234 56789"
    content.appendChild(phoneText)
    document.getElementById("home").style.backgroundColor = ""
    document.getElementById("menu").style.backgroundColor = ""
    document.getElementById("contact").style.backgroundColor = "#ACFCCC"
}

export {contactpageload}