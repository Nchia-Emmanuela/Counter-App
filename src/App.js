// import logo from './logo.svg';
import React, { Component } from 'react'
import "./App.css";

// Counters component import
import Counters from "./components/counters";

// NavBar component import
import NavBar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
