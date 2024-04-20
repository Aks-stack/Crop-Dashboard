import './App.css'
import SideB from "./components/SideB";
import RightBar from "./components/RightBar";
import { useState, useEffect } from 'react';
import {
  BrowserRouter as
    Router, Routes, Route
} from "react-router-dom"
import About from './components/About';
import Fertilizer from './components/Fertilizer';
import Settings from './components/Settings';


function App() {
  const [city, setCity] = useState("")
  const [latlong, setLatlong] = useState()


  async function getCurrentLocation(position) {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.latitude}&longitude=${position.longitude}&localityLanguage=en`
      );

      const { city } = await response.json();
      console.log(city)
      if (city) return city;
      else throw Error;
    } catch (error) {
      console.error("Cannot fetch current Location");
      return "City not found"
    }
  }

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(async (position) => {
      setLatlong(position.coords)
      // console.log(position.coords)
      const city = await getCurrentLocation(position)
      setCity(city)

    });
  }, [])
  const [Mode, setMode] = useState(false)
  // console.log(latlong)

  return (
    <div className="App">
      <Router>
        <SideB Mode={Mode} setMode={setMode} />
        <Routes>
          <Route index element={<RightBar Mode={Mode} setMode={setMode} city={city} />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='fertilizer' element={<Fertilizer Mode={Mode} latlong={latlong} />}></Route>
          <Route path='settings' element={<Settings />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
