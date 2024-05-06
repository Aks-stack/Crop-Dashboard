import React from 'react'
import './About.css'
import Pic from '../assets/PXL_sq.jpg'
import Sayan from '../assets/Sayan2.png'
import Rajib from '../assets/Rajib2.png'
import Tanmana from '../assets/Tanmana2.jpeg'
import Arka from '../assets/Arka2.png'
import Richa from '../assets/Richa2.jpg'
import { ReactComponent as Linkedin } from '../assets/linkedin.svg'
import { useState } from 'react'

export default function About() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hovered, setHovered] = useState(false);

    const handleHover = (index) => {
        setHoveredIndex(index);
        setHovered(true);
    };

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
                <div className="pic-content"
                    onMouseEnter={() => handleHover(0)} onMouseLeave={() => { handleHover(-1); setHovered(false) }}>
                    <img src={Rajib} alt='/'
                        style={{ objectFit: "cover", transition: "0.4s ease-in-out", filter: hovered ? hoveredIndex !== 0 ? "grayscale(1)" : "none" : "none" }} />
                    <p>
                        Rajib Lochan Nandi
                    </p>
                    <svg>
                        <Linkedin width="20px" height="20px" fill='currentColor' />
                    </svg>
                </div>
                <div className="wraper">
                    <div className="pic-content"
                        onMouseEnter={() => handleHover(1)} onMouseLeave={() => { handleHover(-1); setHovered(false) }}>
                        <img src={Sayan} alt='/'
                            style={{ transition: "0.4s ease-in-out", filter: hovered ? hoveredIndex !== 1 ? "grayscale(1)" : "none" : "none" }}
                        />
                        <p>
                            Sayan Kar
                        </p>
                        <a href="https://www.linkedin.com/in/sayan-kar-9b1aa8254/" target="_blank">
                            <svg>
                                <Linkedin width="20px" height="20px" fill='currentColor' />
                            </svg>
                        </a>
                    </div>
                    <div className="pic-content" onMouseEnter={() => handleHover(2)} onMouseLeave={() => { handleHover(-1); setHovered(false) }}>
                        <img src={Pic} alt='/'
                            style={{ transition: "0.4s ease-in-out", filter: hovered ? hoveredIndex !== 2 ? "grayscale(1)" : "none" : "none" }} />
                        <p>
                            Akshat Sinha
                        </p>
                        <a href="https://www.linkedin.com/in/akshat-sinha11/" target="_blank">
                            <svg>
                                <Linkedin width="20px" height="20px" fill='currentColor' />
                            </svg>
                        </a>
                    </div>
                    <div className="pic-content"
                        onMouseEnter={() => handleHover(3)} onMouseLeave={() => { handleHover(-1); setHovered(false) }}>
                        <img src={Tanmana} alt='/'
                            style={{ transition: "0.4s ease-in-out", filter: hovered ? hoveredIndex !== 3 ? "grayscale(1)" : "none" : "none" }} />
                        <p>
                            Tanmana Das
                        </p>
                        <svg>
                            <Linkedin width="20px" height="20px" fill='currentColor' />
                        </svg>
                    </div>
                    <div className="pic-content"
                        onMouseEnter={() => handleHover(4)} onMouseLeave={() => { handleHover(-1); setHovered(false) }}>
                        <img src={Arka} alt='/'
                            style={{ transition: "0.4s ease-in-out", filter: hovered ? hoveredIndex !== 4 ? "grayscale(1)" : "none" : "none" }} />
                        <p>
                            Arka Chowdhury
                        </p>
                        <svg>
                            <Linkedin width="20px" height="20px" fill='currentColor' />
                        </svg>
                    </div>
                    <div className="pic-content"
                        onMouseEnter={() => handleHover(5)} onMouseLeave={() => { handleHover(-1); setHovered(false) }}>
                        <img src={Richa} alt='/'
                            style={{ transition: "0.4s ease-in-out", filter: hovered ? hoveredIndex !== 5 ? "grayscale(1)" : "none" : "none" }} />
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
