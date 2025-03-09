import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";   
import nav from "./components/nav";
import Contact from "./components/Contact";
import footer from "./components/footer";
import "./App.css";






// contact
function App() {
    return (
      <div>
        <h1>Welcome to My Website</h1>
        <Contact />
      </div>
    );
  }
  
  export default App;

