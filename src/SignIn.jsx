import React from 'react';


function SignIn(props) {

  return (
    <div>
      <form action="/SignIn" id="SignIn" method="get">
        <label for="name">Username:</label>
        <input type="text" name="name"></input>
        <br></br>
        <label for="password">Password</label>
        <input type="password" name="password"></input>
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default SignIn;
