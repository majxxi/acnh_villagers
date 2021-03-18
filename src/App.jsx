import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Body from './components/Body';

function App() {

  // Return the App component.
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;