import React from 'react';
import './Description.css';
import photo from './img.jpg'
// import Img from 'react-optimized-image';

const Description = () => {

    return (
        <div className='desc-container'>

            <div className='title'>
                <h2>About</h2>
                <div className='underline'>

                </div>
            </div>
            <div className='about-me-container'>
                <div className='about-description'>
                    <h2>Hello!</h2>
                    <h3>
                        I'm Tanveer Ahamed, a Software Engineer based in India.
                    </h3>
                    <p>Technology is a passion of mine and I enjoy nothing more 
                        than learning the trends that technology is taking in order 
                        to work more efficiently and see progress and success. I love building 
                        products which are picture perfect and 
                        I have a passion 
                    </p>
                    <p>
                        After Graduating from VR Siddhartha University. I joined Infosys as Data Engineer 
                        where I started playing with data.
                        Before that I had completed my Inter from Space Application Center as Full stack Developer 
                        where I work on wide variety of interesting and meaningful projects on daily basis.      
                    </p>
                </div>
                <div className='about-img'>
                    <div className='about-img-container'>
                        <img className='profilpic' src={photo } alt='Profile Pic'/>
                    </div>
                </div>
                <div className='about-skill'>
                    <h4>Here are the few technologies I've been working with recently:</h4>
                    <div className='skill-name'>
                            <span>python</span>
                            <span>JavaScript</span>
                            <span>Html & CSS</span>
                            <span>React</span>
                            <span>Azure</span>
                            <span>Node.js</span>
                    </div>
                </div>
            </div>
        </div>

    );
    
};

export default  Description;