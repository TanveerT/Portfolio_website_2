
import React ,{useState}from 'react';

import './Experience.css';
import CompanyProfile from './CompanyProfile';
import ExpData from './expdata.js';


const Experience = () => {
  
    return (

        <div className='exp-container'>
            <div className='title'>
                <h2>Experience</h2>
                <div className='underline exp-underline'></div>
            </div>
            

            {
              ExpData.map((exp,id)=>{
                console.log(exp)
                return(
                  <CompanyProfile key={id} experience={exp} />
                )

                }
              )
            }
   
        </div>       
    )  
}

export default Experience;
