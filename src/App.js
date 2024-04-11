import './App.css'
import SideB from "./components/SideB";
import RightBar from "./components/RightBar";
import { useState } from 'react';
import {
  BrowserRouter as
    Router, Routes, Route
} from "react-router-dom"
import About from './components/About';
import Fertilizer from './components/Fertilizer';

function App() {

  const [Mode, setMode] = useState(false)

  return (
    <div className="App">
      <Router>
        <SideB Mode={Mode} setMode={setMode} />
        <Routes>
          <Route index element={<RightBar Mode={Mode} setMode={setMode} />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='fertilizer' element={<Fertilizer Mode={Mode} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
