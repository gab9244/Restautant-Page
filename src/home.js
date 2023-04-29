const section = document.createElement("section")
section.setAttribute("id", "Home")
const  p = document.createElement("p")
p.textContent = "Over a millennium of experience"
const buttonOfmain = document.createElement("button")
buttonOfmain.textContent = "Read more"
section.append(p)
section.append(buttonOfmain)
export {section}