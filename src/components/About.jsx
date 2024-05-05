import React from 'react'
import './About.css'
import Pic from '../assets/PXL_sq.jpg'
import Sayan from '../assets/Sayan.jpg'
import Rajib from '../assets/Rajib.jpeg'
import Tanmana from '../assets/Tanmana.jpeg'
import Arka from '../assets/Arka.jpeg'
import Richa from '../assets/Richa.jpeg'
import { ReactComponent as Linkedin } from '../assets/linkedin.svg'

export default function About() {
    return (
        <div className='main'>
            <div className="title">
                About Us
            </div>

            <div className="content">
                <div className="card">
                    <div className="card-title">
                        <p>About us</p>
                    </div>
                    <div className="description">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti blanditiis autem hic, rem laborum a quidem inventore? Laudantium, autem odit deserunt voluptatibus, cum ea atque a aliquid, quas nostrum porro?
                        </p>
                    </div>
                </div>
                <div className="pic-content">
                    <img src={Rajib} alt='/' />
                    <p>
                        Name Name
                    </p>
                    <svg>
                        <Linkedin width="20px" height="20px" fill='currentColor' />
                    </svg>
                </div>
                <div className="wraper">
                <div className="pic-content">
                    <img src={Sayan} alt='/' />
                    <p>
                        Name Name
                    </p>
                    <svg>
                        <Linkedin width="20px" height="20px" fill='currentColor' />
                    </svg>
                </div>
                <div className="pic-content">
                    <img src={Pic} alt='/' />
                    <p>
                        Name Name
                    </p>
                    <svg>
                        <Linkedin width="20px" height="20px" fill='currentColor' />
                    </svg>
                </div>
                <div className="pic-content">
                    <img src={Tanmana} alt='/' />
                    <p>
                        Name Name
                    </p>
                    <svg>
                        <Linkedin width="20px" height="20px" fill='currentColor' />
                    </svg>
                </div>
                <div className="pic-content">
                    <img src={Arka} alt='/' />
                    <p>
                        Name Name
                    </p>
                    <svg>
                        <Linkedin width="20px" height="20px" fill='currentColor' />
                    </svg>
                </div>
                <div className="pic-content">
                    <img src={Richa} alt='/' />
                    <p>
                        Name Name
                    </p>
                    <svg>
                        <Linkedin width="20px" height="20px" fill='currentColor' />
                    </svg>
                </div>
                </div>
            </div>
        </div>
    )
}
