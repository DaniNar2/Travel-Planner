document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');

    // Array globale dei giorni selezionati
    window.selectedDates = [];

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        select: function(info) {
            // Prendi i valori dagli input time
            const arrival = document.getElementById('arrivalTime').value;
            const departure = document.getElementById('departureTime').value;

            // Aggiungi la data selezionata all'array
            window.selectedDates.push({
                date: info.startStr,
                arrival: arrival,
                departure: departure
            });

            // Notifica visiva
            alert(`Giorno aggiunto: ${info.startStr} dalle ${arrival} alle ${departure}`);
        }
    });

    calendar.render();
});