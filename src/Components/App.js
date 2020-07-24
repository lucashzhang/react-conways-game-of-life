import React from 'react';
import Board from './Board';
import Menu from './Menu/Menu';
import '../CSS/App.css';

function App() {
  return (
    <div className="lucas-app">
      <Board />
      <Menu />
      <div id="background"></div>
    </div>
  );
}

export default App;
