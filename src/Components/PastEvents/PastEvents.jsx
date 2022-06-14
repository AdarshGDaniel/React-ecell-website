import React from 'react';
import './PastEvents.css'
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img1 from './Assets/1.jpg'
import img2 from './Assets/2.png'
import img3 from './Assets/3.png'
import img4 from './Assets/4.PNG'
import img5 from './Assets/5.png'
import img6 from './Assets/6.jpeg'
import FiberNewOutlinedIcon from '@material-ui/icons/FiberNewOutlined';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CardsScroll from './CardsScroll'

function PastEvents(props) {

    const state = {
        responsive: {
          0: {
            items: 1
          },
          450: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
    }


    return (
        <section className = "container-fluid mar-top-bot-50 mar-bot-100" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200">
            <h2 className="align-center">Past Events</h2>
            <div className="heading-underline-center"><div className="heading-underline"></div></div>
            <OwlCarousel 
                className='owl-theme container mar-top-50' 
                item = {3}
                autoplay = {true}
                navText
                autoplayTimeout = {3000}
                dots = {false}
                margin = {10}
                loop
                responsive = {state.responsive}
                data-aos="fade-up" data-aos-delay="300">
                <CardsScroll image={img1} Date="20 Mar 2021" Title="E-MINDSET EPISODE 3" description="In the final episode of shaping young minds towards entrepreneurship E-Cell Karunya had Mr. Anirudh Srivastava(Co Founder of AniMate)to explain the topic of “Business Model Canvas”. With this session many student entrepreneurs were able to clear and concise their business plan."/>
                <CardsScroll image={img2} Date="17 Mar 2021" Title="Session on Lean Startup & Minimum Viable Product" description="Students were introduced to one of the most important topic “Lean Startup and MVP” in everyone’s startup journey by Mr. Vishal Nair(Co-Founder & Director at LIGHTNSALT Pvt. Ltd)."/>
                <CardsScroll image={img3} Date="08 Mar 2021" Title="WONDER WOMAN" description="On the occasion of women's day, E-Cell Karunya conducted a powerful talk show by Ms. Dimple Verma(CEO and Founder, Whizrobo) especially for the women entrepreneurs out there in the students to ignite their passion for entrepreneurship." />
                <CardsScroll image={img4} Date="13 Feb 2021" Title="E-MINDSET EPISODE 2" description="In the second episode of shaping young minds towards entrepreneurship E-Cell Karunya had Mr. Tamaghna Basu(Co Founder of neoEYED) to enlighten our students on the topic of “How to plan for a startup”. This episode gave the student entrepreneurs around the campus to plan their journey even better."/>
                <CardsScroll image={img5} Date="09 Jan 2021" Title="E-MINDSET EPISODE 1" description="In the first episode of shaping young minds towards entrepreneurship we had Mr. Aakarshan Sethi(Mentor of CHARGE) to ignite our students on the topic of “why become an entrepreneur”. Students got an opportunity to see entrepreneurship as a career option."/>
                <CardsScroll image={img6} Date="12 Oct 2020" Title="INCEPTION" description="Inception was an online event we conducted especially for the freshers. We made them solve virtual escape rooms, where they were divided into teams through zoom break rooms and had to crack the code to leave the room and then win the event. This introduced them to the vast world of entrepreneurship along with the importance of teamwork. 70- 100 students participated in the event."/>
            </OwlCarousel>
            <Link to="/PastEvents" style={{ textDecoration: 'none' }} className="container Button-center-past-event"><Button>See more</Button></Link>
        </section>
    );
}

export default PastEvents;