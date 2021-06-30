import React from 'react';
import NavBar from './Components/navBar/NavBar';
import Home from './pages/home/Home.jsx';
import Single from './pages/single/Single';
import Create from './pages/create/Create';
import Setting from './pages/settings/Setting';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Login />
    </div>
  );
};
export default App;