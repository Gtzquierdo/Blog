import React from 'react';
import NavBar from './Components/navBar/NavBar';
import Home from './pages/home/Home.jsx';
import Single from './pages/single/Single';
import Create from './pages/create/Create';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Create />
    </div>
  );
};
export default App;