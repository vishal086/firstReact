import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <App />
</React.StrictMode>  ///// Inbuild code for react




  // [<h1> Hello world !</h1>,
  // <p>This is my first react app</p>],
  // document.getElementById('root')
);






// // /* 1 */
// ReactDOM.render(
//   <h1>Vishal Gautam</h1>
//   ,document.getElementById('root') 
// );

// /* 2nd */
// React.ReactDOM.render(React.createElement("h1",null,"Vishal Gautam"),document.getElementById('root'));

// // /* 3rd */
// var h1 = document.getElementById('h1');
// h1.innerHTML = "Hello world";
// document.getElementById('root').appendChild(h1);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
