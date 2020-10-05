import React, { createContext, useState } from 'react';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Register from './Register/Register';
import Volunteering from './component/Volunteering/Volunteering';
import PrivateRoute2 from './component/PrivateRoute/PrivateRoute2';
import Admin from './component/Admin/Admin';

export const loginInfo = createContext();

function App() {

  const [login, setLogin] = useState({
    email: '',
    name: ''
  })

  return (
    <loginInfo.Provider value={{ info: { login, setLogin } }}>
      <Router>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/admin'>
            <Admin></Admin>
          </Route>

          {/* <Route path='/volunteering/:id'>
            <Register></Register>
          </Route> */}

          <PrivateRoute path='/volunteering/:id'>
            <Register></Register>
          </PrivateRoute>

          <PrivateRoute2 path='/volunteering'>
            <Volunteering></Volunteering>
          </PrivateRoute2>

          <Route exact path="/">
            <Home></Home>
          </Route>

        </Switch>
      </Router>
    </loginInfo.Provider>
  );
}

export default App;
