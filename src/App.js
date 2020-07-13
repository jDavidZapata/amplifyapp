import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World from <code>AWS</code> this is David.
        </p>
        <a
          className="App-link"
          href="https://github.com/jDavidZapata"
          target="_blank"
          rel="noopener noreferrer"
        >
          To My GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
