import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import PlayerCard from './components/PlayerCard';



function App() {


  // fetch(`http://localhost:5000/api/players`)
  // .then(response => response.json())
  // .then(playerData => {
  
   
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Navbar/>
      {this.state.players.map(e => {
        return(
        <PlayerCard
          name={e.name}
          country={e.country}
          searches={e.searches}
        />
        );
      })}
    </div>
  );

export default App;
