import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
      <Route exact path = "/login" component={Login} />
      <PrivateRoute exact path = "/protected" component= {FriendsList} />
    </div>
  );
}

export default App;
