import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Estado from './components/Estado';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>3-Estados</h1>
      <div className="card">
        <Estado />
      </div>
      <p className="read-the-docs">3-Estados</p>
    </div>
  );
}

export default App;
