const menuBlock = document.createElement("div")
menuBlock.setAttribute("id", "menublockStyle")

const card = document.createElement("div")
card.setAttribute("id", "cardStyle")

const cardTitle = document.createElement("p")
cardTitle.textContent = "PEFOLDS"
card.append(cardTitle) 
const cardsImage = document.createElement("div")
cardsImage.setAttribute("id", "cardsImage")

const cardButton = document.createElement("button")
cardButton.textContent = "More Info"
cardButton.setAttribute("class", "cardButtonStyle")
card.append(cardsImage)
card.append(cardButton)



const card1 = document.createElement("div")
card1.setAttribute("id", "card1Style")

const card1Title = document.createElement("p")
card1Title.textContent = "GRANGE"
card1.append(card1Title)

const cardsImage1 = document.createElement("div")
cardsImage1.setAttribute("id", "cardsImage1")

const cardButton1 = document.createElement("button")
cardButton1.textContent = "More Info"
cardButton1.setAttribute("class", "cardButtonStyle")

card1.append(cardsImage1)
card1.append(cardButton1)

const card2 = document.createElement("div")
card2.setAttribute("id", "card2Style")

const card2Title = document.createElement("p")
card2Title.textContent = "SHCHLOSS" 
card2.append(card2Title)


const cardsImage2 = document.createElement("div")
cardsImage2.setAttribute("id", "cardsImage2")

const cardButton2 = document.createElement("button")
cardButton2.textContent = "More Info"
cardButton2.setAttribute("class", "cardButtonStyle")

card2.append(cardsImage2)
card2.append(cardButton2)


const card3 = document.createElement("div")
card3.setAttribute("id", "cardStyle")

const card3Title = document.createElement("p")
card3Title.textContent = "PEFOLDS"
card3.append(card3Title) 
const cardsImage3 = document.createElement("div")
cardsImage3.setAttribute("id", "cardsImage")

const cardButton3 = document.createElement("button")
cardButton3.textContent = "More Info"
cardButton3.setAttribute("class", "cardButtonStyle")
card3.append(cardsImage3)
card3.append(cardButton3)


menuBlock.append(card,card1,card2,card3)

export {menuBlock}