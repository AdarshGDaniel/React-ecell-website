import React, { useEffect } from 'react';
import './PastEventsPage.css'
import NavBar2 from '../nav-bootstrap/NavBar2'
import Footer2 from '../Footer/Footer2'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CardsLeft from './CardsLeft';
import CardsRight from './CardsRight';
import { Link, animateScroll as scroll } from "react-scroll";
import pic1 from './Assets/1.JPG';
import pic2 from './Assets/2.JPG';
import pic3 from './Assets/3.jpg';
import pic4 from './Assets/4.png';
import pic5 from './Assets/5.png';
import pic6 from './Assets/6.png';
import pic7 from './Assets/7.jpeg';
import pic8 from './Assets/8.png';
import pic9 from './Assets/9.PNG';
import pic10 from './Assets/10.png';
import pic11 from './Assets/11.png';
import pic12 from './Assets/12.jpg';


function PastEventsPage(props) {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <NavBar2 page="true"/>
            <div className="timeline-fixed">
                        <Timeline>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent><Link style={{cursor: 'pointer'}} activeClass="active" to="2022" spy={true} smooth={true} offset={-80} duration={500}>2022</Link></TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent><Link style={{cursor: 'pointer'}} activeClass="active" to="2021" spy={true} smooth={true} offset={-80} duration={500}>2021</Link></TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent><Link style={{cursor: 'pointer'}} activeClass="active" to="2020" spy={true} smooth={true} offset={-80} duration={500}>2020</Link></TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent><Link style={{cursor: 'pointer'}} activeClass="active" to="2019" spy={true} smooth={true} offset={-80} duration={500}>2019</Link></TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                <div className="container mar-top-100">
                    <div className="contents-block">
                        <div id="2021" className="topic-year mar-top-100">
                            <h2>2021</h2>
                            <div className="line-red"></div>
                        </div>
                        <CardsLeft image={pic12} date="20 Mar 2021" title="E-MINDSET EPISODE 3" description="In the final episode of shaping young minds towards entrepreneurship E-Cell Karunya had Mr. Anirudh Srivastava(Co Founder of AniMate)to explain the topic of “Business Model Canvas”. With this session many student entrepreneurs were able to clear and concise their business plan."/>
                        <CardsRight image={pic11} date="17 Mar 2021" title="Session on Lean Startup & Minimum Viable Product" description="Students were introduced to one of the most important topic “Lean Startup and MVP” in everyone’s startup journey by Mr. Vishal Nair(Co-Founder & Director at LIGHTNSALT Pvt. Ltd). "/>
                        <CardsLeft image={pic10} date="08 Mar 2021" title="WONDER WOMAN" description="On the occasion of women's day, E-Cell Karunya conducted a powerful talk show by Ms. Dimple Verma(CEO and Founder, Whizrobo) especially for the women entrepreneurs out there in the students to ignite their passion for entrepreneurship."/>
                        <CardsRight image={pic9} date="13 Feb 2021" title="E-MINDSET EPISODE 2" description="In the second episode of shaping young minds towards entrepreneurship E-Cell Karunya had Mr. Tamaghna Basu(Co Founder of neoEYED) to enlighten our students on the topic of “How to plan for a startup”. This episode gave the student entrepreneurs around the campus to plan their journey even better."/>
                        <CardsLeft image={pic8} date="09 Jan 2021" title="E-MINDSET EPISODE 1" description="In the first episode of shaping young minds towards entrepreneurship we had Mr. Aakarshan Sethi(Mentor of CHARGE) to ignite our students on the topic of “why become an entrepreneur”. Students got an opportunity to see entrepreneurship as a career option."/>
                        <div id="2020" className="topic-year mar-top-100">
                            <h2>2020</h2>
                            <div className="line-red"></div>
                        </div>
                        <CardsRight image={pic7} date="12 Oct 2020" title="INCEPTION" description="Inception was an online event we conducted especially for the freshers. We made them solve virtual escape rooms, where they were divided into teams through zoom break rooms and had to crack the code to leave the room and then win the event. This introduced them to the vast world of entrepreneurship along with the importance of teamwork. 70- 100 students participated in the event."/>
                        <CardsLeft image={pic6} date="31 May 2020" title="ENTREPRENEURS TALK EPISODE 3" description="In the final episode of our talk series we had Mr Sathya Pradeep(Founder of furniture magik) to explain about the hurdles and consequences that an entrepreneur will face in their journey."/>
                        <CardsRight image={pic5} date="21 May 2020" title="ENTREPRENEURS TALK EPISODE 2" description="In this second episode of our talk series we had Mr. Vivek Kumar(Project Associate and In charge of Ignite-Startup Acceleration). Mr. Vivek explained to our students about the “Design thinking process” which is one of the most important traits in the journey of entrepreneurship."/>
                        <CardsLeft image={pic4} date="14 May 2020" title="ENTREPRENEURS TALK EPISODE 1" description="E-Cell Karunya, in spite of Covid 19, started a series of talks virtually  with successful people in the industry to teach our students about the journey of a startup. In the first episode E-Cell Karunya had Mr. Arun Antony(Creative Director and Founder of Applebox Media) to explain the beginning steps of entrepreneurial journey."/>
                        <CardsRight image={pic3} date="22 Feb 2020" title="LAUNCH PAD" description="LaunchPad was a team event where students had to identify a problem statement, come up with a solution for the problem statement and then launch the startup by pitching their idea to the people. This event helped our students have critical thinking and problem-solving skills."/>
                        <CardsLeft image={pic2} date="12 Feb 2020" title="VALEDICTION CEREMONY 2020" description="In order to promote and drive our students to an Entrepreneurial Mindset, E-Cell Karunya conducted an event called Treasure Hunt where we hid clues all around the campus and our students had to go look for the answers to those tricky clues. This helped our students think outside the box and crack the clues. Since Treasure Hunt was a team event, it taught our students how important teamwork is and how we should understand and work together to finish a given task. A total of 70 people participated in the full day event."/>
                        <div id="2019" className="topic-year mar-top-100">
                            <h2>2019</h2>
                            <div className="line-red"></div>
                        </div>
                        <CardsRight image={pic1} date="23 Sep 2019" title="PITCH FEST" description="PitchFest is a popular startup event conducted by E-Cell Karunya where our students were given an opportunity to pitch their innovative startup ideas. The students were divided into teams and each team got 15 minutes to pitch their best ideas in a creative way. There were three winners after this event. We were introduced to numerous ideas after the event and the winning idea turned out to be ‘Exoskeleton’. Nearly 20-30 Ideas were pitched by students."/>
                        
                    </div>
                </div>
            <Footer2 />
        </div>
    );
}

export default PastEventsPage;