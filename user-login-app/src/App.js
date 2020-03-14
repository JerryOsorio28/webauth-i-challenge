import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

//import components
import RegisterForm from './components/RegisterForm'
import UsersList from './components/UserList'
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import Welcome from './components/Welcome';

function App() {

  useEffect(() => {
    axios.get('http://localhost:8000/api/users')
        .then(res => console.log(res))
        .catch(err => console.log(err.response))
},[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='loginForm'>
        <div className='FormBody'>
          <Route exact path='/' component={Welcome}/>
          <Route exact path='/login' component={LoginForm}/>
          <Route path='/register' component={RegisterForm}/>
          <PrivateRoute path='/users' component={UsersList} />
        </div>
      </div>
    </div>
  );
}

export default App;
