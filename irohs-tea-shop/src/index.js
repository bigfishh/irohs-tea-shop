import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './redux/Reducers/rootReducer'

// ROUTING STUFF HERE
import {BrowserRouter} from 'react-router-dom'

// REDUX STUFF HERE
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(
  rootReducer,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


