import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
import PlayerCard from './components/PlayerCard';




class App extends React.Component {
  constructor(){
    super();
  this.state = {
    players: []
  };
}
    componentDidMount(){
      fetch(`http://localhost:5000/api/players`)
      .then(response => response.json())
      .then(playerData => {
          this.setState({
            ...this.state, players: playerData
          })
          console.log(playerData)
      })
      .catch(err => {console.log('No such player', err)})
    };
    
  render(){
  return (
    <div className="App">
      <NavBar/>
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
  }
}

export default App;


// function App() {
//   const [playerData,setPlayerData]=useState([])
//   const FetchPlayerData=()=>{
//   fetch(`http://localhost:5000/api/players`)

//     // const [playerData,setPlayerData] =useFectch(
//     //   "http://localhost:5000/api/players"
//     //   )
//   .then(response => response.json())
//   // .then(playerData => { }
  
//     console.log(playerData)
  
//   .catch(err => {console.log('No data for player', err)})
//       }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>

//       <Navbar/>{this.state.players.map(e => {
//         return(
//         <PlayerCard
//           name={e.name}
//           country={e.country}
//           searches={e.searches}
//         />
//         );
//       })}
//     </div>
//   );
//   }
// export default App;
