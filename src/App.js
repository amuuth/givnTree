import React from 'react';
import logo from './apple.png';
import './App.css';
import Events from './client/eventsContainer.jsx';

function App() {
  return (

    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>THE GIVING TREE</p>
          <p>
            Find Volunteers for Your Organization
        </p>
        </header>
      </div>
      <Events />
    </React.Fragment>
  );
}

export default App;
