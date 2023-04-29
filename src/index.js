const body = document.querySelector('body')
const container = document.createElement("div")
container.setAttribute("id", "container")
body.append(container)

//Header

const header = document.createElement("header")
header.textContent = 'Wines'
header.setAttribute("id", "headerMenu")
const h1 = document.createElement("h1")
h1.setAttribute("id", "title")
const buttons = document.createElement("div")
buttons.classList.add("buttons")
header.append(buttons)
let buttonOfHeader0 = document.createElement("button")
let buttonOfHeader1 = document.createElement("button")
let buttonOfHeader2 = document.createElement("button")
 buttonOfHeader0.textContent = "Home"
 buttonOfHeader1.textContent = "Menu"
 buttonOfHeader2.textContent = "Contect"
buttons.append(buttonOfHeader0)
buttons.append(buttonOfHeader1)
buttons.append(buttonOfHeader2)


//Main
const main = document.createElement("main")
main.setAttribute("id", "mainContent")

//Home Page 

import { section } from "./home"

main.append(section)

//Menu
import { menuBlock } from "./menu"


//Contact 
 import { contactMe } from "./contact"



function changeContent(contant) {
 if(contant ==="home") {
  section.style.display = "inline"
  menuBlock.style.display = "none"
  contactMe.style.display = "none"
 }
 if(contant === "menu"){
    menuBlock.style.display = "flex"
    section.style.display = "none"
    contactMe.style.display = "none"
    main.append(menuBlock)


 }
 if(contant =="contact") {
    contactMe.style.display = "inline"
    menuBlock.style.display = "none"
    section.style.display = "none"
    main.append(contactMe)
 }
}

 

buttonOfHeader0.addEventListener("click", ()=>{
    changeContent("home")
    
})

buttonOfHeader1.addEventListener("click", ()=>{
    changeContent("menu")


})

buttonOfHeader2.addEventListener("click", ()=>{
    changeContent("contact")
 
})

container.append(header)
container.append(main)

