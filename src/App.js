import { useState } from 'react';
import Timer from './components/timer.js';
import Rehmo from './components/Rehmo';
import './App.css';

function App() {
  const [isBirthday, setIsBirthDay] = useState(true);
  console.log(isBirthday)
  const s = 'booty'
  return (
    <div className="App">
      {!isBirthday && <Timer updateBirthday={setIsBirthDay} />}
      {isBirthday && <Rehmo />}
    </div >
  );
}

export default App;
