function getPlannings(){

let data = localStorage.getItem("plannings")

if(data == null){
return []
}

return JSON.parse(data)
}

function savePlannings(plannings){
localStorage.setItem("plannings", JSON.stringify(plannings))
}