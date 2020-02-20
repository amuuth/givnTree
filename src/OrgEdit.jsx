import React from 'react';


function OrgEdit(props) {

  return (
    <div>
      <form action="/defaultAction" id="UserForm" method="post">
        <label for="name">Name:</label>
        <input type="text" name="name"></input>
        <br></br>
        <label for="description">Description:</label>
        <textarea name="description"></textarea>
        <br></br>
        <label for="email">Email:</label>
        <input type="email" name="email"></input>
        <br></br>
        <label for="password">Password</label>
        <input type="password" name="password"></input>
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default OrgEdit;
