import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Fade} from "react-reveal";


import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import Hero from './Components/Home/Hero';
import Login from './Container/Login';
import SignUp from './Container/SignUp';
import Forgot from './Container/Forgot';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Fade>
        <Hero/>
      </Fade>
        <Switch>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/signup"><SignUp/></Route>
          <Route exact path="/forgot"><Forgot/></Route>
        </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
