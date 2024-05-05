import React from 'react'
import './About.css'
import Pic from '../assets/PXL_sq.jpg'
import Sayan from '../assets/Sayan2.png'
import Rajib from '../assets/Rajib2.png'
import Tanmana from '../assets/Tanmana2.jpeg'
import Arka from '../assets/Arka2.png'
import Richa from '../assets/Richa2.jpg'
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
                        <p>Revolutionizing Agriculture with IoT-Based Crop Recommender</p>
                    </div>
                    <div className="description">
                        <p>
                            At our core, we are a team of passionate individuals united by a common goal: to transform agriculture through innovation.  we have developed a comprehensive system that analyzes soil and weather data to recommend the most suitable crops for cultivation. Our system goes beyond basic recommendations; it also predicts the quantity of fertilizer required, ensuring optimal crop growth while minimizing environmental impact. We are committed to empowering farmers with the tools and knowledge they need to thrive in an ever-changing agricultural landscape.
                        </p>
                    </div>
                </div>
                <div className="pic-content">
                    <img src={Rajib} alt='/' style={{ objectFit: "cover", }} />
                    <p>
                        Rajib Lochan Nandi
                    </p>
                    <svg>
                        <Linkedin width="20px" height="20px" fill='currentColor' />
                    </svg>
                </div>
                <div className="wraper">
                    <div className="pic-content">
                        <img src={Sayan} alt='/' />
                        <p>
                            Sayan Kar
                        </p>
                        <a href="https://www.linkedin.com/in/sayan-kar-9b1aa8254/" target="_blank">
                            <svg>
                                <Linkedin width="20px" height="20px" fill='currentColor' />
                            </svg>
                        </a>
                    </div>
                    <div className="pic-content">
                        <img src={Pic} alt='/' />
                        <p>
                            Akshat Sinha
                        </p>
                        <a href="https://www.linkedin.com/in/akshat-sinha11/" target="_blank">
                            <svg>
                                <Linkedin width="20px" height="20px" fill='currentColor' />
                            </svg>
                        </a>
                    </div>
                    <div className="pic-content">
                        <img src={Tanmana} alt='/' />
                        <p>
                            Tanmana Das
                        </p>
                        <svg>
                            <Linkedin width="20px" height="20px" fill='currentColor' />
                        </svg>
                    </div>
                    <div className="pic-content">
                        <img src={Arka} alt='/' />
                        <p>
                            Arka Chowdhury
                        </p>
                        <svg>
                            <Linkedin width="20px" height="20px" fill='currentColor' />
                        </svg>
                    </div>
                    <div className="pic-content">
                        <img src={Richa} alt='/' />
                        <p>
                            Richa Sharma
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
