import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//a header comp
const Header = () =>{
return <h1>Welcome to my website</h1>
}

//a button comp
const Button = () =>{
return <button>Click me!</button>
}

//a app comp
// const App = () =>{
//   return(
//     <div>
//       <Header/>
//       <Button/>
//     </div>
//   )
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const root = ReactDOM.render(<App/>, document.getElementById("root"))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
