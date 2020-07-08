import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./Storage/Store";
import {baseRequest} from "./Storage/ActionCreators";

store.dispatch(baseRequest())
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

document.getElementById('root').addEventListener("keyup", function(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
        store.dispatch(baseRequest(store.getState().input))
    }
})
