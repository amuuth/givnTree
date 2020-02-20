import React from 'react';
import Event from './eventDisplay.jsx';

function Events() {

let events = [
    { id: 10001, name: "food bank", description: "this job sucks", start: "9:00 AM", end: "6:00 PM" },
    { id: 10002, name: "animal shelter", description: "play with dog", start: "10:00 AM", end: "5:00 PM" },
    { id: 10003, name: "hospital", description: "volunteer at this hospital please", start: "3:00 AM", end: "2:00 PM" },
    { id: 10004, name: "museum", description: "guide people to exhibit!!!", start: "11:00 AM", end: "7:00 PM" }
]

    function clickHandler(idx) {
        console.log(idx)

    }

    return (
        <div className="events-container">

            {events.map((event, idx) => <Event name={event.name} description={event.description} start={event.start} end={event.end}> <div className="event" key={event.id} onClick={() => clickHandler(event.id)}>   </div> </Event> )}
            
            <Event title={events[0].name}> This works!</Event>
            <Event title="Header">Testing
            
            </Event>
        </div>

    )

}

export default Events