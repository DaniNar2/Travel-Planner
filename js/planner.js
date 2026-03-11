function savePlanning(){
    const name = document.getElementById("name").value;
    if(!name){ alert("Inserisci un nome"); return; }
    if(!window.selectedDates || window.selectedDates.length==0){ alert("Seleziona almeno un giorno"); return; }

    let schedule = {};
    let maxHours = 0;

    // calcolo degli slot per ogni giorno
    window.selectedDates.forEach(d=>{
        const [arrH, arrM] = d.arrival.split(":").map(Number);
        const [depH, depM] = d.departure.split(":").map(Number);

        let slots = [];
        for(let h=arrH; h<=depH; h++){
            slots.push({time: (h<10?"0"+h:h)+":00", activity:""});
        }

        if(slots.length > maxHours) maxHours = slots.length;

        schedule[d.date] = {slots: slots, arrivalH: arrH, departureH: depH};
    });

    // allineamento giorni con celle sbarrate
    Object.keys(schedule).forEach(day=>{
        let s = schedule[day];
        while(s.slots.length < maxHours){
            s.slots.push({time:"-", activity:"", disabled:true});
        }
    });

    // salva il planning nel localStorage
    const plannings = getPlannings();
    plannings.push({
        id: Date.now(),
        name: name,
        arrival: window.selectedDates[0].date,
        departure: window.selectedDates[window.selectedDates.length-1].date,
        schedule: schedule,
        places: [],
        food: [],
        transport: []
    });

    savePlannings(plannings);
    alert("Planning creato!");
    window.location.href = "index.html";
}