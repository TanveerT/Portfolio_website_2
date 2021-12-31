import React from 'react'
import TanveerAhamed from './TanveerAhamed.pdf'
import {ReactComponent as Mellosvg} from './mello.svg';

import './About.css';

const About = () => {

    return (

        <div className="about-container">
            <div className="about">

            
            <p>Hi I'm </p>

            <h1>Tanveer Ahamed</h1>
            <h3 style={{color:'lightblue'}}>I Love building products over WWW!</h3> 
                    
                    
            <p>
            I'm System engineer with 2+ years experience wrangling big datasets.
                Eager to build robust products that lay the groundwork for revealing game-changing insights at Infosys Limited.
            </p>

                    
            <div className='resume'>
            <a href={TanveerAhamed} download>Resume</a>
            </div>

            </div>

            <div className="about-svg">
            <Mellosvg width='20rem' height='20rem'/>
            </div>

        </div>

    );
};



export default About;
