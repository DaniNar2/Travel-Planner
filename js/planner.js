function savePlanning(){

const name = document.getElementById("name").value
const arrivalDate = document.getElementById("arrivalDate").value
const departureDate = document.getElementById("departureDate").value
const arrivalTime = document.getElementById("arrivalTime").value
const departureTime = document.getElementById("departureTime").value

if(!name){
alert("Inserisci un nome")
return
}

if(!arrivalDate || !departureDate){
alert("Inserisci le date")
return
}

let schedule = {}

let start = new Date(arrivalDate)
let end = new Date(departureDate)

let maxHours = 0

while(start <= end){

let day = start.toISOString().split("T")[0]

let arrH = parseInt(arrivalTime.split(":")[0])
let depH = parseInt(departureTime.split(":")[0])

let slots=[]

for(let h=arrH; h<=depH; h++){

slots.push({
time:(h<10?"0"+h:h)+":00",
activity:""
})

}

if(slots.length>maxHours) maxHours=slots.length

schedule[day]={
slots:slots,
arrivalH:arrH,
departureH:depH
}

start.setDate(start.getDate()+1)

}

Object.keys(schedule).forEach(day=>{

let s=schedule[day]

while(s.slots.length<maxHours){

s.slots.push({
time:"-",
activity:"",
disabled:true
})

}

})

const plannings=getPlannings()

plannings.push({

id:Date.now(),
name:name,
arrival:arrivalDate,
departure:departureDate,
schedule:schedule,
places:[],
food:[],
transport:[]

})

savePlannings(plannings)

alert("Planning creato!")

window.location.href="index.html"

}