import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'
import { IoIosLink } from "react-icons/io";
import Collapse from '@material-ui/core/Collapse';


function About(props) {

    const [val, setVal] = useState(false)
    const [Read, setRead] = useState("Read More")

    const open = (val) =>{
        if(val){
            setRead("Read Less")
        }else{
            setRead("Read More")
        }
        setVal(val);
    }

    return (
        <section className="section-container About mar-top-100" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h2>About Us</h2>
            <div className="heading-underline-center"><div className="heading-underline"></div></div>
            <div className="container">
                <div className="container-fluid mar-top-bot-50" data-aos="fade-up" data-aos-delay="100">
                    <h4>Who are we?</h4>
                    <p>A pack of enthusiastic and persevering students working towards promoting and inducing the Entrepreneurial Mindset among the students in
                        <br /><b>Karunya Institute of Technology and Sciences</b></p>
                    <a href="https://karunya.edu" target="_blank"><i>View more about Karunya<IoIosLink className="link-hover" /></i></a>
                </div>
                <div className="container-fluid mar-top-bot-50" data-aos="fade-up" data-aos-delay="200">
                    <h4>Our Purpose</h4>
                    <p>To encourage young minds who have the urge and knacks to innovate and impact the generations. To guide and nurture aspiring entrepreneurs through a series of mentoring sessions, boot camps, and getting a 360-degree approach to a complete cycle of Innovation.</p>
                </div>
                <div className="container-fluid mar-top-bot-50" data-aos="fade-up" data-aos-delay="200">
                    <h4>Vision & Objective</h4>
                    <p>Entrepreneurship Cell (E-Cell) is set up to foster an entrepreneurial mindset among the students of Karunya. The main motive of this dynamic organisation is to bring up young entrepreneurs and make Karunya, a start-up hub.</p>
                    <Collapse in={val}>
                        <p>Influence young minds to transform their innovative ideas into startups.</p>
                        <p>Inculcate the entrepreneurial mindset among all the students of Karunya.</p>
                        <p>Create a mindset among the students such that if a student has a startup idea, the next thing they do is to reach out to E-Cell Karunya.</p>
                        <p>Promote women entrepreneurship in Karunya.</p>
                        <p>Increase the ranking of campus with innovations and startups.</p>
                    </Collapse>
                    <a href="##" onClick = {()=> {
                        if(val){
                            return open(false)
                        }else{
                            return open(true)
                        }
                    }}><i>{Read}</i></a>
                </div>
            </div>
        </section>
    );
}

export default About;