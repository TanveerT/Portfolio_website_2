import React from 'react';
import './Footer.css';
import { BsGithub,BsLinkedin } from "react-icons/bs";
import {FaFacebookSquare} from "react-icons/fa";

const Footer = ()=>{

    return (
        <div className="footer-container">
            <div className="footer-content">
                <h2 style={{color:'white'}}>Contact Me</h2>
                <h4 style={{color:'lightgrey'}}>I'd love to hear your thoughts!</h4>
                <div className="footer-link">
                    <a target="_blank" rel="noreferrer" href="https://github.com/TanveerT"><BsGithub/> Github</a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/taahamed/"><BsLinkedin/> Linkedin</a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/taahamed/"> <FaFacebookSquare/> Facebook</a>
                </div>
                <h3 >Tanveer Ahamed</h3>
                <p style={{color: "grey"}}>Machilipatnam, Andhra Pradesh, India</p>

                <a className='mail' href='mailto:tanveer1.mtm@gmail.com'> tanveer1.mtm@gmail.com</a>
            </div>
           
            
            
        </div>

    );


}



export default Footer;