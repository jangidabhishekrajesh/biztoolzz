import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import Hero from './Components/Home/Hero';
import Login from './Container/Login';
import SignUp from './Container/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/"><Hero/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/signup"><SignUp/></Route>
        </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
