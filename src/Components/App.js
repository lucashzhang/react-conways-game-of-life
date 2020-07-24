import React from 'react';
import Board from './Board';
import Menu from './Menu/Menu';
import '../CSS/App.css';

// import bgmusic from '../assets/NieRAutomataAmusementPark.mp3';

function App() {
  return (
    <div className="lucas-app">
      <Board />
      <Menu />
    </div>
  );
}

export default App;
