import React from 'react'
import IconHome from '../assets/IconHome'
import IconSettingsSharp from '../assets/IconSettingsSharp'
import './SideB.css'
import logo from '../assets/leaf_2917995.png'
import IconInfo from '../assets/IconInfo'
import profile from '../assets/profile_3135715.png'
import IconWeatherNight from '../assets/IconWeatherNight'

export default function SideB() {
    return (
        <div className='sidebar'>
            <div className="top-section">
                <img src={logo} style={{ width: '40px', height: '40px' }} alt='/' />
            </div>
            <div className="routes">
                <div className="icons">
                    <a href='/' className='link'>
                        <IconHome />
                    </a>
                </div>
                {/* <div className="title">Home</div> */}
                <div className="icons">
                    <IconInfo />
                </div>
                {/* <div className="titile">about</div> */}
                <div className="icons">
                    <IconSettingsSharp />
                </div>
                {/* <div className="title">Settings</div> */}
                <div className="user">
                    <img src={profile} alt='/' style={{ width: '30px', height: '30px' }} />
                </div>
                <div className="icons">
                    <IconWeatherNight />
                </div>

            </div>

        </div>
    )
}
