import React from 'react';
import Hi from './Hi';
import Condition from './Condition';
import Counter from './Counter';

function App() {
  return (

    <>
      <Hi name="민상" friend="친구" one="1"/>
      <Condition isOn={true} />
      <Counter />
    </>

  );
}

export default App;
