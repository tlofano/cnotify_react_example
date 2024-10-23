import logo from './logo.svg';
import './App.css';

import { cnotify } from './config/setup-cnotify.js';

function requestPermissions() {
  cnotify.requestPermissions().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted ✅');
    } else {
      console.log('Notification permission denied ❌');
    }
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="App-link" onClick={requestPermissions}>
          Request Notification Permission
        </button>
      </header>
    </div>
  );
}

export default App;
