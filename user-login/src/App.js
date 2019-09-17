import React from 'react';
import logo from './logo.svg';
import './App.css';

//import components
import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='loginForm'>
        <div className='FormBody'>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;
