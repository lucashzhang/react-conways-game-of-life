import React from 'react';
import Board from './Board';
import Menu from './Menu';
import '../CSS/App.css';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Board />
      <Menu />
    </div>
  );
}

export default App;
