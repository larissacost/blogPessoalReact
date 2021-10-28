import React from 'react';

import './App.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NavBar from './components/estaticos/navbar/NavBar';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Footer from './components/estaticos/footer/Footer';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <div style = {{minHeight : '100vh'}}>
          <Route exact path ='/'>
            <Login/>
          </Route>
          <Route path ='/login'>
            <Login/>
          </Route>
          <Route path ='/home'>
            <Home/>
          </Route>
        </div>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
