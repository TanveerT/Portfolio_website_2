import React from 'react'
// import {IoHomeOutline} from 'react-icons/io5';
// import {RiContactsLine} from 'react-icons/ri';
// import {AiOutlineMessage} from 'react-icons/ai';
// import {BsSun} from 'react-icons/bs';
// import {GiAchievement} from 'react-icons/gi';
// import {MdMusicOff} from 'react-icons/md';
import {ReactComponent as Mellosvg} from './mello.svg';

import './About.css';

const About = () => {

    return (

        <div className="about-container">
            <div className="about">

            
            <p>Hi I'm </p>

            <h1>Tanveer Ahamed</h1>
            <h1>I play with Data.</h1>
                    
                    
            <p>
            I'm Data engineer with 1+ years experience wrangling big datasets.
                Eager to build robust databases that lay the groundwork for revealing game-changing insights at Infosys Limited.
            </p>

                    
            <div className='resume'>
            <a href='./TanveerAhamed.pdf' download>Resume</a>
            </div>

            </div>

            <div className="about-svg">
            <Mellosvg width='20rem' height='20rem'/>
            </div>

        </div>

    );
};



export default About;
