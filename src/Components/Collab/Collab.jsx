import React from 'react';
import './Collab.css'
import { BsBookmarkCheck } from "react-icons/bs";

function Collab(props) {
    return (
        <section className="mar-top-bot-50 mar-top-100"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h2 className="align-center">Our Collaborations</h2>
            <div className="heading-underline-center"><div className="heading-underline"></div></div>
            &nbsp;
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <p>E-Cell, Karunya is associated with many companies and organisations that would help budding entrepreneurs get a head start for their venture. These collaborations are beneficial for the students of Karunya to help them grow in their entrepreneurial journeys.</p>
                <h4>A few collaborations we currently have are</h4>
                &nbsp;
                <span>
                    <p data-aos="fade-up" data-aos-delay="200"><BsBookmarkCheck color="red" fontSize="larger" /> &nbsp; <i>YNOS Venture Engine- YNOS Venture Engine is a technology platform for business intelligence and fundraising analytics for nascent and early-stage entrepreneurs. The YNOS platform helps to understand the startup landscape, estimate the valuation, identify the apt investors and obtain top-notch expert consultation, all in one place.<br /><br />YNOS in partnership with E-Cell, Karunya provides our students with free membership accounts and helps our students connect with potential investors to help grow their startup idea. <br /><br />YNOS helps students at Karunya along their entrepreneurial journey by connecting them to investors, evaluating the ventures, providing expert opinions and other necessary support and guidance to the students and their start-ups.<br /><br />YNOS and its team are a great help to budding entrepreneurs from Karunya by guiding their ventures along the right path by providing the right guidance and help.</i></p>
                    <p data-aos="fade-up" data-aos-delay="300"><BsBookmarkCheck color="red" fontSize="larger" />&nbsp; <i>KABN: Karunya Alumni Business Network  -  <br /><br />An exclusive network consisting of all the Karunya Alumni associated with the field of business and entrepreneurship. These Alumni help the students grow their venture by providing the necessary guidance and support in helping their start-ups take off successfully.<br /><br />The network helps students get in touch with industry experts and business professionals who would help the students with their startups. The network also helps students connect these students to other professionals and experts who can provide better support and provide expert advice to them.<br /><br />E-cell helps these budding entrepreneurs get in touch with members of the KABN forum and provides a helping hand to get them and their startups on the right track.</i></p>
                </span>
            </div>
        </section>
    );
}

export default Collab;