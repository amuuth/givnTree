import React from 'react';
import Slot from './slotDisplay'

function Slots() {

    let slots = [
        { start: "9:00 AM", end: "10:00 AM" },
        { start: "10:00 AM", end: "11:00 AM" },
        { start: "12:00 AM", end: "1:00 PM" },
        { start: "1:00 PM", end: "2:00 PM" },
        { start: "2:00 PM", end: "3:00 PM" },
        { start: "3:00 PM", end: "4:00 PM" },
        { start: "4:00 PM", end: "5:00 PM" },
        { start: "5:00 PM", end: "6:00 PM" },
    ]

    function clickHandler(idx) {
        console.log(idx)

    }

    return (
        <div className="slots-container">
            {slots.map((slot, idx) => <Slot start={slot.start} end={slot.end}> <div className="slot" key={slot.id} onClick={() => clickHandler(idx)}>   </div> </Slot>)}
        </div>

    )

}


export default Slots 