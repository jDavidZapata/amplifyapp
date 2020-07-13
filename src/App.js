import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello World from <code>AWS</code> this is David.
        </h1>
        <p>We now have Auth!</p>
        <a
          className="App-link"
          href="https://github.com/jDavidZapata"
          target="_blank"
          rel="noopener noreferrer"
        >
          To My GitHub
        </a>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
