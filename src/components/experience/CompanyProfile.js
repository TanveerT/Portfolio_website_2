import React from 'react';


const CompanyProfile = ({experience})=>{
    // console.log(experience);
    const {name,title,duration,aboutlist} =experience;
    
    return (

        <div className='exp-body'>
                
                <div className='company-name'>
                  <h3>{name}</h3>
                </div>
                <div className='company-desc'>
                  <h2>{title}</h2>
                  <h4>{duration}</h4>
                  <ul>
                    { aboutlist.map( (line,id) => <li key={id} > {line} </li> )  }
                  </ul>
                </div>
                
            </div>
    );


}

export default CompanyProfile;