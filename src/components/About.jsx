import React from 'react'
import './About.css'
import Pic from '../assets/PXL_sq.jpg'
import { ReactComponent as Linkedin } from '../assets/linkedin.svg'

export default function About() {
    return (
        <div className='main'>
            <div className="title">
                About Us
            </div>

            <div className="content">
                <div className="content-right">
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
                    <div className="member1">
                        <div className="pic-content">
                            <img src={Pic} alt='/' />
                            <p>
                                Name Name
                            </p>
                            {/* <img src={Linkedin} alt='/' style={{ width: "15px", height: "15px" }} /> */}
                            <svg>
                                <Linkedin width="20px" height="20px" fill='currentColor'/>
                            </svg>
                        </div>
                        <div className="pic-content">
                            <img src="https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg" alt='/' />
                            <p>
                                Name Name
                            </p>
                            <svg>
                                <Linkedin width="20px" height="20px" fill='currentColor'/>
                            </svg>
                        </div>
                        <div className="pic-content">
                            <img src="https://i0.wp.com/danishapiro.com/wp-content/uploads/2022/03/Author-Photo-color-aspect-ratio-1-1.jpeg?ssl=1" alt='/' />
                            <p>
                                Name Name
                            </p>
                            <svg>
                                <Linkedin width="20px" height="20px" fill='currentColor'/>
                            </svg>
                        </div>

                    </div>
                </div>
                <div className="content-left">
                    <div className="content-left-top">
                        <div className="pic-content">
                            <img src="https://rockynook.com/wp-content/uploads/2015/10/Meyer_T_1to2.jpg" alt='/' />
                            <p>
                                Name Name
                            </p>
                            <svg>
                                <Linkedin width="20px" height="20px" fill='currentColor'/>
                            </svg>
                        </div>
                    </div>
                    <div className="member2">
                        <div className="pic-content">
                            <img src="https://sekonic.com/content/Blog/zuckerman_studio_lighting_image07.jpg" alt='/' />
                            <p>
                                Name Name
                            </p>
                            <svg>
                                <Linkedin width="20px" height="20px" fill='currentColor'/>
                            </svg>
                        </div>
                        <div className="pic-content">
                            <img src="https://eastsidepeople.org/wp-content/uploads/2023/02/Final-Renu-Gundala-Eastside-People-25663-001E-scaled-aspect-ratio-1-1.jpg" alt='/' />
                            <p>
                                Name Name
                            </p>
                            <svg>
                                <Linkedin width="20px" height="20px" fill='currentColor'/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
