import React from 'react';
import NavBar from './Components/navBar/NavBar';
import Home from './pages/home/Home.jsx';
import Single from './pages/single/Single';
import Create from './pages/create/Create';
import Setting from './pages/settings/Setting';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const currentUser = true;
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/posts'>
          <Home />
        </Route>
        <Route path='register'>
          {currentUser ? <Home />: <Register />}
        </Route>
        <Route path='/login'>{currentUser ?<Home /> : <Login />}</Route>
        <Route path='/post/:id'>
          <Single />
        </Route>
        <Route path='/create'>{currentUser ? <Create /> : <Login />}</Route>
        <Route path='/settings'>{currentUser ? <Setting /> : <Login />}</Route>
      </Switch>
    </Router>
  );
};
export default App;