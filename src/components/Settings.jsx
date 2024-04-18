import React from 'react'
import './Settings.css'
import { TbAntenna } from "react-icons/tb";

export default function settings() {
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
              <input type="text" placeholder='Enter Esp32 IP' className='ip-input' />
            </div>
            <div className="input-wraper">
              <TbAntenna />
              <input type="text" placeholder='Enter Server IP' className='ip-input' />
            </div>
            <div className="wrap">
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
