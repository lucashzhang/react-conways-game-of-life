import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './Components/App';
import Board from './Components/Board'
import Menu from './Components/Menu'
import * as serviceWorker from './serviceWorker';
import initStore from './ReduxUtil';
import { Provider } from 'react-redux';

const store = initStore();
window.store = store;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div style={{display: "flex", flexDirection: "row"}}>
        <Board />
        <Menu />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
