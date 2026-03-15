const params = new URLSearchParams(window.location.search)

const id = params.get("id")

function saveInfo(){

let notes = document.getElementById("notes").value
let link = document.getElementById("link").value

let activities = JSON.parse(localStorage.getItem("activities") || "{}")

activities[id] = {
notes:notes,
link:link
}

localStorage.setItem("activities", JSON.stringify(activities))

alert("Salvato")

}