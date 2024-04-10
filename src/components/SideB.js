import React from 'react'
import IconHome from '../assets/IconHome'
import IconSettingsSharp from '../assets/IconSettingsSharp'
import './SideB.css'
import logo from '../assets/leaf_2917995.png'
import IconInfo from '../assets/IconInfo'
import profile from '../assets/profile_3135715.png'
import IconWeatherNight from '../assets/IconWeatherNight'

export default function SideB(props) {

    // const [Mode, setMode] = useState(false)


    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
    }

    if (props.Mode) setDarkMode();
    else setLightMode();

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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24px" fill="currentColor" height="24px">
                        <path d="M128 0h64c17.7 0 32 14.3 32 32v96H96V32c0-17.7 14.3-32 32-32zM0 256c0-53 43-96 96-96H224c53 0 96 43 96 96V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V256zm240 80A80 80 0 1 0 80 336a80 80 0 1 0 160 0zM256 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM448 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>
                </div>
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
                <div className="icons" onClick={() => props.setMode(!props.Mode)}>
                    <IconWeatherNight />
                </div>

            </div>

        </div>
    )
}
