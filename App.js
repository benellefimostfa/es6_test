import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 
  
  render() {

    const app = {
      textAlign: 'center',
    }
    
    const app_logo  = {
      height: 40,
    }
    
    const app_header = {
      backgroundColor: 'black',
      minHight: 100,
      display: 'flex',
      fleDirection: 'column',
      alignItems: 'center',
      justifyContent:'center',
      color: 'white',
    }
    
    const appLink = {
      color: 'blue',
    }
    
    return (
      <div style = {app}>
        <header style = {app_header} className="App-header">
          <img src={logo} style = {app_logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            style = {appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
