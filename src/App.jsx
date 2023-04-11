import React from 'react';

import Screen from "./components/screen";
import Btns from "./components/btns";

const App = () => {
  return (
    <>
      <div className="calc">
        <p>EgyCalc</p>
        <Screen value={0}/>

        <Btns/>
      </div>
    </>
  );
}

export default App;
