import './App.css'
import SideB from "./components/SideB";
import RightBar from "./components/RightBar";
import { useState } from 'react';

function App() {

  const [Mode, setMode] = useState(false)

  return (
    <div className="App">
      <SideB Mode={Mode} setMode={setMode} />
      <RightBar Mode={Mode} setMode={setMode}/>
    </div>
  );
}

export default App;
