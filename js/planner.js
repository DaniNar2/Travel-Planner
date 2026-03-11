function createPlanning(){

const name = document.getElementById("name").value
const arrival = new Date(document.getElementById("arrival").value)
const departure = new Date(document.getElementById("departure").value)

let schedule = []

let current = new Date(arrival)

while(current < departure){

schedule.push({
time: current.toLocaleString(),
activity: ""
})

current.setHours(current.getHours()+1)
}

displaySchedule(schedule)

savePlanning(name,arrival,departure,schedule)
}

function displaySchedule(schedule){

let html="<table>"
html+="<tr><th>Orario</th><th>Attività</th></tr>"

schedule.forEach((slot,i)=>{

html+=`
<tr>
<td>${slot.time}</td>
<td contenteditable="true"></td>
</tr>
`
})

html+="</table>"

document.getElementById("schedule").innerHTML=html
}

function savePlanning(name,arrival,departure,schedule){

let plannings=getPlannings()

let planning={
id:Date.now(),
name:name,
arrival:arrival,
departure:departure,
schedule:schedule,
places:[],
food:[],
transport:[]
}

plannings.push(planning)

savePlannings(plannings)

}