import React from 'react';

// passed props should have Event Information
function EventEdit(props) {

  const times = [];

  for (let hour = 8; hour < 21; hour++) {
    let time;
    if (hour > 12) {
      time = `${hour % 12}:00 PM`
    } else {
      time = `${hour}:00 AM`
    }
    times.push(<option value={time}>{time}</option>)
  }

  return (
    <div>
      <form action="/defaultAction" id="eventForm" method="post">
        <label for="eName">Event Name:</label>
        <input type="text" id="eName" name="eName"></input>
        <br></br>
        <label for="description">Description:</label>
        <textarea id="description" name="description"></textarea>
        <br></br>
        <label for="date">Date:</label>
        <input type="date" id="date" name="date"></input>
        <br></br>
        <label for="startTime">Start Time:</label>
        <select id="startTime" name="eName">
          {times}
        </select>
        <br></br>
        <label for="endTime">End Time:</label>
        <select id="endTime" name="endTime">
          {times}
        </select>
        <br></br>
        <label for="peopleCount">Number of People:</label>
        <input type="number" id="peopleCount" name="peopleCount" min={1}></input>
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default EventEdit
