document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');

    window.fc = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        select: function(info) {
            let arrival = prompt("Ora di arrivo (HH:MM)?","10:00");
            let departure = prompt("Ora di partenza (HH:MM)?","18:00");
            if(!window.selectedDates) window.selectedDates = [];
            window.selectedDates.push({
                date: info.startStr,
                arrival: arrival,
                departure: departure
            });
            alert("Giorno aggiunto: "+info.startStr);
        }
    });

    fc.render();
});