import React from 'react';
import './FAQ.css'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));


function FAQ(props) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);}


    return (
        <section className="mar-top-bot-50 mar-top-100" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div><div className="heading-underline"></div></div>
                <div data-aos="fade-up" data-aos-delay="100">
                    <Accordion className="accordion-box" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="icon-faq" />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography className={classes.heading}>What is E-Cell Karunya ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        E-Cell Karunya Is the entrepreneurial community of Karunya university providing budding entrepreneurs and enthusiasts a nurturing ground to ideate, innovate and incubate their startups and bring out the Steve Jobs inside them!
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                    <Accordion className="accordion-box" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="icon-faq" />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        >
                        <Typography className={classes.heading}>How can I join E-Cell Karunya ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        We recruit enthusiastic people who are passionate about working in a student run organization every year, do check your Kmail frequently
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                    <Accordion className="accordion-box" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="icon-faq" />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                        <Typography className={classes.heading}>How does E-Cell Karunya help students ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        We help student entrepreneurs to connect them with industry leading mentors and help them to incubate their startup on campus itself.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                    <Accordion className="accordion-box" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="icon-faq" />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        >
                        <Typography className={classes.heading}>What are the main objectives of events conducted by E-Cell Karunya ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        We conduct events that include:<br />
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;1. Awareness among aspiring entrepreneurs regarding entrepreneurship
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;2. Programs on Entrepreneurship Enabling Skills
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;3. Procedures, and legalities of setting up a business
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;4. Various Schemes By Government for Businesses
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;5. How to approach Investors
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;6. Workshops related to- how to prepare business plans, marketing strategies, etc
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div data-aos="fade-up" data-aos-delay="400">
                    <Accordion className="accordion-box" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="icon-faq" />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                        >
                        <Typography className={classes.heading}>Is there any fee required to join E-Cell Karunya ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Since we are a student run organization, we don't require any kind of fee.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

            </div>            
        </section>
    );
}

export default FAQ