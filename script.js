const ImageInput = document.getElementById("ImageInput")
const AddLink = document.getElementById("Add")
const RemoveLink = document.getElementById("Remove")

const FirstColorButton = document.getElementById("BackgroundFirstColor")
const SecondColorButton = document.getElementById("BackgroundSecondColor")
const MainColorButton = document.getElementById("MainColor")
const LinkColorButton = document.getElementById("LinkColor")

const SecondColorInput = document.getElementById("SecondColorInput")
const FirstColorInput = document.getElementById("FirstColorInput")
const MainColorInput = document.getElementById("MainColorInput")
const LinkColorInput = document.getElementById("LinkColorInput")

const Main = document.querySelector("Main")
const Links = document.querySelectorAll(".LinkContainer")

const Body = document.querySelector("body")

var LinksIndex = 4

ImageInput.addEventListener("change", (event) => {
  const Image = event.target.files[0]

  const ImageURL = URL.createObjectURL(Image)

  document.getElementById("Logo").src = ImageURL
})

AddLink.addEventListener("click", (event) => {
    if(LinksIndex<8){
        var Links = document.getElementById("Links")

        const NewLink = document.createElement("div")
        NewLink.className = "LinkContainer"

        NewLink.innerHTML = `
            <input type="text" class="Options" id="LinkText" value="Your link here" onclick="event.preventDefault(); event.stopPropagation();">
            <input type="text" class="Options" id="LinkURL" value="Paste the URL here" onclick="event.preventDefault(); event.stopPropagation();">`

        Links.insertBefore(NewLink, document.getElementById("NewLink"))

        LinksIndex+=1
    }
})

RemoveLink.addEventListener("click", (event) => {
    if(LinksIndex > 1){
        const Link = document.getElementsByClassName("LinkContainer")
        Link[Link.length - 1].remove();
        LinksIndex-=1
    }
})

FirstColorButton.addEventListener("click", (event) => {
    FirstColorInput.click()
})

SecondColorButton.addEventListener("click", (event) => {
    SecondColorInput.click()
})

MainColorButton.addEventListener("click", (event) => {
    MainColorInput.click()
})

LinkColorButton.addEventListener("click", (event) => {
    LinkColorInput.click()
})


FirstColorInput.addEventListener("change", (event) => {
    Body.style.setProperty("--FirstBackgroundColor", FirstColorInput.value)
})

SecondColorInput.addEventListener("change", (event) => {
    Body.style.setProperty("--SecondBackgroundColor", SecondColorInput.value)
})

MainColorInput.addEventListener("change", (event) => {
    Body.style.setProperty("--MainColor", MainColorInput.value)
})

LinkColorInput.addEventListener("change", (event) => {
    Body.style.setProperty("--LinksColor", LinkColorInput.value)
})