import React from 'react';
import './App.css';
import { WebGl } from './WebGl'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <WebGl />
      </header>
    </div>
  );
}

export default App;
