import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// REDUX STUFF HERE
import {createStore} from 'redux'
import {Provider} from 'react-redux'

// Below is a reducer (function definition)
// The return value of our reducer becomes our global state
let initialState = {
  teas: []
}

let teaReducer = (state = initialState, action) => {
  switch(action.type) {
    default: 
      return state
  }
}

let storeObj = createStore(teaReducer)
console.log(storeObj.getState())

ReactDOM.render(
  <Provider store={storeObj}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
