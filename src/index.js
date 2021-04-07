import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore ,combineReducers} from "redux";
import { Provider } from 'react-redux';
import rootReducer from "./reducer.js"
//Provider->redux ke data puri applicatio ke anadr flow karega

const store=createStore(combineReducers({
  ctr:rootReducer,
 // res:resultsReducers
  //below jaha thunk  pass kar rahe waha pehle logger tha jb ham async code middleware logger se kar rahe the
  
}))

//const store=createStore(rootReducer);
//console.log(store)
ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
