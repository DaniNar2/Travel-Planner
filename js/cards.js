function createCard(){

let title = document.getElementById("cardTitle").value
let type = document.getElementById("cardType").value

if(!title) return

let id = Date.now()

let card = {
id:id,
title:title,
type:type
}

let cards = JSON.parse(localStorage.getItem("cards") || "[]")
cards.push(card)

localStorage.setItem("cards", JSON.stringify(cards))

renderCards()

}

function renderCards(){

let cards = JSON.parse(localStorage.getItem("cards") || "[]")

let html=""

cards.forEach(c=>{

html += `
<div class="card" draggable="true" ondragstart="drag(event)" id="card-${c.id}">

${c.title}

<button onclick="openCard(${c.id})">ℹ️</button>

</div>
`

})

document.getElementById("cardsContainer").innerHTML = html

}

function openCard(id){

window.location.href="activity.html?id="+id

}

renderCards()