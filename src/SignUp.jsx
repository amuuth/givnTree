import React from 'react';


function SignUp(props) {

  return (
    <div>
      <form action="/SignUp" id="SignUp" method="post">
        <label for="name">Username:</label>
        <input type="text" name="name"></input>
        <br></br>
        <label for="email">email:</label>
        <input type="email" name="email"></input>
        <br></br>
        <label for="password">Password</label>
        <input type="password" name="password"></input>
        <br></br>
        <label for="organization">Are you an Organization?</label>
        <input type="checkbox" name="organization"></input>
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default SignUp;
