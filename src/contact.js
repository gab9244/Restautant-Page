const contactMe = document.createElement("div")
contactMe.setAttribute("id", "contact")

const wines = `our wines are made from the best selected grapes and remember.  " 
Home is where the wine is" `
contactMe.append(wines)
const link = document.createElement("a")
link.href = "https://github.com/gab9244"
const linkText = "Github"
link.append(linkText)
contactMe.append(link)
export {
    contactMe
}