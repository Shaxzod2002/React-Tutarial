import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// const hello = <h1>Hello World</h1>

// vaqt oralig'ida jarayon hosil qilish.

// function SetTimeFunction() {
//   const element = (
//     <div>
//       {hello}
//       <h1>{ new Date().toLocaleString() }</h1>
//     </div>
//   )
//   root.render(element)
// }

// setInterval(SetTimeFunction, 1000 )
// Vaqt Qiymati qo'shilganda qayta qayta renderni tekshirish jarayoni.
// function SetTime() {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }

// setInterval(SetTime, 1000)