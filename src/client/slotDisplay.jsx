import React from 'react';

function Slot (props) {

    return (
        <div className="slot">Time: {props.start} - {props.end}</div>
    )
}

export default Slot