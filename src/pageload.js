const pageload = () => {
    let h1 = document.createElement("h1")
    h1.textContent = "LOREM IPSUM DOLOR"
    let img = document.createElement("img")
    img.src = "https://i.picsum.photos/id/247/950/450.jpg?hmac=62HUPh9vGidtkQo9ER5Mp4Zjh0ugq6E8lapTZcNZTIk"
    img.alt = "Lorem Ipsum Image."
    let p = document.createElement("p")
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, ligula et finibus aliquam, eros felis bibendum nunc, sed faucibus neque dolor at orci. Nunc aliquam vestibulum nibh, eget sodales dolor commodo nec. Duis vel ante at sem molestie ullamcorper. Suspendisse potenti. Curabitur pulvinar sem eu tellus suscipit, dapibus blandit orci vulputate. Nunc blandit diam sit amet vehicula iaculis. Nulla malesuada fermentum ipsum, sit amet pretium risus commodo non. Fusce suscipit nibh in quam pharetra, vulputate eleifend dui mattis. Donec eleifend faucibus risus, eu viverra nisi porttitor nec. Pellentesque sed erat vulputate, dictum orci vel, tempus sem"
    p.classList.add("copy")
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
    tabs.append(home,contact,menu)
    content.appendChild(h1)
    content.appendChild(img)
    content.appendChild(p)
}

export {pageload}
