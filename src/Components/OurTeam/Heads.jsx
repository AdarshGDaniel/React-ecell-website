import React from 'react'
import './Heads.css'
import p1 from './Assets/AJAY TAMMULURI.jpeg'
import p2 from './Assets/ABI-10_614 - Sarath Shanmugam A.jpeg'
import p3 from './Assets/Laya_Vemulapalli - Laya Vemulapalli.jpeg'
import p4 from './Assets/ANGELA.jpg'
import p5 from './Assets/Sarah_s Photo - Sarah Deepika.JPG'
import p6 from './Assets/IMG-6712 (1) (1) - Jerusha Serena.jpg'
import p7 from './Assets/IMG_1152 - Ashish Philip.jpg'

import { FaTelegramPlane, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


function Heads(props) {

    
    return (
        <div className="Heads-profile container">
            <div className="row">
                <div className="team-box" data-aos="fade-up" data-aos-delay="100">
                    <img src={p1} alt="AJAY TAMMULURI"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>AJAY TAMMULURI</h5>
                            <span>(C.E.O)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.linkedin.com/in/tammuluri-ajay/" target="_blank"><FaLinkedinIn size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="team-box" data-aos="fade-up" data-aos-delay="200">
                    <img src={p2} alt="Sarath Shanmugam A"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Sarath Shanmugam A</h5>
                            <span>(General Manager)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.linkedin.com/in/sarath-shanmugam-a-b991091a0" target="_blank"><FaLinkedinIn size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="300">
                    <img src={p3} alt="Laya Vemulapalli"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Laya Vemulapalli</h5>
                            <span>(Business Development Head)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.linkedin.com/in/laya-vemulapalli-459637209/" target="_blank"><FaLinkedinIn size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="team-box" data-aos="fade-up" data-aos-delay="400">
                    <img src={p4} alt="Angela B Vazhappilly"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Angela B Vazhappilly</h5>
                            <span>(Head of Events and Management)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.linkedin.com/in/angela-b-vazhappilly" target="_blank"><FaLinkedinIn size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="500">
                    <img src={p5} alt="Sarah Deepika Robinson"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Sarah Deepika Robinson</h5>
                            <span>(Head of Marketing)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.linkedin.com/in/sarah-deepika-robinson/" target="_blank"><FaLinkedinIn size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="team-box" data-aos="fade-up" data-aos-delay="100">
                    <img src={p6} alt="Jerusha Serena"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Jerusha Serena</h5>
                            <span>(Head, Corporate Relations)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.linkedin.com/in/jerusha-serena-05025a207" target="_blank"><FaLinkedinIn size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="200">
                    <img src={p7} alt="Ashish Philip Mathew"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Ashish Philip Mathew</h5>
                            <span>(Head of Human Resources)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.linkedin.com/in/ashish-philip-18049a206" target="_blank"><FaLinkedinIn size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Heads;