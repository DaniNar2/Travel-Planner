document.addEventListener("DOMContentLoaded", function () {

let calendarEl = document.getElementById("calendar")

window.selectedDates = []

let calendar = new FullCalendar.Calendar(calendarEl, {

initialView: "dayGridMonth",

selectable: true,

dateClick: function(info){

let arrival = document.getElementById("arrivalTime").value
let departure = document.getElementById("departureTime").value

window.selectedDates.push({
date: info.dateStr,
arrival: arrival,
departure: departure
})

alert("Giorno aggiunto: " + info.dateStr)

}

})

calendar.render()

})