import React from 'react';
import './App.css';
import Trader from './app/components/Trader';
import exdTrader from './app/constants/tradeViewConstants';

function App() {
  return (
    <div className="App">
      <Trader tradeViewConfig={exdTrader} />
    </div>
  );
}

export default App;
