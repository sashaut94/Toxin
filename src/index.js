import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from "react-router-dom"
import {applyMiddleware, compose, createStore} from "redux"
import {Provider} from "react-redux"
import rootReducer from "./store/reducers/rootReducer"
import thunk from "redux-thunk"

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const app = <Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </BrowserRouter>
</Provider>

ReactDOM.render(app,
  document.getElementById('root')
);

reportWebVitals();
