import React from 'react';
import logo from './logo.svg';
import './App.css';
import IframeExample from './components/IframeExample'; // Import the IframeExample component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <IframeExample />
        </p>
       </header>
      {/* Add the IframeExample component below the header */}
    </div>
  );
}

export default App;
