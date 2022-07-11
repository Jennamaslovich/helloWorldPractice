import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Jenna Marie
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained"
        className="App-link"
        href="http://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        >Google.com</Button>

<Button variant="contained"
        className="App-link"
        href="http://www.apple.com/"
        target="_blank"
        rel="noopener noreferrer"
        >Apple.com</Button>
      </header>
    </div>
  );
}

export default App;
