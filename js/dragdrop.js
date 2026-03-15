function allowDrop(ev){
ev.preventDefault()
}

function drag(ev){
ev.dataTransfer.setData("text", ev.target.id)
}

function drop(ev){

ev.preventDefault()

let data = ev.dataTransfer.getData("text")

let card = document.getElementById(data)

ev.target.appendChild(card)

}