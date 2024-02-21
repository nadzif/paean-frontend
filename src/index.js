import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from './application/store';
import services from './infrastructure/services';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={configureStore(services)}>
    <App />
  </Provider>
);

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(request => {
  // request.headers = {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  //   'Content-Type': 'application/x-www-form-urlencoded',
  // }
  // console.log(request);
  return request;
}, error => {
  // console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  // console.log(response);
  return response;
}, error => {
  // console.log(error);
  return Promise.reject(error);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
