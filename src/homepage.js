const homepageload = () => {
    let h1 = document.createElement("h1")
    h1.textContent = "LOREM IPSUM DOLOR"
    let img = document.createElement("img")
    img.src = "https://i.picsum.photos/id/247/950/450.jpg?hmac=62HUPh9vGidtkQo9ER5Mp4Zjh0ugq6E8lapTZcNZTIk"
    img.alt = "Lorem Ipsum Image."
    let p = document.createElement("p")
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, ligula et finibus aliquam, eros felis bibendum nunc, sed faucibus neque dolor at orci. Nunc aliquam vestibulum nibh, eget sodales dolor commodo nec. Duis vel ante at sem molestie ullamcorper. Suspendisse potenti. Curabitur pulvinar sem eu tellus suscipit, dapibus blandit orci vulputate. Nunc blandit diam sit amet vehicula iaculis. Nulla malesuada fermentum ipsum, sit amet pretium risus commodo non. Fusce suscipit nibh in quam pharetra, vulputate eleifend dui mattis. Donec eleifend faucibus risus, eu viverra nisi porttitor nec. Pellentesque sed erat vulputate, dictum orci vel, tempus sem"
    p.classList.add("copy")
    let content = document.getElementById("content")
    let header = document.querySelector("header")
    content.appendChild(header)
    content.appendChild(h1)
    content.appendChild(img)
    content.appendChild(p)
    document.getElementById("menu").style.backgroundColor = ""
    document.getElementById("contact").style.backgroundColor = ""
    document.getElementById("home").style.backgroundColor = "#ACFCCC"
}

export {homepageload}