import React, { useState } from 'react';

import Calc from "./components/calc";

const App = () => {
  return (
    <>
      <div className="calc">
        <p>EgyCalc</p>
        <Calc/>
      </div>
    </>
  );
}

export default App;
