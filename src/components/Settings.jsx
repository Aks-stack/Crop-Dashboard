import React, { useState } from 'react'
import './Settings.css'
import { TbAntenna } from "react-icons/tb";

export default function Settings() {

  const [esp, setEsp] = useState(localStorage.getItem("esp") || "");
  const [serv, setServ] = useState(localStorage.getItem("server") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("esp", esp);
    localStorage.setItem("server", serv);
  }

  return (
    <div className='Container-main'>
      <div className="title-child">
        Settings
      </div>
      <div className="content-child">
        <div className="content-card">
          <form className='ip-form'>
            Enter IP Address for the devices
            <div className="input-wraper">
              <TbAntenna />
              <input type="text" placeholder='Enter Esp32 IP' className='ip-input' value={esp} onChange={(e) => setEsp(e.target.value)} />
            </div>
            <div className="input-wraper">
              <TbAntenna />
              <input type="text" placeholder='Enter Server IP' className='ip-input' value={serv} onChange={(e) => setServ(e.target.value)} />
            </div>
            <div className="wrap" onClick={handleSubmit}>
              <button className='submit-btn'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
